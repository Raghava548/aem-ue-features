import React from 'react';
import './NYLFooter.scss';

const NYLFooter = ({
  links,
  socialLinks,
  copyrightText,
  legalLinks
}) => {
  return (
    <footer 
      className="nyl-footer"
      data-aue-component="nyFooter"
      data-aue-type="container"
    >
      <div className="nyl-footer__container">
        <div className="nyl-footer__main">
          <div 
            className="nyl-footer__links"
            data-aue-type="container"
            data-aue-property="links"
          >
            {links?.map((linkGroup, index) => (
              <div key={index} className="nyl-footer__link-group">
                <h3 
                  className="nyl-footer__link-group-title"
                  data-aue-type="text"
                >
                  {linkGroup.title}
                </h3>
                <ul>
                  {linkGroup.items?.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.url}
                        data-aue-type="link"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div 
            className="nyl-footer__social"
            data-aue-type="container"
            data-aue-property="socialLinks"
          >
            {socialLinks?.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                className="nyl-footer__social-link"
                data-aue-type="link"
                aria-label={social.platform}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="nyl-footer__bottom">
          <p 
            className="nyl-footer__copyright"
            data-aue-type="text"
            data-aue-property="copyrightText"
          >
            {copyrightText}
          </p>
          <div 
            className="nyl-footer__legal"
            data-aue-type="container"
            data-aue-property="legalLinks"
          >
            {legalLinks?.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                data-aue-type="link"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NYLFooter;
