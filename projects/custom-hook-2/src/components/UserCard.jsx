import React, { useState } from 'react'
import useUserProfile from '../hooks/useUserProfile'

const UserCard = ({ userId }) => {

  const { userData, isLoading, error } = useUserProfile(userId);

  

  return (
    <div>

    </div>
  )
}

export default UserCard