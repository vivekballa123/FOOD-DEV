import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { assets } from '../../assets/assets'
const MyOrders = () => {

    const { url, token } = useContext(StoreContext)
    const [data, setData] = useState([])
    const [message, setMessage] = useState("")

    const fetchOrders = async () => {
        if (!token) {
            setData([])
            setMessage("Please sign in to view your orders.")
            return
        }

        try {
            const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } })
            if (response?.data?.success) {
                setData(Array.isArray(response.data.data) ? response.data.data : [])
                setMessage("")
            } else {
                setData([])
                setMessage(response?.data?.message || "Unable to load your orders right now.")
            }
        } catch (error) {
            console.error(error)
            setData([])
            setMessage("Unable to load your orders right now.")
        }
    }

    useEffect(() => {
        fetchOrders()
    }, [token])

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            {message && <p className='my-orders-empty'>{message}</p>}
            <div className="container">
                {data.map((order, index) => {
                    const items = Array.isArray(order.items) ? order.items : []
                    return (
                        <div key={index} className="my-orders-order">
                            <img src={assets.parcel_icon} alt="" />
                            <p>{items.map((item, index) => {
                                if (index === items.length - 1) {
                                    return item.name + " x " + item.quantity
                                }
                                else {
                                    return item.name + " x " + item.quantity + ","
                                }
                            })}</p>
                            <p>${order.amount}.00</p>
                            <p>Items:{items.length}</p>
                            <p><span>&#x25cf;</span><b>{order.status}</b></p>
                            <button onClick={fetchOrders}>Track Order</button>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default MyOrders
