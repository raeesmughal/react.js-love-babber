import React from 'react';
import useUserProfile from '../hooks/useUserProfile'; // Import our custom hook

// 1. The component accepts 'userId' as a prop from its parent
function UserCard({ userId }) {
  // 2. USE CUSTOM HOOK: We pass the prop directly into our custom hook.
  // We then destructure the three state variables the hook returns.
  const { userData, isLoading, error } = useUserProfile(userId);

  // 3. CONDITIONAL RENDERING based on the state managed by the custom hook.

  // If the hook says it's loading, show a loading message.
  if (isLoading) {
    return <div style={{ padding: '20px', color: 'gray' }}>Loading user data...</div>;
  }

  // If the hook caught an error, display it in red.
  if (error) {
    return <div style={{ padding: '20px', color: 'red' }}>Error: {error}</div>;
  }

  // If there's no data for some reason, show a fallback.
  if (!userData) {
    return <div>No user data available.</div>;
  }

  // 4. SUCCESSFUL RENDER: If we pass the checks above, we have our data!
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '300px' }}>
      <h2>{userData.name}</h2>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Phone:</strong> {userData.phone}</p>
      <p><strong>Company:</strong> {userData.company.name}</p>
    </div>
  );
}

export default UserCard;