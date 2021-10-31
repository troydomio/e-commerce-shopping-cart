
import {IconButton, Badge} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';


const Navbar = () => {
    return (
        <div className="nav-cart">
         <IconButton aria-label="Show cart items" color="inherit">
          <Badge badgeContent={2} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
               
        </div>
    )
}

export default Navbar
