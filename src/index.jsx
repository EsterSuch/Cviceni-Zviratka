import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import AnimalList from './components/AnimalList';
import AnimalDetail from './components/AnimalDetail';

const App = () => {

  const [animal, setAnimal] = useState([]);
  const [vybraneZvire, setVybraneZvire] = useState();

  useEffect(() => {
    fetch("https://lrolecek.github.io/zviratka-api/zvirata.json")
      .then(response => response.json())
      .then(animal => setAnimal(animal.zvirata));
  }, []);

  const vybraneZvireId = (vybraneZvire) => {
    setVybraneZvire(vybraneZvire);
  };

  return (
    <div className="App">
      <h1>Zvířátka v ZOO</h1>
      <AnimalList animals={animal} prenesId={vybraneZvireId} />
      <AnimalDetail animals={animal} idZvire={vybraneZvire} />
    </div>
  );
}


render(<App />, document.querySelector('#app'));
