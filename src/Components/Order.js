import moment from "moment";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";

function Order({ order }) {
    return (
        <div className="relative p-[40px] my-[20px] border-t border-b border-[#e08f33]">
            <h2 className="text-[25px] font-semibold">Order</h2>

            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mm:ss a")}</p>

            <p className="absolute top-[40px] right-[20px]">
                <small className="text-md font-medium">{order.id}</small>
            </p>

            {order.data.basket?.map((item) => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}

            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="text-[20px] font-medium text-right">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Order
