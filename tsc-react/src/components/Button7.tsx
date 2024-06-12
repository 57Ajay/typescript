import React from 'react'

type ButtonProps<T> = {
    countValue: T,
    countHistory: T[]
};

const Button7 = <T, >({countValue, countHistory}: ButtonProps<T>) => { 
  return (
    <button className='bg-zinc-300 rounded p-3 m-2'>
        Button 7
    </button>
  )
}

export default Button7