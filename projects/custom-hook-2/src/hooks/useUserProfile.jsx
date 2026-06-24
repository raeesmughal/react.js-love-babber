import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../context/ApiContext'



const useUserProfile = (userId) => {

    const { baseURL } = useContext(ApiContext);

    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        setIsLoading(true)

        if(!userData) return

        async function fetchUser() {
            
            setIsLoading(true);
            setError(null);
            

        }




    }, [userData, baseURL])

    return { userData, isLoading, error }
}

export default useUserProfile