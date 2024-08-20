import {useState} from 'react';

function Message() {
    const [message, setMessage] = useState('Click to subscribe')
    return (
    <div>
         <h1>{message}</h1>
         <button onClick={() => {
            setMessage('Thanks for subscribing')}}>Subscribe</button>
    </div>
  )
}

export default Message