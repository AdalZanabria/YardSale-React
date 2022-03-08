import React from "react";
import "../styles/MisOrdenes.scss";

const MisOrdenes = () => {
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title">My Orders</h1>

                <div className="my-order-content">
                    <div className="order">
                        <p>
                            <span>04.25.21</span>
                            <span>6 artículos</span>
                        </p>
                        <p>$560.00</p>
                        <img src="./icons/flechita.svg" alt="View Order" />
                    </div>
                    <div className="order">
                        <p>
                            <span>04.25.21</span>
                            <span>6 artículos</span>
                        </p>
                        <p>$560.00</p>
                        <img src="./icons/flechita.svg" alt="View Order" />
                    </div>
                    <div className="order">
                        <p>
                            <span>04.25.21</span>
                            <span>6 artículos</span>
                        </p>
                        <p>$560.00</p>
                        <img src="./icons/flechita.svg" alt="View Order" />
                    </div>
                    <div className="order">
                        <p>
                            <span>04.25.21</span>
                            <span>6 artículos</span>
                        </p>
                        <p>$560.00</p>
                        <img src="./icons/flechita.svg" alt="View Order" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MisOrdenes;
