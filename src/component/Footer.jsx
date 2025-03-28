import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black-300 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <p className="flex items-center">
            <span role="img" aria-label="United States flag" className="mr-2">🇺🇸</span>
            United States
          </p>
          <p className="text-sm">
            Copyright © 2025 Online support. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end">
          <a href="#" className="mx-2 text-sm hover:text-white">Privacy Policy</a>
          <a href="#" className="mx-2 text-sm hover:text-white">Terms of Use</a>
          <a href="#" className="mx-2 text-sm hover:text-white">Sales and Refunds</a>
          <a href="#" className="mx-2 text-sm hover:text-white">Site Map</a>
          <a href="#" className="mx-2 text-sm hover:text-white">Contact Online Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;