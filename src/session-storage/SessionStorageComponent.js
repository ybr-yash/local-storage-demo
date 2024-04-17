import React, { useState, useEffect } from 'react';

const SessionStorageComponent = () => {
  const [sessionData, setSessionData] = useState('');

  // Read data from session storage when the component mounts
  useEffect(() => {
    const savedData = sessionStorage.getItem('mySessionData');
    if (savedData) {
      setSessionData(savedData);
    }
  }, []);

  // Update data in session storage when it changes
  useEffect(() => {
    sessionStorage.setItem('mySessionData', sessionData);
  }, [sessionData]);

  const handleChange = (e) => {
    setSessionData(e.target.value);
  };

  return (
    <div>
      <h1>Session Component</h1>
      <input
        type="text"
        value={sessionData}
        onChange={handleChange}
      />
      <p>Data in session storage: {sessionData}</p>
    </div>
  );
};

export default SessionStorageComponent;
