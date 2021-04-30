import { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import { auth } from "./firebase"

function Login() {
    const history = useHistory();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const usernameRef = useRef(null);

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
        )
            .then((auth) => history.push("/"))
            .catch((error) => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
        )
            .then((auth) => {
                auth.user.updateProfile({
                    displayName: usernameRef.current.value,
                })

                if (auth) {
                    history.push("/");
                }
            })
            .catch((error) => alert(error.message))
    }

    return (
        <div className="flex flex-col items-center h-screen text-white bg-[#1E1E23] pt-[30px]">
            <Link to="/">
                <img
                    loading="lazy"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="Amazon Logo"
                    className="my-[20px] object-contain w-[130px] mx-auto"
                />
            </Link>

            <div className="flex flex-col w-[350px] h-[545px] rounded-[5px] border border-[#f79b35] p-[20px]">
                <h1 className="text-3xl font-medium mb-[20px]">Sign In</h1>

                <form>
                    <h5 className="mb-[5px] font-semibold">Username</h5>
                    <input ref={usernameRef} type="email" required className="h-[30px] py-6 px-1 mb-[10px] w-[98%] text-black rounded-[5px] focus:outline-none" />

                    <h5 className="mb-[5px] font-semibold">E-mail</h5>
                    <input ref={emailRef} type="email" required className="h-[30px] py-6 px-1 mb-[10px] w-[98%] text-black rounded-[5px] focus:outline-none" />

                    <h5 className="font-semibold">Password</h5>
                    <input ref={passwordRef} type="password" required className="h-[30px] py-6 px-1 mb-[10px] w-[98%] text-black rounded-[5px] focus:outline-none" />

                    <button onClick={signIn} type="submit" className="w-full bg-[#f0c14b] mt-[10px] px-2 py-2 rounded-[3px] text-[15px] font-medium text-black focus:outline-none hover:bg-[#CC9134] active:ring-2 active:ring-[#F79B35]">
                        Sign In
                    </button>
                </form>

                <p className="mt-[15px] text-[12px]">
                    By signing-in you agree to the Aistein's Amazon Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className="text-[15px] bg-[#EFEFEF] mt-[10px] px-2 py-2 rounded-[3px] text-black hover:bg-gray-300 focus:outline-none active:ring-2 active:ring-[#F79B35]">
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login
