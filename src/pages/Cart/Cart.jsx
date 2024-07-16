import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
    const { cartItem, food_list, removeFromCart, getTotalAmount } = useContext(StoreContext)
    const navigate = useNavigate();
    return (
        <div className='Cart'>
            <div className="cart-items">
                <div className="cart-items-tittle">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div >
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItem[item._id] > 0) {
                        return (
                            <>
                                <div className="cart-items-tittle cart-items-item">
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItem[item._id]}</p>
                                    <p>${item.price * cartItem[item._id]}</p>
                                    <p className='cross' onClick={() => removeFromCart(item._id)}>x</p>
                                </div>
                                <hr />
                            </>

                        )
                    }





                })}

            </div>
            <div className="cart-bootom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalAmount()}</p>

                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery</p>
                            <p>${getTotalAmount() === 0 ? 0 : 2}</p>

                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${getTotalAmount() === 0 ? 0 : getTotalAmount() + 2}</b>
                        </div>
                    </div>
                    <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-promocode">
                    <p>if you have promocode enter it here</p>
                    <div className="cart-promocode-input">
                        <input type="text" placeholder="Promo code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart