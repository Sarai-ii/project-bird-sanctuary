import React, { useState } from "react";
import "./App.css"
import Cart from "./Components/Cart";
import BirdCard from "./Components/BirdCard";
import Checkout from "./Components/Checkout";

function App () {
  const [cartContent, setCartContent] = useState([]);
  const [total, setTotal] = useState(0);

  function totalAmount(birdAmount) {
    setTotal(total + birdAmount);
  }

  function deleteBird(birdInfo, index) {
    const filteredBird = cartContent.filter(deleteBird => {
      setTotal(total - birdInfo.amount);
      return deleteBird.position !== index;
    });
    setCartContent(filteredBird);
  }

  return (
    <div className="App">
      <Cart
        total={total}
        cartContent={cartContent}
        deleteBird={deleteBird}
      />

      <BirdCard
        cartContent={cartContent}
        setCartContent={setCartContent}
        totalAmount={totalAmount}
      />

      <Checkout
        setCartContent={setCartContent}
      />
    </div>
  );
};
export default App;