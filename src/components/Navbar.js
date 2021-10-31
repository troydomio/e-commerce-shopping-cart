
import {IconButton, Badge} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';


const Navbar = ({totalItems}) => {
    return (
        <div className="nav-cart">
         <IconButton aria-label="Show cart items" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
               
        </div>
    )
}

export default Navbar
