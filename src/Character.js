import React from 'react';

function Character({ data }) {
  return (
    <div className="character">
      <p>{data?.name}</p>
      <img className="image" src={data?.image} />
    </div>
  );
}

export default Character;
