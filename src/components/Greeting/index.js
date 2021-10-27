import './style.css'

import {useState, useEffect} from 'react';

function Greeting(){
    const [username, setUsername] = useState(0);
    useEffect(() => {
    setUsername(prompt("Please enter your name:"));
}, []);
  
    return(
        <h1>Hi <span>{username}</span>, welcome to the annual Squid Game!</h1>
    )

}

export default Greeting;