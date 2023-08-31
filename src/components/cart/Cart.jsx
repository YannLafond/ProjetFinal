import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBurger, deleteBurger } from '../redux/burgersSlice';


const CartItem = ({ id, title, img, quantity, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={() => decrement(id)}>-</button>
      <input type="number" readOnly value={quantity} />
      <button onClick={() => increment(id)}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);

  const increment = (itemId) => {
    dispatch(addBurger({ id: itemId }));
  };

  const decrement = (itemId) => {
    dispatch(deleteBurger({ id: itemId }));
  };
  
  const sousTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity);
  const TVA = sousTotal * 0.18;
  const fraisLivraison = 200;

  return (
    <section className="cart">
      <main>
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            img={item.img}
            quantity={item.quantity}
            increment={increment}
            decrement={decrement}
          />
        ))}
        <article>
          <div>
            <h4>Sous-total</h4>
            <p>₹{sousTotal}</p>
          </div>
          <div>
            <h4>TVA</h4>
            <p>₹{TVA}</p>
          </div>
          <div>
            <h4>Frais de livraison</h4>
            <p>₹{fraisLivraison}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>₹{sousTotal + TVA + fraisLivraison}</p>
          </div>
          <div> 
            <Link to="/shipping">Payer</Link>
          </div>

        </article>
      </main>
    </section>
  );
};


export default Cart;
