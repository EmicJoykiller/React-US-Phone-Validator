import React, { useState } from 'react';
import './App.css';

const PhoneNumberValidator = () => {
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState('');

  const checkValidNumber = (input) => {
    if (input === '') {
      alert('Please provide a phone number');
      return;
    }
    const countryCode = '^(1\\s?)?';
    const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
    const spacesDashes = '[\\s\\-]?';
    const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
    const phoneRegex = new RegExp(`${countryCode}${areaCode}${spacesDashes}${phoneNumber}`);

    if (phoneRegex.test(input)) {
      setResult(`Valid US number: ${input}`);
    } else {
      setResult(`Invalid US number: ${input}`);
    }
  };

  const handleClear = () => {
    setResult('');
    setUserInput('');
  };

  return (
    <div className="container">
      <h1>US Phone Number Validator</h1>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter US phone number"
      />
      <button onClick={() => checkValidNumber(userInput)} id="check-btn">Check</button>
      <button onClick={handleClear} id="clear-btn">Clear</button>
      <div id="results-div">
        <p className={result.includes('Valid') ? 'valid' : 'invalid'}>{result}</p>
      </div>
    </div>
  );
};

export default PhoneNumberValidator;
