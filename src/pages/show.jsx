import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getApi } from '../misc/APIconfig';

// To fetch data from api and display when readmore btn is clicked
const Show = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  useEffect(() => {
    getApi(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(result => {
        setShow(result)
        console.log("useEffect rendered");
      });
  }, [id]);
  console.log('show', show)
  return (
    <div>

    </div>
  )
}

export default Show