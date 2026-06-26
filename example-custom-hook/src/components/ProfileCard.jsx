import React from 'react';
import useFetch from '../hooks/useFetch';

function ProfileCard() {
  // Leverages our custom hook to run side effects cleanly
  const { data: user, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  if (loading) return <div className="card loading">Syncing user profile...</div>;
  if (error) return <div className="card error">Error: {error}</div>;

  return (
    <div className="card profile-card">
      <h3>Active System Operator</h3>
      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>Email:</strong> {user?.email}</p>
      <p><strong>Node:</strong> {user?.company?.name}</p>
    </div>
  );
}

export default ProfileCard;