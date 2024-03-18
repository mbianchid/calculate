import React, { useState } from 'react';
import { Button } from '../Button/button';
import { Display } from '../Display/display';

export const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');

  const handleButtonClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="buttons">
        <Button value="7" onClick={() => handleButtonClick('7')} />
        <Button value="8" onClick={() => handleButtonClick('8')} />
        <Button value="9" onClick={() => handleButtonClick('9')} />
        <Button value="/" onClick={() => handleButtonClick('/')} />
        <Button value="4" onClick={() => handleButtonClick('4')} />
        <Button value="5" onClick={() => handleButtonClick('5')} />
        <Button value="6" onClick={() => handleButtonClick('6')} />
        <Button value="*" onClick={() => handleButtonClick('*')} />
        <Button value="1" onClick={() => handleButtonClick('1')} />
        <Button value="2" onClick={() => handleButtonClick('2')} />
        <Button value="3" onClick={() => handleButtonClick('3')} />
        <Button value="-" onClick={() => handleButtonClick('-')} />
        <Button value="0" onClick={() => handleButtonClick('0')} />
        <Button value="." onClick={() => handleButtonClick('.')} />
        <Button value="=" onClick={handleCalculate} />
        <Button value="+" onClick={() => handleButtonClick('+')} />
        <Button value="C" onClick={handleClear} />
      </div>
    </div>
  );
};
