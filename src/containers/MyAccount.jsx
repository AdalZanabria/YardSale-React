import React from "react";
import "../styles/MyAccount.scss";

const MyAccount = () => {
    return (
        <div className="login">
            <div className="form-container">
                <h1 className="title">My Account</h1>
                <form action="/" className="form">
                    <div>
                        <label for="name" className="label">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Su nombre"
                            className="input input-name"
                        />
                        <label for="email" className="label">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            placeholder="correo@ejemplo.com"
                            className="input input-email"
                        />
                        <label for="password" className="label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="*********"
                            className="input input-password"
                        />
                    </div>
                    <input
                        type="submit"
                        value="Create"
                        className="primary-button login-button"
                    />
                </form>
            </div>
        </div>
    );
};

export default MyAccount;
