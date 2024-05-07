import { useWildCoin } from "../WildCoin/WildCoinContext";

function Timer() {
  const { formatTime, seconds } = useWildCoin();

  return (
    <div>
      <p>{formatTime(seconds)}</p>
    </div>
  );
}

export default Timer;
