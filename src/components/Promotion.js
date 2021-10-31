import React from 'react';
import { AppBar } from '@material-ui/core';



const Promotion = () => {
    return (
      <AppBar color="inherit" position="fixed">
        <div className="promotion">
            <p>FLASH SALE: 10% OFF ALL DRINKS! USE PROMO CODE 'OMGFREEDRINKS' <a href="/">Shop Now</a> This is not a real business</p>
        </div>
        </AppBar>
    )
}

export default Promotion
