import React from 'react';
import logo from './logo.svg';
import './App.css';
import DataFetching from './DataFetching';
import directors from './directors';

function App() {
  return (
    <div className="App">
      {/* {images.map(image => <CharacterIcon key={image.id} name={image.name} description={image.alt} characterId={image.characterId} />)} */}
      {directors.map(director => <DataFetching id={director.directorId} image={director.img} />)}
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
