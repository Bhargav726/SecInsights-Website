// src/components/DocumentViewer.jsx
import React from 'react';

const DocumentViewer = ({ selectedPDFs }) => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#fff', height: '100vh', boxSizing: 'border-box' }}>
      <h2>Selected Documents</h2>
      {selectedPDFs.length > 0 ? (
        selectedPDFs.map((pdf, index) => (
          <embed
            key={index}
            src={pdf.document}
            type="application/pdf"
            width="100%"
            height="90%"
            style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '5px' }}
          />
        ))
      ) : (
        <p>No documents selected.</p>
      )}
    </div>
  );
};

export default DocumentViewer;
