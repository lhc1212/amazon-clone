import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div className="flex my-[20px]">
            <img
                loading="lazy"
                src={image}
                alt="Product"
                className="object-contain w-[180px] h-[180px]"
            />

            {/* Product Info */}
            <div className="pl-[20px]">
                <p className="text-[17px] font-extrabold">{title}</p>

                <p className="">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="flex">
                    {Array(rating)
                        .fill(rating)
                        .map((_, i) => (
                            <p>⭐️</p>
                        ))}
                </div>

                <button onClick={removeFromBasket} className="bg-[#f0c14b] mt-[10px] px-2 py-2 rounded-[3px] text-[15px] font-medium text-black focus:outline-none hover:bg-[#CC9134] active:ring-2 active:ring-[#F79B35]">
                    Remove from Basket
                </button>
            </div>
        </div>
    )
}

export default CheckoutProduct
