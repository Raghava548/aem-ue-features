import React from 'react';
import './NYLHero.scss';

const NYLHero = ({ 
  title, 
  description, 
  backgroundImage,
  ctaText,
  ctaUrl 
}) => {
  return (
    <div 
      className="nyl-hero"
      data-aue-component="nyHero"
      data-aue-type="container"
    >
      <div 
        className="nyl-hero__background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="nyl-hero__content">
        <h1 
          className="nyl-hero__title"
          data-aue-type="text"
          data-aue-property="title"
        >
          {title}
        </h1>
        <p 
          className="nyl-hero__description"
          data-aue-type="text"
          data-aue-property="description"
        >
          {description}
        </p>
        {ctaText && ctaUrl && (
          <a 
            href={ctaUrl}
            className="nyl-hero__cta"
            data-aue-type="link"
            data-aue-property="cta"
          >
            {ctaText}
          </a>
        )}
      </div>
    </div>
  );
};

export default NYLHero;
