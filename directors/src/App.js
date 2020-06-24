import React, { useState, useEffect } from 'react';
import './App.scss';
import DirectorNavigator from './DirectorNavigator';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <DirectorNavigator />
    </div>
  );
}

export default App;
