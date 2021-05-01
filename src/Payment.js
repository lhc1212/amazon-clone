import { useAuthState } from "react-firebase-hooks/auth";
import CheckoutProduct from "./Components/CheckoutProduct";
import { auth, db } from "./firebase";
import { useStateValue } from "./StateProvider";
import FlipMove from 'react-flip-move';
import { Link, useHistory } from "react-router-dom";
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import firebase from "firebase";

function Payment() {
    const history = useHistory();
    const [user] = useAuthState(auth);

    const [{ basket }, dispatch] = useStateValue();

    const {
        wrapperProps,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps
    } = usePaymentInputs();

    const handleSubmit = (e) => {
        e.preventDefault();

        db
            .collection("users")
            .doc(user?.uid)
            .collection("orders")
            .doc()
            .set({
                basket: basket,
                amount: getBasketTotal(basket),
                created: firebase.firestore.FieldValue.serverTimestamp(),
            })

        dispatch({
            type: "EMPTY_BASKET",
        })

        history.replace("/orders");
    }

    return (
        <div>
            <div>
                <h1 className="text-center text-[25px] p-[15px] text-white font-normal border-b border-[#e08f33] cursor-pointer">
                    Checkout (<Link to="/checkout">{basket?.length} Items</Link>)
                </h1>

                {/* Payment section */}
                <div className="paymentSection text-white">
                    <div className="paymentTitle">
                        <h3>Delivery Address</h3>
                    </div>

                    <div className="flex-8 font-medium">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* Review Items */}
                <div className="paymentSection text-white">
                    <div className="paymentTitle">
                        <h3>Review Items and Delivery</h3>
                    </div>

                    <FlipMove className="flex-8">
                        {basket.map((item) => (
                            <FlipMove>
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            </FlipMove>
                        ))}
                    </FlipMove>
                </div>

                {/* Payment method */}
                <div className="paymentSection">
                    <div className="paymentTitle">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="flex-8 items-center">
                        <form className="max-w-[400px]" onSubmit={handleSubmit}>
                            <PaymentInputsWrapper {...wrapperProps} className="w-full">
                                <svg {...getCardImageProps({ images })} />
                                <input {...getCardNumberProps()} />
                                <input {...getExpiryDateProps()} />
                                <input {...getCVCProps()} />
                            </PaymentInputsWrapper>

                            <div className="text-white font-semibold mt-4 pb-4">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />

                                <button className="bg-[#f0c14b] mt-3 w-full px-2 py-2 rounded-[3px] text-[15px] text-black focus:outline-none hover:bg-[#CC9134] active:ring-2 active:ring-[#F79B35]">
                                    Buy Now!
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment

// https://www.youtube.com/watch?v=RDV3Z1KCBvo 