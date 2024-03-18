import React from 'react';
import './index.css';
import { Calculator } from './components/Calculator/calculator';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
};

