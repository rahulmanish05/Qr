import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [qrText, setQrText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setQrText(text);
  };

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-section">
          <input
            type="text"
            placeholder="Enter text or URL"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Generate QR</button>
        </div>
      </form>
      <div className="qr-code">
        {qrText && <QRCodeSVG value={qrText} size={256} />}
      </div>
    </div>
  );
}

export default App;
