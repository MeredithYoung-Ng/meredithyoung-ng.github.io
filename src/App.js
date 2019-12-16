import React from 'react';
import './App.css';
import Body from './Body'

const current_page = [
  { name: "about", index: 0 },
  { name: "portfolio", index: 1}
];

function App() {
  return (
    <div className="App">
      <Body page={current_page}/>
    </div>
  );
}

export default App;
