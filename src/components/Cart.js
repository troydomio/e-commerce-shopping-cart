import { useState} from 'react';
import {IconButton, Badge} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';



const Cart = ({totalItems,cart, handleEmptyCart,handleUpdateCartQty, handleRemoveFromCart}) => {

  const handleClick = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    const span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
  }

  if (!cart.line_items) return 'Loading'; //error checker
  

  const cartItems = cart.line_items
    return (
      <>
        <div className="nav-cart">
         <IconButton aria-label="Show cart items" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart onClick={handleClick} className="shopbtn"/>
          </Badge>
        </IconButton>
        </div>

        <div id="myModal" className="modal">
  <div className="modal-content">
    <span className="close">&times;</span>
    <p>Your Shopping Cart</p>
    {
      cartItems.map((item)=>(
        <div className="itemlist">
          <p className="name">{item.name}</p>
<div className="quantity">
          <Button type="button" size="large" className="plus" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
       <p >{item.quantity} </p>
       <Button type="button" size="large" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
</div>
       <Button type="button" size="large" onClick={() => handleRemoveFromCart(item.id)} >🗑️</Button>
        </div>
      ))
    }
    <p>total items: {totalItems}</p>
    <p>Subtotal:${cart.subtotal.formatted}</p>
    <div>
  <button onClick={()=>handleEmptyCart}>Empty Cart</button>
  <button>Checkout</button>
</div>
  </div>
</div>


      </>
    )
}

export default Cart
