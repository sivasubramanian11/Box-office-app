import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {ShowSearchCard} from './ShowCard.styled';
import {Star} from '../styled'

const ShowCard = ({id,name,image,summary, OnStarClick, isStarred}) => {
  const summaryAsText = summary ?
  `${summary.split(' ').slice(0,10).join(' ').replace(/<.+?>/g, '')}...` 
  : 'No description';
  return (
    <ShowSearchCard>
        <div className='img-wrapper'>
          <img src= {image} alt="show"/>
        </div>

        <h1>{name}</h1>

        <p>{summaryAsText}</p>

        <div className='btns'>
          <Link to={`/shows/${id}`}>Read More</Link>
          <button type="button" onClick={OnStarClick}>
            <Star active={isStarred}/>
          </button>
        </div>
    </ShowSearchCard>
  );
};
export default ShowCard