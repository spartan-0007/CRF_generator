import React from 'react';
import Image from 'next/image';
import iftasLogo from '@/app/assets/images/iftas_logo.png';
import sfmsLogo from '@/app/assets/images/sfms.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-[#003399] py-2 px-3">
      <div className="flex-shrink-0">
        <Image src={iftasLogo} alt="IFTAS Logo" width={80} height={40} />
      </div>
      <h1 className="text-white text-xl md:text-2xl font-bold text-center">
        STRUCTURED FINANCIAL MESSAGING SYSTEM - Change Request Form
      </h1>
      <div className="flex-shrink-0">
        <Image src={sfmsLogo} alt="SFMS Logo" width={80} height={40} />
      </div>
    </header>
  );
};

export default Header;