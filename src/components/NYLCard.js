import React from 'react';
import './NYLCard.scss';

const NYLCard = ({
  title,
  description,
  image,
  imageAlt = '',
  ctaText,
  ctaUrl,
  variant = 'default',
  cardId
}) => {
  return (
    <div 
      className={`nyl-card nyl-card--${variant}`}
      data-aue-component={`nyCard-${cardId}`}
      data-aue-type="container"
    >
      {image && (
        <div 
          className="nyl-card__image"
          data-aue-type="image"
          data-aue-property="image"
        >
          <img src={image} alt={imageAlt} />
        </div>
      )}
      <div className="nyl-card__content">
        {title && (
          <h3 
            className="nyl-card__title"
            data-aue-type="text"
            data-aue-property="title"
          >
            {title}
          </h3>
        )}
        {description && (
          <p 
            className="nyl-card__description"
            data-aue-type="text"
            data-aue-property="description"
          >
            {description}
          </p>
        )}
        {ctaText && ctaUrl && (
          <a 
            href={ctaUrl}
            className="nyl-card__cta"
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

export default NYLCard;
