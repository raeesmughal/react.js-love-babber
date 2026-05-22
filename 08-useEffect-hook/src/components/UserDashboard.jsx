import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const UserDashboard = () => {
    // setting up states for our data, loading status and errors
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        // async function is created and called inside the useEffect's callback function
        async function fetchUser() {
            try {
                setLoading(true);
                // reaching out to a 'real world' api
                const res = await fetch('https://jsonplaceholder.typicode.com/users')
                if (!res.ok) {
                    throw new Error('Something went wrong while fetching data.');
                }
                const data = await res.json();
                // saving fresh data into our reach state.
                setUsers(data);
            } catch (err) {
                console.log(err.message);
                setError(err.message);
            } finally {
                setLoading(false);  // stop the loading spinner either way
            }
        }

        fetchUser(); 

    }, [])  // Empty array, which means only run this once the page is loaded

    if (loading) {
        return (
            <div className='loading'>
                <h2>Loading users ... Please Wait.</h2>
            </div>
        )
    }

    if (error) {
        return (
            <div className='error'>
                <h2>Error : {error}</h2>
            </div>
        )
    }

    return (
        <div className='dashboard'>
            <h2>User Directory</h2>
            <br />
            <ul>
                {
                    // mapping over the users array to display our fetched data on UI
                    users.map((user) => (
                        <li key={user.id}>
                            <strong>{user.name}</strong> - {user.email}
                        </li>
                    ))
                }
            </ul>


        </div>
    )
}

export default UserDashboard