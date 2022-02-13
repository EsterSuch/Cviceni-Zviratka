import React from 'react';
import '../AnimalDetail/style.css';


const AnimalDetail = ({ animal, idZvire }) => {
  const nalezeneZvire = animal.find((zvire) => zvire.id === idZvire);

  if (!nalezeneZvire) {
    return;
  }

  console.log(animal, idZvire, nalezeneZvire);

  return (
    <div className="detail">
      <div className="detail__obsah">
        <div className="detail__hlavicka">
          <img
            className="detail__foto"
            src={nalezeneZvire.foto}
            alt={nalezeneZvire.foto}
          />
          <div className="detail__titulek">
            <h2 className="detail__nazev">
              <span>{nalezeneZvire.nazev}</span>
            </h2>
            <div className="detail__latinsky">
              <span>{nalezeneZvire.nazevLatinsky}</span>
            </div>
          </div>

          <div className="detail__info">
            <p className="detail__popis">{nalezeneZvire.popis}</p>

            <div className="detail__udaje">
              <div className="detail__udaj">
                <h3>Domovina</h3>
                <p>{nalezeneZvire.domovina}</p>
              </div>
              <div className="detail__udaj">
                <h3>Biotop</h3>
                <p>{nalezeneZvire.biotop}</p>
              </div>
              <div className="detail__udaj">
                <h3>Potrava</h3>
                <p>{nalezeneZvire.potrava}</p>
              </div>
              <div className="detail__udaj">
                <h3>Velikost</h3>
                <p>{nalezeneZvire.velikost}</p>
              </div>
              <div className="detail__udaj">
                <h3>Zoo</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetail;