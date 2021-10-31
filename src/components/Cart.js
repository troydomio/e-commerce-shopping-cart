import { useState} from 'react';
import {IconButton, Badge} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';


const Navbar = ({totalItems,cart}) => {

  const [cartOpen, setCartOpen] = useState(false);

  // when I click button render cart
  //cart.subtotal.formatted
  //cart.total_items
  //cart.line_items

  const handleClick = () => {
    setCartOpen(true);

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

  if (!cart.line_items) return 'Loading';
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
       <p className="quantity">{item.quantity} </p>
        </div>
      ))
    }
    <p>total items: {totalItems}</p>
    <p>Subtotal:${cart.subtotal.formatted}</p>

  </div>
</div>
      </>
    )
}

export default Navbar
