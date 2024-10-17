import React from 'react';

const HolaMundo = ({ appName }) => {
  return (
    <h1 style={{ backgroundColor: 'red', color: 'white' }}>
      Hello from {appName}!!
    </h1>
  )
};

export default HolaMundo;
