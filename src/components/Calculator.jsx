// src/components/Calculator.jsx
import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (label) => {
    if (label === 'C') {
      setInput('');
      setResult('');
    } else if (label === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else {
      setInput(input + label);
    }
  };

  return (
    <div className="calculator">
      <Display value={input || '0'} />
      <Display value={result} />
      <div className="button-row">
        {['7', '8', '9', '/'].map((label) => (
          <Button key={label} label={label} onClick={handleClick} />
        ))}
      </div>
      <div className="button-row">
        {['4', '5', '6', '*'].map((label) => (
          <Button key={label} label={label} onClick={handleClick} />
        ))}
      </div>
      <div className="button-row">
        {['1', '2', '3', '-'].map((label) => (
          <Button key={label} label={label} onClick={handleClick} />
        ))}
      </div>
      <div className="button-row">
        {['0', '.', '=', '+'].map((label) => (
          <Button key={label} label={label} onClick={handleClick} />
        ))}
      </div>
      <div className="button-row">
        <Button label="C" onClick={handleClick} className="clear-button" />
      </div>
    </div>
  );
};

export default Calculator;