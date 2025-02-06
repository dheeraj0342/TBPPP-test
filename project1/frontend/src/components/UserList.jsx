import React, { useState, useEffect } from 'react';
import UserUpdateForm from './UserUpdateForm';
import './UserList.css';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const fetchUsers = async () => {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
    };

    const deleteUser = async (id) => {
        await fetch(`/api/users/${id}`, {
            method: 'DELETE',
        });
        fetchUsers();
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="user-list">
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                        <button onClick={() => setSelectedUser(user)}>Update</button>
                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            {selectedUser && (
                <UserUpdateForm user={selectedUser} onUserUpdated={fetchUsers} />
            )}
        </div>
    );
};

export default UserList;