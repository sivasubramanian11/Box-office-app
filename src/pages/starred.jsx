import React from 'react'
import MainPagelayout from '../components/MainPagelayout';
import { useShows } from '../misc/Custom-hooks';
import { getApi } from '../misc/APIconfig';
import { useState, useEffect } from 'react';
import ShowGrid from '../components/show/showGrid';


const Starred = () => {

const [Starred] = useShows();
const [isLoading, setIsLoading]=useState(true);
const [error, setError] = useState(null);
const [shows, setShows]= useState(null);

useEffect(()=>{
  if(Starred && Starred.length > 0){
    const Promises= Starred.map(showId=>getApi(`/shows/${showId}`));
    Promise.all(Promises)
    .then(apiData=>apiData.map(show=> ({show})))
    .then(results=>{
        setShows(results)
        setIsLoading(false)
      })
      .catch(err=>{
        setError(err.message)
      });
  }else{
    setIsLoading(false)
  }
},[Starred])

  return (
    <MainPagelayout>
      {isLoading && <div>Data is still loading</div>}
      {error && <div>error occured:{error}</div>}
      {!isLoading && !shows && <div>Shows were not added</div>}
      {!isLoading && !error && shows && <ShowGrid data={shows} />}
    </MainPagelayout>
  )
}

export default Starred