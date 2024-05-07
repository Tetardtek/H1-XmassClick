import { useWildCoin } from "./WildCoinContext";
import WildCoinS from "../../../public/WildCoin.svg";

function WildCoinIncrementAction() {
  const { incrementClick, incrementWildCoin } = useWildCoin();

  const handleIncrement = () => {
    incrementWildCoin(incrementClick);
  };

  return (
    <img src={WildCoinS} className="wildCoinBtn" style={{width:"40px", height:"40px"}} alt="Clique pour augmenter le score" aria-label="Clique pour augmenter le score" onClick={handleIncrement} />
  );
}

export default WildCoinIncrementAction;
