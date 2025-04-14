import React from 'react';
import DocumentRenderer from './node';
import documentJson from './input.json'; // assuming your JSON is saved in a file

function App() {
  return (
    <div className="App">
      <DocumentRenderer data={documentJson} />
    </div>
  );
}

export default App;
