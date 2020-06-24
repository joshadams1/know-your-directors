import React, { useState, useEffect } from 'react';
import './App.css';
import DataFetching from './DataFetching';
import directors from './directors';
import DirectorNavigator from './DirectorNavigator';

function App() {
  return (
    <div className="App">
      <DirectorNavigator />
    </div>
  );
}

export default App;
