import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";

function App() {
  const [url, setUrl] = useState('');
  const [show, setShow] = useState(false);
  const inputRef = useRef(null);

  const GenerateQr = () => {
    if (!url) {
      return;
    }
    setShow(true);
    inputRef.current.value = '';
  };

  const handleInputChange = (e) => {
    setUrl(e.target.value);
    setShow(false);
  };

  return (
    <div className="container">

{/* Heading for Qr Code */}
      <h1 className="text-center mt-2 mb-2">QR Code Generator</h1>
      
      {/* input for Url of Qr Code */}
      <div className="input-group mb-3">
        <input
          type="url"
          className="form-control"
          placeholder="Enter Your Url Here :- For e.g.- https://example.com/"
          ref={inputRef}
          onChange={handleInputChange}
        />
      </div>

{/* Button of Qr Code  */}
<div className="d-flex justify-content-center">
      <button
        className="btn btn-success mt-2 mb-2"
        type="button"
        onClick={GenerateQr}
      >
        Generate
      </button>
      </div>

{/* Qr Code Generated on this Section */}
      <div className="d-flex justify-content-center mt-2">
        {show && <QRCode value={url} size={180} />}
      </div>
    </div>
  );
}

export default App;
