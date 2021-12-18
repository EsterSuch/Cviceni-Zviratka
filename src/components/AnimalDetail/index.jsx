import React from 'react';
import '../AnimalDetail/style.css';

const AnimalDetail = ({ animals, id }) => {
  return (
    <div className="detail">
      <div className="detail__obsah">
        <div className="detail__hlavicka">
          <img className="detail__foto" src={animals.foto} alt={animals.foto} />
          <div className="detail__titulek">
            <h2 className="detail__nazev">
              <span>{animals.nazev}</span>
            </h2>
            <div className="detail__latinsky">
              <span>{animals.latin}</span>
            </div>
          </div>

          <div className="detail__info">
            <p className="detail__popis">{animals.popis}</p>

            <div className="detail__udaje">
              <div className="detail__udaj">
                <h3>Domovina</h3>
                <p>{animals.domovina}</p>
              </div>
              <div className="detail__udaj">
                <h3>Biotop</h3>
                <p>{animals.biotop}</p>
              </div>
              <div className="detail__udaj">
                <h3>Potrava</h3>
                <p>{animals.potrava}</p>
              </div>
              <div className="detail__udaj">
                <h3>Velikost</h3>
                <p>{animals.velikost}</p>
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