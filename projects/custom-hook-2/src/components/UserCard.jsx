import React from 'react'
import useUserProfile from '../hooks/useUserProfile'

const UserCard = ({ userId }) => {
    const { userData, isLoading, error } = useUserProfile(userId);

    if (isLoading) {
        return <div>Loading user data ... </div>
    }

    if (error) {
        return <div>Error : {error}</div>
    }

    if (!userData) {
        return <div>No user data available.</div>
    }


    return (
        <div>
            <h2>{userData.name}</h2>
            <p><strong>Email: </strong> {userData.email}</p>
            <p><strong>Phone: </strong> {userData.phone}</p>
            <p><strong>Company: </strong> {userData.company.name}</p>
        </div>
    )
}

export default UserCard;