import React from 'react';

const Spinner = () => {
  return (
    <div>
      <img
        src='imgs/spinner.gif'
        style={{
          width: '250px',
          margin: 'auto',
          display: 'block',
        }}
        alt='Loading....'
      />
    </div>
  );
};

export default Spinner;
