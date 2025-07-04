// src/components/KeyboardHelp.js
import React, { useState } from 'react';

const KeyboardHelp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHelp = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="keyboard-help">
      <button 
        className="help-toggle" 
        onClick={toggleHelp}
      >
        {isOpen ? 'Hide Keyboard Mapping' : 'Show Keyboard Mapping'}
      </button>
      
      {isOpen && (
        <div className="help-content">
          <h3>Tamil Alphabet Mapping</h3>

          <h4>Key Binding for Mode Toggle</h4>
          <p>
            Press <strong>Alt+3</strong> to toggle between English and Tamil (Tanglish) typing modes. 
            In Tamil mode, your input will be transliterated to Tamil script. In English mode, your input will remain as typed.
          </p>
          
          <h4>Basic Vowels</h4>
          <div className="mapping-grid">
            <div>a → அ</div>
            <div>A/aa → ஆ</div>
            <div>i → இ</div>
            <div>I/ii → ஈ</div>
            <div>u → உ</div>
            <div>U/uu → ஊ</div>
            <div>e → எ</div>
            <div>E/ee → ஏ</div>
            <div>ai → ஐ</div>
            <div>o → ஒ</div>
            <div>O/oo → ஓ</div>
            <div>au → ஔ</div>
            <div>q → ஃ</div>
          </div>
          
          <h4>Consonants</h4>
          <div className="mapping-grid">
            <div>ka/ga → க</div>
            <div>nGa → ங</div>
            <div>sa/cha/ca → ச</div>
            <div>Gna → ஞ</div>
            <div>ta/da → ட</div>
            <div>Na → ண</div>
            <div>tha/dha → த</div>
            <div>nha/snha/wa → ந</div>
            <div>pa/ba → ப</div>
            <div>ma → ம</div>
            <div>ya → ய</div>
            <div>ra → ர</div>
            <div>la → ல</div>
            <div>va → வ</div>
            <div>Ra → ற</div>
            <div>La → ள</div>
            <div>za/zha → ழ</div>
            <div>na → ன</div>
          </div>
          
          <h4>Sanskrit Characters</h4>
          <div className="mapping-grid">
            <div>Sa → ஸ</div>
            <div>sha → ஷ</div>
            <div>ja → ஜ</div>
            <div>Ha → ஹ</div>
            <div>ksh → க்ஷ்</div>
            <div>ksha →க்ஷ</div>
            <div>sri → ஸ்ரீ</div>
          </div>
          
          <p className="help-note">
            Note: Add vowel sounds after consonants. For example, "ki" gives "கி", "kee" gives "கே"
          </p>
        </div>
      )}
    </div>
  );
};

export default KeyboardHelp;