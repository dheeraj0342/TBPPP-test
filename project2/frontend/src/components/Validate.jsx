import React, { useState } from 'react';
import axios from 'axios';

const Validate = () => {
    const [email, setEmail] = useState('');
    const [validationCode, setValidationCode] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users/validate', { email, validationCode });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error validating user');
        }
    };

    return (
        <div>
            <h2>Validate</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="text" value={validationCode} onChange={(e) => setValidationCode(e.target.value)} placeholder="Validation Code" required />
                <button type="submit">Validate</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Validate;