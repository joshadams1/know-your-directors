import React from 'react';
import logo from './logo.svg';
import './App.css';
import DataFetching from './DataFetching';

function App() {
  return (
    <div className="App">
      <DataFetching id={21684} />
      <img src="https://image.tmdb.org/t/p/w375_and_h375_face/tKLJBqbdH6HFj2QxLA5o8Zk7IVs.jpg"></img>
    </div>
    /* 
    Director IDs for requests

    David Fincher: 7467
    Luca Guadagnino: 78160
    Damien Chazelle: 136495
    Denis Villeneuve: 137427
    Bong Joon-Ho: 21684
    */
  );
}

export default App;
