import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../context/ApiContext';

const useUserProfile = (userId) => {

    const { baseURL } = useContext(ApiContext);

    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        if (!userId) return

        async function fetchUser() {

            setIsLoading(true);
            setError(null);

            try {

                const response = await fetch(`${baseURL}/users/${userId}`);

                if (!response.ok) {
                    throw new Error(`user with "id: ${userId}" is not found`)
                }

                const data = await response.json();

                setUserData(data);

            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchUser()

    }, [baseURL, userId])




    return {userData, isLoading, error};
}

export default useUserProfile