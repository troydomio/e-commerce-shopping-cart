import React from 'react'

const HeroSection = () => {

    
    const handleClick= () => {
        // Grab + Delete landing page parallax image
        const hero= document.getElementById('parallax');
        hero.remove();
        const container = document.getElementById('container')
        // Create New Elements
        const div1 = document.createElement('div')
        div1.className="div1"
        const img2 = document.createElement('img')
        img2.src='https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=730&q=80'
        const img3 = document.createElement('img')
        img3.src='https://m.media-amazon.com/images/I/51Z3APNIeHL._AC_SX679_.jpg'
        //Append new elements to browser
       div1.append(img3,img2)
        container.append(div1)
    }

    return (
        <div className="container" id="container">
        <div className="parallax-hero" id="parallax">
            <div className="hero-text">
                <h1>React Coffee</h1>
                <p onClick={handleClick}>What We Offer</p>
            </div>
        </div>
        </div>
    )
}

export default HeroSection
