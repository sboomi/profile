import React from 'react';
import links from '../../_nav/links.json';
import { linkIdIcon } from '../../lib/constants';

const Footer = () => {
  const yearNow = new Date().getFullYear();
  return (
    <div>
      <div>
        {links.navLinks.map((currentLink, index) => {
          return (
            <p key={index}>
              {linkIdIcon[currentLink.id] ? linkIdIcon[currentLink.id] : null}
              <a href={currentLink.url}>{currentLink.userName}</a>
            </p>
          );
        })}
      </div>
      <p>Hosted with GitHub - {yearNow}</p>
    </div>
  );
};

export default Footer;
