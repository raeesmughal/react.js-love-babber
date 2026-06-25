import { useState, useEffect, useContext } from 'react';
import { ApiContext } from '../context/ApiContext';

// 1. Define the custom hook. It accepts a 'userId' as an argument.
function useUserProfile(userId) {
  // 2. CONSUME CONTEXT: Grab the global baseUrl from our ApiContext.
  const { baseUrl } = useContext(ApiContext);

  // 3. INITIALIZE STATE: We need three distinct states to handle network requests properly.
  const [userData, setUserData] = useState(null); // Holds the fetched data
  const [isLoading, setIsLoading] = useState(true); // Tracks if the request is running
  const [error, setError] = useState(null); // Holds any error messages if it fails

  // 4. TRIGGER EFFECT: This useEffect runs whenever the component mounts OR 
  // if the 'userId' or 'baseUrl' changes.
  useEffect(() => {
    // If no userId is provided, we shouldn't attempt to fetch.
    if (!userId) return;

    // A helper function to handle the async fetching logic
    const fetchUser = async () => {
      // Reset loading and error states before starting a new request
      setIsLoading(true);
      setError(null);

      try {
        // Construct the full URL using Context (baseUrl) and Props (userId)
        const response = await fetch(`${baseUrl}/users/${userId}`);
        
        // Check if the network response is bad (e.g., a 404 error)
        if (!response.ok) {
          throw new Error('User not found');
        }

        // Parse the JSON data
        const data = await response.json();
        
        // Update our state with the successful data
        setUserData(data);
      } catch (err) {
        // If anything fails in the try block, update our error state
        setError(err.message);
      } finally {
        // Regardless of success or failure, we are done loading
        setIsLoading(false);
      }
    };

    // Execute the fetch function
    fetchUser();

  }, [userId, baseUrl]); // Dependency array: Re-run this effect ONLY if these values change

  // 5. RETURN VALUES: We package our state variables into an object and return them 
  // so any component calling this hook can use them.
  return { userData, isLoading, error };
}

export default useUserProfile;