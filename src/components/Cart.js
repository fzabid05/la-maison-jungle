import React from 'react';

const Cart = () => {
    const monsteraPrice = 8;
    const lierrePrice = 10;
    const fleursPrice = 15;
    return (<div>
        <h2>Panier</h2>
        <ul>
          <li>un monstera : {monsteraPrice}€</li>
          <li>un lierre : {lierrePrice}€</li>
          <li>un bouquet de fleurs : {fleursPrice}€</li>
        </ul>
        <div>Total : {monsteraPrice + lierrePrice + fleursPrice}€</div>
      </div>
    )
};

export default Cart;