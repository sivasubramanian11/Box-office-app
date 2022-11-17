import React from 'react';
import IMAGE_NOT_FOUND from '../../Images/not-found.png'
import { CastList } from './ShowCast.styled';

const ShowCast = ({ cast }) => {
    return (
      <CastList>
        {cast.map(({ person, character, voice }, key) => (
          <div key={key} className="cast-item">
            <div>
              <img
                src={person.image ? person.image.medium : IMAGE_NOT_FOUND }
                alt="cast-person"
              />
            </div>
            <div className="actor">
              <span>
                <span className="bold">{person.name}</span> | {character.name} {voice ? '| Voice' : ''}
              </span>
            </div>
          </div>
        ))}
      </CastList>
    );
  };

export default ShowCast;