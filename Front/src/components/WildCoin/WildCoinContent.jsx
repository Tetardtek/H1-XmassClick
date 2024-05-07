import { createContext, useContext, useState, useEffect } from "react";

export const WildCoinContext = createContext();

export const useWildCoin = () => {
  return useContext(WildCoinContext);
};

export function WildCoinProvider({ children }) {
  // Value of coin
  const [wildCoin, setWildCoin] = useState(0);
  // increment by click state
  const [incrementClick, setIncrementClick] = useState(1);
  // increment inner useEffect state
  const [incrementPerSecond, setIncrementPerSecond] = useState(1);

  const incrementWildCoin = (amount) => {
    setWildCoin((prevWildCoin) => prevWildCoin + amount);
  };
  /**
   * @passiveGenerationInterval  incre per sec wild coin in wildCoin
   *  */
  useEffect(() => {
    const passiveGenerationInterval = setInterval(() => {
      incrementWildCoin(incrementPerSecond);
    }, 1000);

    return () => clearInterval(passiveGenerationInterval);
  }, [incrementPerSecond]);

  const value = {
    wildCoin,
    setWildCoin,
    incrementClick,
    incrementWildCoin,
  };

  return (
    <WildCoinContext.Provider value={value}>
      {children}
    </WildCoinContext.Provider>
  );
}
