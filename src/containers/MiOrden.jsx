import React from "react";
import "../styles/MiOrden.scss";

const MiOrden = () => {
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title">My Order</h1>
                <div className="my-order-content">
                    <div className="order">
                        <p>
                            <span>04.25.21</span>
                            <span>6 artículos</span>
                        </p>
                        <p>$560.00</p>
                    </div>
                    <div className="shopping-cart">
                        <figure>
                            <img
                                src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="product-img"
                            />
                        </figure>
                        <p>Bike</p>
                        <p>$30.00</p>
                    </div>
                    <div className="shopping-cart">
                        <figure>
                            <img
                                src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="product-img"
                            />
                        </figure>
                        <p>Bike</p>
                        <p>$30.00</p>
                    </div>
                    <div className="shopping-cart">
                        <figure>
                            <img
                                src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="product-img"
                            />
                        </figure>
                        <p>Bike</p>
                        <p>$30.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiOrden;
