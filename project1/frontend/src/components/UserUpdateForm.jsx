import React, { useState } from 'react';
import './UserUpdateForm.css';

const UserUpdateForm = ({ user, onUserUpdated }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');

    const updateUser = async (updatedUser) => {
        await fetch(`/api/users/${user.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        });
        onUserUpdated();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUser = { name, email, password };
        updateUser(updatedUser);
    };

    return (
        <form className="user-update-form" onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Update User</button>
        </form>
    );
};

export default UserUpdateForm;