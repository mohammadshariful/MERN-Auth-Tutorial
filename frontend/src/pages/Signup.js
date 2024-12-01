import React, { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, error, isLoading } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submit');
        await signup(email, password);

    }

    return (
        <form className='signup' onSubmit={handleSubmit}>
            <h3>Sign up</h3>
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
            <button disabled={isLoading}>Sign up</button>
            {error && <p style={{ backgroundColor: 'red', color: '#fff' }}>{error}</p>}
        </form>
    );
};

export default Signup;