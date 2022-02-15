import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import AnimalList from './components/AnimalList';
import AnimalDetail from './components/AnimalDetail';

const App = () => {

  const [animalList, setAnimalList] = useState([]);
  const [vybraneZvire, setVybraneZvire] = useState();
  const [zooList, setZooList] = useState();


  useEffect(() => {
    fetch("https://lrolecek.github.io/zviratka-api/zvirata.json")
      .then((response) => response.json())
      .then((animalList) => {
        setAnimalList(animalList.zvirata);
        setVybraneZvire(11);
      });

  }, []);

  useEffect(() => {
    fetch("https://lrolecek.github.io/zviratka-api/zoo.json")
      .then((response) => response.json())
      .then((zooList) => setZooList(zooList.zoo));
  }, []);

  //console.log(vybraneZvire);

  const vybraneZvireId = (vybraneZvire) => {
    setVybraneZvire(vybraneZvire);
  };

  return (
    <div className="App">
      <h1>Zvířátka v ZOO</h1>
      <div className="container">
        <AnimalList animal={animalList} prenesId={vybraneZvireId} />


        {vybraneZvire ? (
          <AnimalDetail animal={animalList} idZvire={vybraneZvire} zooList={zooList} />
        ) : null}

      </div>
    </div>
  );

}

render(<App />, document.querySelector('#app'));

//<AnimalList animal={animalList} prenesId={vybraneZvireId} />
// {vybraneZvire ? (<AnimalDetail animal={animalList} idZvire={vybraneZvire} />) : null}
//{vybraneZvire && <AnimalDetail animal={animalList} idZvire={vybraneZvire} />}