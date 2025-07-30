import React from 'react';
import './NYLLayout.scss';

const NYLLayout = ({ children }) => {
  return (
    <div 
      className="nyl-layout"
      data-aue-component="nyLayout"
      data-aue-type="container"
    >
      <div className="nyl-layout__container">
        <div className="nyl-layout__header">
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
