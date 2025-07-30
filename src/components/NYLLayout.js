import React from 'react';
import './NYLLayout.scss';
import nylLogo from '../images/nyl-logo-1.svg';
import { Link } from 'react-router-dom';

const NYLLayout = ({ children }) => {
  return (
    <div 
      className="nyl-layout"
      data-aue-component="nyLayout"
      data-aue-type="container"
    >
      <div className="nyl-layout__container">
        <div className="nyl-layout__header">
          <div className="nyl-layout__nav">
            <Link to="/" className="nyl-layout__logo">
              <img src={nylLogo} alt="New York Life Logo" />
            </Link>
          </div>
          <div 
            className="nyl-layout__header-content"
            data-aue-component="nyHeader"
            data-aue-type="container"
          >
            {/* Header content will be injected here */}
          </div>
        </div>
        <div className="nyl-layout__content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default NYLLayout;
