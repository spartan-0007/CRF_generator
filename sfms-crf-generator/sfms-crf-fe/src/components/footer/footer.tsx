import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-1 w-full">
      <div className="container mx-auto text-center text-xs">
        <p>&copy; {new Date().getFullYear()} Iftas. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;