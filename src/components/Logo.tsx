
import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  linkTo?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', linkTo = '/' }) => {
  const classes = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-3xl'
  };

  const content = (
    <div className={`flex items-center font-poppins font-semibold ${classes[size]}`}>
      <Home className="mr-2 text-brand-pink" />
      <span className="text-brand-blue">Baby</span>
      <span className="text-brand-pink">Self</span>
      <span className="text-brand-blue">Homes</span>
    </div>
  );

  if (linkTo) {
    return <Link to={linkTo}>{content}</Link>;
  }

  return content;
};

export default Logo;
