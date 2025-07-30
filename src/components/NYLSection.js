import React from 'react';
import './NYLSection.scss';

const NYLSection = ({ 
  backgroundColor = 'white',
  children,
  fullWidth = false,
  className = '',
  sectionId
}) => {
  return (
    <section 
      className={`nyl-section ${className} ${backgroundColor !== 'white' ? `nyl-section--${backgroundColor}` : ''}`}
      data-aue-component={`nySection-${sectionId}`}
      data-aue-type="container"
    >
      <div className={`nyl-section__container ${fullWidth ? 'nyl-section__container--full' : ''}`}>
        {children}
      </div>
    </section>
  );
};

export default NYLSection;
