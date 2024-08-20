import React, { useMemo } from 'react'

function UseMemo() {
    const number = 5;
    const square = useMemo(()=> {
        console.log('Calculating square...');
        return number * number;
    }, [number] );
  return (
    <div>
        <p>Number: {number}</p>
        <p>Sqaure: {square}</p>
    </div>
  )
}

export default UseMemo