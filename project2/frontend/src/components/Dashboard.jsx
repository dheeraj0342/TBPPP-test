import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [activity, setActivity] = useState([]);

    useEffect(() => {
        const fetchActivity = async () => {
            try {
                const response = await axios.get('/api/users/activity', { params: { userId: 'user-id' } });
                setActivity(response.data.activity);
            } catch (error) {
                console.error('Error fetching activity', error);
            }
        };

        fetchActivity();
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <ul>
                {activity.map((log, index) => (
                    <li key={index}>{log}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;