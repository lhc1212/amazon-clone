import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider"
import { auth } from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"

function Header() {
    const [{ basket }] = useStateValue();
    const [user] = useAuthState(auth);

    const handleAuth = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="sticky top-0 flex items-center h-[60px] w-full bg-[#131921] z-100">
            <Link to="/">
                <img
                    className="w-[100px] object-contain ml-[20px] mr-[20px] mt-[10px]"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>

            {/* Search */}
            <div className="flex-grow flex items-center rounded-[5px]">
                <input className="flex-grow h-[12px] py-[22px] px-[10px] rounded-l-[5px] focus:outline-none" />
                <SearchIcon className="h-11 p-[10px] bg-[#C58532] hover:bg-[#cc9033] rounded-r-[5px] cursor-pointer" />
            </div>

            {/* Options */}
            <div className="flex items-center justify-evenly">
                <Link to={!user && "/login"}>
                    {user ? (
                        <div className="headerOption" onClick={handleAuth}>
                            <span className="headerOptionLineOne">Hello, {user.displayName}</span>
                            <span className="headerOptionLineTwo">Sign out</span>
                        </div>
                    ) : (
                        <div className="headerOption">
                            <span className="headerOptionLineOne">Hello,</span>
                            <span className="headerOptionLineTwo">Sign in</span>
                        </div>
                    )}
                </Link>

                <Link to="/orders">
                    <div className="headerOption">
                        <span className="headerOptionLineOne">Returns</span>
                        <span className="headerOptionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="checkout">
                    <div className="flex items-center cursor-pointer">
                        <ShoppingCartIcon className="h-9 text-white" />
                        <span className="headerOptionLineTwo text-[#F79B35] ml-[5px] mr-[15px]">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header

// https://www.youtube.com/watch?v=RDV3Z1KCBvo 4:26:12 