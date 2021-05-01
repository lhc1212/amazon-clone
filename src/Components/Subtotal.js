import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider"

function Subtotal() {
    const history = useHistory();
    const [{ basket }] = useStateValue();

    return (
        <div className="flex flex-col justify-between w-[300px] h-[150px] p-[20px] ml-2 border border-[#DF8E34] rounded">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="flex items-center">
                            <input className="mr-[5px]" type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button onClick={(e) => history.push("/payment")} className="text-sm font-medium bg-[#f0c14b] rounded-[2px] w-full h-[37px] mt-[10px] text-black focus:outline-none hover:bg-[#CC9134] active:ring-2 active:ring-[#F79B35]">Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
