import React from 'react';

const LoadingLayout = ({ message = "Loading..." }) => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <div className="spinner-border text-primary" role="status" style={{ width: "4rem", height: "4rem" }}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3 fs-5 text-secondary">{message}</p>
      </div>
    </div>
  );
};

export default LoadingLayout;
