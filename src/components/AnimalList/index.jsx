import React from 'react';
import '../AnimalList/style.css';
import Animal from './../Animal';

const AnimalList = ({ animals, prenesId }) => {
  const ulozeneId = (id) => {
    prenesId(id);
  };

  return (
    <>
      <div className="zvirata">

        {animals.map(animal =>
          <Animal
            key={animal.id}
            id={animal.id}
            name={animal.nazev}
            image={animal.foto}
            latin={animal.nazevLatinsky}
            ulozId={ulozeneId}
          />
        )}

      </div >
    </>
  );
};

export default AnimalList;