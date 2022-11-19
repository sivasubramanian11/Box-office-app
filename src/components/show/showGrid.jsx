import React from 'react';
 import ShowCard from './showCard';
import IMAGE_NOT_FOUND from '../../Images/not-found.png';
import { FlexGrid } from '../styled';
import { useShows } from '../../misc/Custom-hooks';

const ShowGrid = ({data}) => {

  const [starredShows,dispatchStarredShows] = useShows()
  
  return (
    <FlexGrid>
          {data.map( ({show}) => {

            const isStarred =starredShows.includes(show.id);

            const OnStarClick=()=>{
              if(isStarred){
                dispatchStarredShows({type:'REMOVE', showId:show.id})
              }
              else{
                dispatchStarredShows({type:'ADD', showId:show.id})
              }
            }

           return (
              <ShowCard key={show.id} 
              name={show.name}
              id={show.id}
              image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
              summary={show.summary}
              OnStarClick= {OnStarClick}
              isStarred={isStarred}
              />
           )
           })}
    </FlexGrid>
  );
};

export default ShowGrid
