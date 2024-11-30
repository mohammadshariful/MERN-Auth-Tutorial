import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password);

    }

    return (
        <form className='signup' onSubmit={handleSubmit}>
            <h3>Log in</h3>
            <label htmlFor="email">Email</label>
            <input type="email" name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label htmlFor="password">Email</label>
            <input type="password" name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button>LogIn</button>
        </form>
    );
};

export default Login;