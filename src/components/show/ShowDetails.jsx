import React from 'react'

const showDetails = ({status,premiered, network}) => {
  return (
    <div>
        <p>
        status: <span> {status} </span>
        </p>
        <p>
        <span>
            {premiered} {network ? `on ${network.name}` : null}
        </span>
        </p>
    </div>
  )
}

export default showDetails