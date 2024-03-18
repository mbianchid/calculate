import React from 'react';

interface DisplayProps {
  value: string;
}

export const Display: React.FC<DisplayProps> = ({ value }) => {
  return <input type="text" value={value} readOnly data-testid="display" />;
};
