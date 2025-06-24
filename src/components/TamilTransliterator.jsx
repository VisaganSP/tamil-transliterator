import React, { useState, useRef } from 'react';
import { transliterateToTamil } from '../utils/transliterationUtils';
import '../styles/TamilTransliterator.css';

const TamilTransliterator = () => {
  const [segments, setSegments] = useState([]);
  const [isTamilMode, setIsTamilMode] = useState(false);
  const [showRoman, setShowRoman] = useState(false);
  const textareaRef = useRef(null);

  // Compute the raw input text for internal tracking and display
  const inputText = segments.map(segment => segment.text).join('');

  // Compute the display text for the main textarea
  const displayText = segments.length > 0
    ? segments.map(segment => {
        if (!segment.isTamil) {
          return segment.text;
        }
        return showRoman ? segment.text : transliterateToTamil(segment.text);
      }).join('')
    : '';

  // Compute the output text for the output textarea
  const outputText = segments.length > 0
    ? segments.map(segment => {
        if (!segment.isTamil) {
          return segment.text;
        }
        return showRoman ? segment.text : transliterateToTamil(segment.text);
      }).join('')
    : 'தமிழில் எழுது!!';

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    const prevValue = displayText;
    const cursorPos = e.target.selectionStart;

    if (newValue.length > prevValue.length) {
      // Text was added
      const newText = newValue.slice(prevValue.length);
      setSegments(prevSegments => {
        const lastSegment = prevSegments[prevSegments.length - 1];

        if (!lastSegment || lastSegment.isTamil !== isTamilMode) {
          return [...prevSegments, { text: newText, isTamil: isTamilMode }];
        }

        return [
          ...prevSegments.slice(0, -1),
          { text: lastSegment.text + newText, isTamil: isTamilMode }
        ];
      });
    } else if (newValue.length < prevValue.length) {
      // Text was deleted
      setSegments(prevSegments => {
        if (prevSegments.length === 0) return [];

        let newSegments = [];
        let currentLength = 0;
        const charsToDelete = prevValue.length - newValue.length;

        for (let i = 0; i < prevSegments.length; i++) {
          const segment = prevSegments[i];
          const segmentDisplayText = segment.isTamil && !showRoman
            ? transliterateToTamil(segment.text)
            : segment.text;
          const segmentLength = segmentDisplayText.length;

          if (currentLength + segmentLength < cursorPos) {
            // Segment is fully before the cursor
            newSegments.push(segment);
            currentLength += segmentLength;
          } else if (currentLength <= cursorPos) {
            // Segment contains the cursor
            const charsToKeep = Math.max(0, segmentLength - charsToDelete);
            let rawCharsToKeep = segment.text.length;

            if (charsToKeep > 0 && segment.isTamil && !showRoman) {
              // Estimate raw characters for Tamil segment
              for (let j = segment.text.length; j >= 0; j--) {
                const testDisplay = transliterateToTamil(segment.text.slice(0, j));
                if (testDisplay.length <= charsToKeep) {
                  rawCharsToKeep = j;
                  break;
                }
              }
            } else {
              rawCharsToKeep = charsToKeep;
            }

            if (rawCharsToKeep > 0) {
              newSegments.push({
                text: segment.text.slice(0, rawCharsToKeep),
                isTamil: segment.isTamil
              });
            }
            break;
          }
        }

        return newSegments.filter(segment => segment.text.length > 0);
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.altKey && e.keyCode === 51) {
      e.preventDefault();
      setIsTamilMode(prev => !prev);
    } else if (e.key === 'Backspace' && displayText.length > 0) {
      e.preventDefault(); // Prevent default to control deletion
      const cursorPos = textareaRef.current.selectionStart;

      setSegments(prevSegments => {
        if (prevSegments.length === 0) return [];

        let newSegments = [];
        let currentLength = 0;

        for (let i = 0; i < prevSegments.length; i++) {
          const segment = prevSegments[i];
          const segmentDisplayText = segment.isTamil && !showRoman
            ? transliterateToTamil(segment.text)
            : segment.text;
          const segmentLength = segmentDisplayText.length;

          if (currentLength + segmentLength < cursorPos) {
            // Segment is before the cursor
            newSegments.push(segment);
            currentLength += segmentLength;
          } else if (currentLength <= cursorPos) {
            // Segment contains the cursor
            let charsToKeep = cursorPos - currentLength;
            if (charsToKeep <= 0) {
              // Cursor is at the start of this segment, skip it
              break;
            }
            charsToKeep = Math.max(0, charsToKeep - 1); // Remove one display character
            let rawCharsToKeep = segment.text.length;

            if (segment.isTamil && !showRoman) {
              // Estimate raw characters for Tamil segment
              for (let j = segment.text.length; j >= 0; j--) {
                const testDisplay = transliterateToTamil(segment.text.slice(0, j));
                if (testDisplay.length <= charsToKeep) {
                  rawCharsToKeep = j;
                  break;
                }
              }
            } else {
              rawCharsToKeep = charsToKeep;
            }

            if (rawCharsToKeep > 0) {
              newSegments.push({
                text: segment.text.slice(0, rawCharsToKeep),
                isTamil: segment.isTamil
              });
            }
            break;
          }
        }

        return newSegments.filter(segment => segment.text.length > 0);
      });

      // Adjust cursor position after deletion
      if (textareaRef.current) {
        const newCursorPos = Math.max(0, cursorPos - 1);
        setTimeout(() => {
          textareaRef.current.selectionStart = newCursorPos;
          textareaRef.current.selectionEnd = newCursorPos;
        }, 0);
      }
    }
  };

  const handleToggleView = () => {
    setShowRoman(prev => !prev);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText)
      .then(() => {
        alert('Text copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  const handleClear = () => {
    setSegments([]);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  return (
    <div className="tamil-transliterator">
      <div className="input-container">
        <label>Compose Your Text (Type Here):</label>
        <textarea
          ref={textareaRef}
          value={displayText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={isTamilMode ? "Type in Tanglish (Tamil words in English)" : "Type in English"}
          className="textarea-input"
        />
      </div>

      <div className="input-container">
        <label>Original Typed Text:</label>
        <textarea
          value={inputText}
          readOnly
          placeholder="Originally Typed text appears here"
          className="textarea-input readonly"
        />
      </div>

      <div className="output-container">
        <label>Final Transliterated Text:</label>
        <textarea
          value={outputText}
          readOnly
          placeholder="Final Transliterated text appears here"
          className="textarea-input readonly"
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
          <button onClick={handleCopy} className="btn btn-copy">Copy Output</button>
          <button onClick={handleClear} className="btn btn-clear">Clear</button>
        </div>
      </div>
    </div>
  );
};

export default TamilTransliterator;


