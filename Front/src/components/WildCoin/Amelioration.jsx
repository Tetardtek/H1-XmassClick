import { useWildCoin } from "./WildCoinContext";

function Ameliorations() {
  const {
    wildCoin,
    incrementClick,
    setWildCoin,
    setIncrementClick,
    incrementPerSecond,
    setIncrementPerSecond,
  } = useWildCoin();

  const activePrices = [5, 15, 50, 500]; // prix
  const passivePrices = [5, 15, 50, 500];
  const activeIncrementValues = [1, 3, 10, 100]; // boost = incrementValue
  const passiveIncrementValues = [1, 3, 10, 100]; // = incrementValue

  const acheterAmelioration = (type, amount) => {
    const prices = type === "actif" ? activePrices : passivePrices;
    const incrementValues =
      type === "actif" ? activeIncrementValues : passiveIncrementValues;

    const price = prices[amount - 1];
    const incrementValue = incrementValues[amount - 1];

    if (wildCoin >= price) {
      if (type === "actif") {
        setIncrementClick(incrementClick + incrementValue);
      } else if (type === "passif") {
        setIncrementPerSecond(incrementPerSecond + incrementValue);
      }
      setWildCoin(wildCoin - price);
    } else {
      console.log("Pas assez de WildCoin pour acheter cette amélioration.");
    }
  };

  return (
    <div className="divMagasinAmelio">
      <h2>Magasin d'Améliorations</h2>
      <div className="divAmelioActives">
        <p>Améliorations Actives :</p>
        {[1, 2, 3, 4].map((amount) => (
          <div key={amount}>
            Price: {activePrices[amount - 1]} - (+
            {activeIncrementValues[amount - 1]})
            <button
              className="amelioActives"
              onClick={() => acheterAmelioration("actif", amount)}
            >
              Acheter
            </button>
          </div>
        ))}
      </div>
      <div className="divAmelioPassives">
        <p>Améliorations Passives :</p>
        {[1, 2, 3, 4].map((amount) => (
          <div key={amount}>
            Price: {passivePrices[amount - 1]} - (+
            {passiveIncrementValues[amount - 1]})
            <button
              className="amelioPassives"
              onClick={() => acheterAmelioration("passif", amount)}
            >
              Acheter
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ameliorations;
