import { useState } from 'react';

export const useCounter = (initialValue = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    setCounter (prev => prev + value);
  };
  const decrement = (value = 1) => {
    setCounter ( prev => {
      if (prev - value < 1) return prev
      return prev - value;
    });
  };

  return {
    counter,
    increment,
    decrement
  };
};

export default useCounter;
