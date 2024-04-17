import React, { useState, useEffect } from 'react';

const LocalStorageComponent = () => {
  const [localData, setLocalData] = useState('');

  // Read data from local storage when the component mounts
  useEffect(() => {
    const savedData = localStorage.getItem('myLocalData');
    if (savedData) {
      setLocalData(savedData);
    }
  }, []);

  // Update data in local storage when it changes
  useEffect(() => {
    localStorage.setItem('myLocalData', localData);
  }, [localData]);

  const handleChange = (e) => {
    setLocalData(e.target.value);
  };

  return (
    <div>
      <h1>Local Component</h1>
      <input
        type="text"
        value={localData}
        onChange={handleChange}
      />
      <p>Data in local storage: {localData}</p>
    </div>
  );
};

export default LocalStorageComponent;
