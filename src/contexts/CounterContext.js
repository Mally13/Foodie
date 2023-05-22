import React, { useContext,useState,createContext } from "react";

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const onAdd = () => {
    setCount(count + 1);
  };

  const onMinus = () => {
    setCount(count - 1);
  };

  return (
    <CounterContext.Provider value={{ onAdd, onMinus, count }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
export default CounterProvider;