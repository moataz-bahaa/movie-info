import React from 'react';

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: '#343a40',
        lineHeight: '20px'
      }}
      className='text-light text-center pt-4 pb-3'
    >
      <p>
        Developed By: <span className="text-warning">Moataz Bahaa </span>, Using  React JS & Redux JS integrated with external movies data APIOMDB
      </p>
    </div>
  );
};

export default Footer;