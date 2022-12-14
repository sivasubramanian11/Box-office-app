
import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import ShowMainData from '../components/show/ShowMainData';
import ShowDetails from '../components/show/ShowDetails';
import ShowCast from '../components/show/ShowCast';
import { getApi } from '../misc/APIconfig';
import ShowSeasons from '../components/show/ShowSeasons';
import { ShowPageWrapper, InfoBlock } from './show.styled';


const reducer=(prevState, action)=>{
  switch(action.type){
    case 'FETCH_SUCCESS':{
    return{isLoading:false, error:null, show:action.show }
    }
    case 'FETCH_FAILED':{
      return {isLoading:false, error:action.error}
    }
    default: return prevState
  } 
}

const initialState ={
  show:null,
  isLoading:true,
  error:null
}


const Show = () => {
  const { id } = useParams();

  const [{show,isLoading, error}, dispatch]= useReducer(reducer, initialState);

  useEffect(() => {
    let isMounted = true;

    getApi(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        if (isMounted) {
          dispatch({type:'FETCH_SUCCESS', show:results})
        }
      })
      .catch(err => {
        if (isMounted) {
         dispatch({type:'Fetch_FAILED', error:err.message})
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  //  console.log('show', show);
  
  if(show){
  return (
  <ShowPageWrapper>
    
    <ShowMainData 
    image={show.image}
    name={show.name}
    rating={show.rating}
    summary={show.summary}
    tags={show.genres}
    />

    <h2>Details</h2>
    <InfoBlock>
      <ShowDetails 
      details={show.details} 
      network={show.network} 
      premiered={show.premiered}
      />
    </InfoBlock>

    <h2>Seasons</h2>
    <InfoBlock>
      <ShowSeasons 
      seasons={show._embedded.seasons} />
    </InfoBlock>

    <h2>Cast</h2>
    <InfoBlock>
      <ShowCast  
      cast={show._embedded.cast} />
    </InfoBlock>
  </ShowPageWrapper>
  );
  }
if (error) {
  return <div>Error occured: {error}</div>;
}
if(isLoading){
return <div>Data is being loaded</div>
}
};


export default Show;