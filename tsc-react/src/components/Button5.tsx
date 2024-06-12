import React from 'react'

type ButtonTypes = {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
}

const Button5 = ({ count, setCount }: ButtonTypes) => {
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={incrementCount} className='bg-slate-200 rounded p-3 m-2'>count is {count}</button>
  );
};

export default Button5;