import React from 'react';
import './NYLHeader.scss';

const NYLHeader = ({ content }) => {
  return (
    <div 
      className="nyl-header"
      data-aue-component="nyHeader"
      data-aue-type="text"
    >
      <div className="nyl-header__content">
        {content}
      </div>
    </div>
  );
};

export default NYLHeader;
