import React from 'react';
import './App.css';
import DataFetching from './DataFetching';
import directors from './directors';

function App() {
  return (
    <div className="App">
      {directors.map(director => <DataFetching id={director.directorId} img={director.img} />)}
    </div>
  );
}

export default App;
