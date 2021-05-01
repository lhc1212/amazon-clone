import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Order from "./Components/Order";
import { auth, db } from "./firebase";

function Orders() {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            db
                .collection("users")
                .doc(user?.uid)
                .collection("orders")
                .orderBy("created", "desc")
                .onSnapshot((snapshot) => (
                    setOrders(snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    })))
                ))
        } else {
            setOrders([]);
        }
    }, [user])

    return (
        <div className="py-[20px] px-[80px] text-white">
            <h1 className="text-[30px] font-bold m-[30px]">Your Orders</h1>

            <div className="">
                {orders?.map((order) => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
