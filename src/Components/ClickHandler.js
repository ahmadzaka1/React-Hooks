import React from 'react'

function ClickHandler() {
    const eventHandler = () => {
        console.log('Button Clicked');
    }
  return (
    <div>
        <button onClick={eventHandler}>Click me</button>
    </div>
  )
}

export default ClickHandler