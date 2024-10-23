import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function LogIn() {
    const [userName, setuserName] = useState('');
    const [passWord, setpassWord] = useState('');
    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ userName, passWord });
    }
    return (
        <div>
            <h2>LogIn</h2>
            <input 
                type="text"
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
                placeholder='Username'
            />     
            <input 
                type="password"
                value={passWord}
                onChange={(e) => setpassWord(e.target.value)}
                placeholder='Password'
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default LogIn;
