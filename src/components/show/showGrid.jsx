import React from 'react';
 import ShowCard from './showCard';
import IMAGE_NOT_FOUND from '../../Images/not-found.png';

const ShowGrid = ({data}) => {
  return (
    <div>
          {data.map( ({show}) => (
            <ShowCard key={show.id} 
            name={show.name}
            id={show.id}
            image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
            summary={show.summary}
            />
          ))}
    </div>
  );
};

export default ShowGrid