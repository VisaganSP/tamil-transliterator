// src/components/TamilTransliterator.js
import React, { useState, useEffect, useRef } from 'react';
import { transliterateToTamil } from '../utils/transliterationUtils';
import '../styles/TamilTransliterator.css';

const TamilTransliterator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showRoman, setShowRoman] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    // Translate the input to Tamil when input changes
    if (!showRoman) {
      setOutput(transliterateToTamil(input));
    } else {
      setOutput(input);
    }
  }, [input, showRoman]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleToggleView = () => {
    setShowRoman(!showRoman);
  };

  const handleKeyUp = (e) => {
    // Special handling for function key (F12) if needed
    if (e.keyCode === 123) {
      e.preventDefault();
      // Insert a special marker or handle special cases
      const cursorPos = e.target.selectionStart;
      const updatedInput = 
        input.substring(0, cursorPos) + 
        "\u001F" + 
        input.substring(e.target.selectionEnd);
      
      setInput(updatedInput);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output)
      .then(() => {
        alert('Text copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  return (
    <div className="tamil-transliterator">
      <div className="input-container">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
          placeholder="Type in Tanglish (Tamil words in English)"
          className="textarea-input"
        />
      </div>
      
      <div className="controls">
        <label className="toggle-container">
          <input 
            type="checkbox" 
            checked={showRoman} 
            onChange={handleToggleView}
          />
          <span className="toggle-text">View in Roman (Tanglish)</span>
        </label>
        
        <div className="action-buttons">
          <button onClick={handleCopy} className="btn btn-copy">Copy</button>
          <button onClick={handleClear} className="btn btn-clear">Clear</button>
        </div>
      </div>
      
      <div className="output-container">
        <div className="tamil-output">
          {output || 'தமிழில் எழுது!!'}
        </div>
      </div>
    </div>
  );
};

export default TamilTransliterator;