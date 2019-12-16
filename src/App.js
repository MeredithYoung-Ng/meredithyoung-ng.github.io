import React from 'react';
import './App.css';
import Body from './Body'

const current_page = [
  { name: "about", index: 0 },
  { name: "portfolio", index: 1},
  { name: "tiletunes", index: 2},
  { name: "discobot", index: 3},
  { name: "pvdcm", index: 4},
  { name: "wicshistory", index: 5}
];

function App() {
  return (
    <div className="App">
      <Body page={current_page}/>
    </div>
  );
}

export default App;
