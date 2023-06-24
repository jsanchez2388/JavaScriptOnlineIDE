// Import necessary dependencies
import React, { useState, useEffect, useRef } from 'react';
import CodeMirror from 'codemirror';
import Banner from './banner.jsx';
import 'codemirror/mode/javascript/javascript.js';

// Import the necessary CSS files for styling.
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import '../styles/bootstrap.css';
import '../styles/styles.css';

// Define the OnlineIDE component
function OnlineIDE() {
  // Define state variables for code and output
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  
  // Define refs to hold CodeMirror instance and editor DOM element
  const codeEditorRef = useRef(null);
  const codeMirrorInstanceRef = useRef(null);

  // Create CodeMirror instance on initial render
  useEffect(() => {
    const codeMirrorInstance = CodeMirror(codeEditorRef.current, {
      mode: 'javascript',
      theme: 'material',
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
    });
    
    // Update code state when changes are made in the editor
    codeMirrorInstance.on('change', (editor) => {
      setCode(editor.getValue());
    });
    
    // Store the CodeMirror instance in a ref
    codeMirrorInstanceRef.current = codeMirrorInstance;
  }, []); // Empty array means this effect runs once on mount

  // Function to run code when Run Code button is clicked
  const handleRunCode = () => {
    try {
      // Evaluate the code and set the output
      const result = eval(code);
      setOutput(result);
    } catch (error) {
      // Display error message if code execution fails
      setOutput(`Error: ${error.message}`);
    }
  };

  // Function to download the written code as a .js file
  const handleDownload = () => {
    const fileName = prompt('Enter file name') || 'source_code.js';
    const blob = new Blob([code], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
  };

  // Component rendering
  return (
    <div className="wrapper">
      <div>
        <Banner />
        <div className="online-ide">
          <div className="code-editor" ref={codeEditorRef} />
          <div className="button-container">
            <button className="btn btn-outline-primary" onClick={handleRunCode}>
              Run Code
            </button>
            <button className="btn btn-outline-secondary" onClick={handleDownload}>
              Download Source Code
            </button>
          </div>
          <div className="output">
            <h3>Output: </h3>
            <div className="output-display">{output}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export the OnlineIDE component
export default OnlineIDE;
