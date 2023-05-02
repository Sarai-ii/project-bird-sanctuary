import React from "react";

function Checkout ({ setCartContent }) {
    function handleSubmit() {
        alert("You have adopted birds. Thank you!")
        setCartContent([]);
    }
    return (
        <div className="Checkout">
        <form onSubmit={handleSubmit}>
            <h3>Checkout</h3>
            <label htmlFor="first">First Name</label>
            <input type="text" id="first"/>

            <label htmlFor="last">Last Name</label>
            <input type="text" id="last"/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email"/>

            <label htmlFor="zip">Zip Code</label>
            <input type="number"id="zip"/>
            <br />
            <input type="submit" />
        </form>
      </div>
    )
}
export default Checkout;