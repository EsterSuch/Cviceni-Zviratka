import React from 'react';
import '../Animal/style.css';

const Animal = ({ id, name, latin, image, ulozId }) => {
  const vyberZvire = () => {
    ulozId(id);
  };

  return (
    <div className="zvire" onClick={vyberZvire}>
      <div className="zvire__foto">
        <img src={image} alt={name} />
      </div>
      <div className="zvire__popis">
        <div className="zvire__nazev">{name}</div>
        <div className="zvire__latinsky">{latin}</div>
      </div>
    </div>
  );
};

export default Animal;