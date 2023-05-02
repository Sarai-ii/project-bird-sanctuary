import birdData from "../data/birds";

function BirdCard ({ cartContent, setCartContent, totalAmount }) {
    return (
      <div className="birds">
        {birdData.map(bird => {
            return (
                <div className="card" key={bird.id}>
                    <h4>{bird.name}</h4>
                    <p><strong>Price: ${bird.amount}</strong></p>
                    <img src={bird.img} alt={bird.name} />
                    <button className="adopt"
                        onClick={() => {
                            // //to only add if the cart is empty or not duplicated.
                            // if(!cartContent || !cartContent.some(eachBird => eachBird.id === bird.id)) {}
                            totalAmount(bird.amount);
                            setCartContent([
                                ...cartContent,
                                {
                                    id: bird.id,
                                    name: bird.name,
                                    amount: bird.amount
                                }
                            ]);
                        }}
                    >
                        Adopt
                    </button>
                </div>
            )
        })}
      </div>
    );
  };
  export default BirdCard;

