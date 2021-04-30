import { useStateValue } from "../StateProvider"

function Product({ id, title, price, rating, image }) {
    const [{ basket }, dispatch] = useStateValue();

    console.log("this is the basket >>>>", basket);

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

    return (
        <div className="flex flex-col items-center justify-end m-[10px] p-[20px] rounded-lg w-full max-h-[400px] min-w-[100px] text-white bg-[#1D1D22] z-75 transition transform duration-300 hover:scale-105">
            {/* Product Info */}
            <div className="h-[100px] mt-[10px]">
                <p>{title}</p>
                <p className="mt-[15px]">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                {/* Rating */}
                <div className="flex">
                    {Array(rating)
                        .fill(rating)
                        .map((_, i) => (
                            <p>⭐️</p>
                        ))}
                </div>
            </div>

            {/* Product Image */}
            <img
                loading="lazy"
                className="max-h-[200px] w-full object-contain mt-[10px] mb-[15px]"
                src={image}
                alt="Product"
            />

            <button
                onClick={addToBasket}
                className="bg-[#f0c14b] mt-[10px] px-2 py-2 rounded-[3px] text-[15px] text-black focus:outline-none hover:bg-[#CC9134] active:ring-2 active:ring-[#F79B35]"
            >
                Add to Basket
            </button>
        </div>
    )
}

export default Product

// Product background color #1D1D22