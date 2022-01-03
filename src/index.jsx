import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import AnimalList from './components/AnimalList';
import AnimalDetail from './components/AnimalDetail';

const App = () => {

  const [animalList, setAnimalList] = useState([]);
  const [vybraneZvire, setVybraneZvire] = useState();

  useEffect(() => {
    fetch("https://lrolecek.github.io/zviratka-api/zvirata.json")
      .then((response) => response.json())
      .then((animalList) => setAnimalList(animalList.zvirata));
  }, []);

  const vybraneZvireId = (vybraneZvire) => {
    setVybraneZvire(vybraneZvire);
  };

  return (
    <div className="App">
      <h1>Zvířátka v ZOO</h1>
      <div className="container">
        <AnimalList animal={animalList} prenesId={vybraneZvireId} />

        {vybraneZvire ? (
          <AnimalDetail animal={animalList} idZvire={vybraneZvire} />
        ) : null}
      </div>
    </div>
  );

}


render(<App />, document.querySelector('#app'));


//i takto jde zapsat detail zvířete  {vybraneZvire && <AnimalDetail animals={animal} idZvire={vybraneZvire} />}