import React from 'react'
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [error, setError] = useState('');

    const updateError = (msg) => {
        setError(msg);
        setTimeout(() => { setError('') }, 2000);
    }

    const updateCount = (type) => {
        if (type === 'increment') {
            setCount(count + 1);
            setError('');
        }
        else {
            if (!(count === 0)) {
                setCount(count - 1);

            }
            else
                updateError(`Error: Can't decrement 0 !`);
        }
    }

    return (
        <div className='flex flex-col items-center h-[100vh] justify-center gap-10'>
            <h1 className=' text-slate-800 font-semibold text-6xl w-66'>COUNTER APP</h1>
            <div className=' flex w-80 flex-col h-60 items-center justify-center border-slate-800 border-2 rounded-lg'>
                <h1 className=' text-4xl'>{count}</h1>
                <div className='flex justify-between w-64'>
                    <button className='bg-sky-500 w-24 h-10 rounded-xl text-white font-semibold' onClick={() => updateCount('increment')}>Increment</button>
                    <button className='bg-sky-500 w-24 h-10 rounded-xl text-white font-semibold' onClick={() => updateCount('decrement')}>Decrement</button>
                </div>
            </div>
            <h2 className=' text-red-600 font-bold text-lg'>{error}</h2>


        </div >
    )
}

export default Counter;