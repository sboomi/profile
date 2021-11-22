import React from 'react';

const Footer = () => {
  const yearNow = new Date().getFullYear();
  return (
    <div>
      <p>Hosted with GitHub - {yearNow}</p>
    </div>
  );
};

export default Footer;
