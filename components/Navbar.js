import Link from 'next/link';

import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <input placeholder="Search..." />
      <Link href="/" as={process.env.BACKEND_URL + '/'}>
        <a>Home</a>
      </Link>
      <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
        <a>About</a>
      </Link>
      <Link href="/contact" as={process.env.BACKEND_URL + '/contact'}>
        <a>Contact</a>
      </Link>
    </nav>
  );
};

export default Navbar;
