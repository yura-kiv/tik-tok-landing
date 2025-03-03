import React, { useState, useEffect } from 'react';
import { DesctopHeader, MobileHeader } from './components';

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <MobileHeader /> : <DesctopHeader />;
};

export default Header;
