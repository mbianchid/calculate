import React from 'react';

interface ButtonProps {
  value: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ value, onClick }) => {
  return (
    <button data-testid={`button-${value}`} onClick={onClick}>
      {value}
    </button>
  );
};
