import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="bg-rose-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-rose-700">
      {children}
    </button>
  );
};

export default Button;
