import React from 'react';
import "./Cart.css";
const Cart = (props) => {
    const { Name, logo, Phone, Address, City, State, salary, linnkedin, fb, Website } = props.service;
    return (
        <div className="cart">
            <img src={logo} alt="" />
            <p>Name : {Name}</p>
            <p>Phone : {Phone}</p>
            <p>Addres:{Address}</p>
            <p>City:{City}</p>
            <p>State:{State}</p>
            <p>salary :{salary}</p>
            <button onClick={() => props.handeladdtocard(props.service)}>ADD TO Cart</button>
            <div className="social">
                <a href={fb}><i className="fab fa-facebook-square"></i></a>
                <a href={Website}><i className="fab fa-internet-explorer"></i></a>
                <a href={linnkedin}><i className="fab fa-linkedin"></i></a>
            </div>


        </div>

    );
};

export default Cart;