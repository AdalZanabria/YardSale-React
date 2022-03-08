import React from "react";
import "../styles/DetalleProducto.scss";

const DetalleProducto = () => {
    return (
        <aside className="product-detail">
            <div className="product-detail-close">
                <img src="./icons/icon_close.png" alt="close" />
            </div>
            <img
                src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="product image"
            />
            <div className="product-info">
                <p>$35.00</p>
                <p>Bike</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium, nisi illum magni aliquam officia nesciunt soluta
                    libero, delectus sapiente maxime assumenda ducimus
                    laboriosam illo! At voluptatem enim repudiandae eos maxime?
                </p>
                <button className="primary-button add-to-cart-button">
                    <img src="./icons/bt_add_to_cart.svg" alt="Add to cart" />
                    Add to cart
                </button>
            </div>
        </aside>
    );
};

export default DetalleProducto;
