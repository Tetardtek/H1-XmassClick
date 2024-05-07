import { createContext, useContext, useState, useEffect } from "react";

export const WildCoinContext = createContext();
export const useWildCoin = () => {
  return useContext(WildCoinContext);
};

export function WildCoinProvider({ children }) {
  const initialState = {
    wildCoin: 0,
    incrementClick: 1,
    incrementPerSecond: 0,
  };

  const [state, setState] = useState(() => {
    const storedContext = JSON.parse(localStorage.getItem("wildCoinContext"));
    return {
      ...initialState,
      ...(storedContext || {}),
    };
  });

  const [coffee, setCoffee] = useState([false, 0]);
  const [manic, setManic] = useState([false, 0]);
  const [snowman, setSnowman] = useState([false, 0]);
  const [bonnet, setBonnet] = useState([false, 0]);
  const [sugar, setSugar] = useState([false, 0]);
  const [cookie, setCookie] = useState([false, 0]);
  const [couronne, setCouronne] = useState([false, 0]);
  const [epice, setEpice] = useState([false, 0]);
  const [biere, setBiere] = useState([false, 0]);

  const [santaDrunk, setSantaDrunk] = useState(false);

  const updateWildCoin = (amount) => {
    setState((prev) => ({
      ...prev,
      wildCoin: prev.wildCoin + amount,
    }));
  };

  const incrementWildCoin = (amount) => {
    updateWildCoin(amount);
  };

  const setIncrementClick = (amount) => {
    setState((prev) => ({
      ...prev,
      incrementClick: amount,
    }));
  };

  const setIncrementPerSecond = (amount) => {
    setState((prev) => ({
      ...prev,
      incrementPerSecond: amount,
    }));
  };

  const setWildCoin = (amount) => {
    setState((prev) => ({
      ...prev,
      wildCoin: amount,
    }));
  };

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    return formattedTime;
  };


  
  useEffect(() => {
    localStorage.setItem("wildCoinContext", JSON.stringify(state));
  }, [state]);


  useEffect(() => {
    const passiveGenerationInterval = setInterval(() => {
      updateWildCoin(state.incrementPerSecond);
    }, 1000);

    return () => clearInterval(passiveGenerationInterval);
  }, [state.incrementPerSecond]);

  const contextValue = {
    ...state,
    incrementWildCoin,
    setIncrementClick,
    setIncrementPerSecond,
    setWildCoin,
    coffee,
    setCoffee,
    manic,
    setManic,
    snowman,
    setSnowman,
    bonnet,
    setBonnet,
    sugar,
    setSugar,
    cookie,
    setCookie,
    couronne,
    setCouronne,
    epice,
    setEpice,
    biere,
    setBiere,
    setSantaDrunk,
    santaDrunk,
    seconds,
    setSeconds,
    formatTime,
  };

  return (
    <WildCoinContext.Provider value={contextValue}>
      {children}
    </WildCoinContext.Provider>
  );
}
