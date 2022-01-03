import React from 'react';
import '../AnimalList/style.css';
import Animal from './../Animal';

const AnimalList = ({ animal, prenesId }) => {
  const ulozeneId = (id) => {
    prenesId(id);
  };

  return (
    <>
      <div className="zvirata">
        {animal.map((animalInfo) => (
          <Animal
            key={animalInfo.id}
            id={animalInfo.id}
            name={animalInfo.nazev}
            image={animalInfo.foto}
            latin={animalInfo.nazevLatinsky}
            ulozId={ulozeneId}
          />
        ))}
      </div>
    </>
  );
};

export default AnimalList;