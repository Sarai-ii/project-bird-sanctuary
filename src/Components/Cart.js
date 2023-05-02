import { useState } from "react";
import bonusItems from "../data/bonusItems";

function Cart ({cartContent, total, deleteBird}) {
    const [bonusItem, setBonusItem]  = useState([]);

    function addBonus() {
        if(total && !bonusItem.includes(bonusItems[0])) {
            setBonusItem(() => [...bonusItem, bonusItems[0]]);
        } else if(total >= 300 && !bonusItem.includes(bonusItems[1])) {
            setBonusItem(() => [...bonusItem, bonusItems[1]]);
        } else if(total >= 500 && !bonusItem.includes(bonusItems[2])) {
            setBonusItem(() => [...bonusItem, bonusItems[2]]);
        } else if(total > 1000 && !bonusItem.includes(bonusItems[3])) {
            setBonusItem(() => [...bonusItem, bonusItems[3]]);
        }
    }

    return (
      <div className="Cart">
        <h1>Cart</h1>
        <h3>Discount: {(cartContent.length > 2) ? 10 : 0}%</h3>
        <h4>Total: ${(cartContent.length > 2) ? total - (total * 0.10) : total}</h4>
        <div>
            <ol>
                {cartContent.map((birdInfo, index) => {
                    //giving the list number to each bird.
                    birdInfo.position = index;

                    return (
                        <li key={index}>
                            {birdInfo.name} ${birdInfo.amount}
                            <button className="delete" onClick={() => {
                                setBonusItem([]);
                                deleteBird(birdInfo, index);
                            }}>
                                Delete
                            </button>
                        </li>
                    )
                })}
            </ol>
        </div>
        <div>
            <p>Your donations has qualified you for the following items:</p>
            <ul>
                {addBonus()}
                {bonusItem.map((bonus, index) => <li key={index}>{bonus}</li>)}
            </ul>
        </div>
      </div>
    );
  };

  export default Cart;