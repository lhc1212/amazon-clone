import Subtotal from "./Components/Subtotal";
import CheckoutProduct from "./Components/CheckoutProduct";
import { useStateValue } from "./StateProvider";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function Checkout() {
    const [{ basket }] = useStateValue();
    const [user] = useAuthState(auth);

    return (
        <div className="flex p-5 bg-[#1d1d22] text-white">
            {/* Left */}
            <div>
                <img
                    loading="lazy"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg"
                    alt="Ad"
                    className="object-contain w-full mb-[10px]"
                />

                <div>
                    <h3 className="text-xl ml-[10px] font-semibold">Hello, {user?.displayName}</h3>
                    <h2 className="text-xl mr-[10px] p-[10px] font-bold border-b">Your Shopping Basket</h2>

                    {basket.map((item) => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            {/* Right */}
            <div>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
