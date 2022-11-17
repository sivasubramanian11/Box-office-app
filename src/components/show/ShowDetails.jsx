import React from 'react';
import { DetailsWrapper } from './ShowDetails.styled';

const showDetails = ({status,premiered, network}) => {
  return (
    <DetailsWrapper>
        <p>
        status: <span> {status} </span>
        </p>
        <p>
        <span>
            {premiered} {network ? `on ${network.name}` : null}
        </span>
        </p>
    </DetailsWrapper>
  )
}

export default showDetails