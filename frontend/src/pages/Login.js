import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, isLoading, error } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
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
            <button disabled={isLoading}>LogIn</button>
            {error && <p style={{ backgroundColor: 'red', color: '#fff' }}>{error}</p>}
        </form>
    );
};

export default Login;