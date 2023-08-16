// Item.js
import React from 'react';

const Item = ({ item }) => {
  return (
    <li>
      <img src={`https://robohash.org/${item.id}`} alt={item.name} />
      <div>
        <h2>{item.name}</h2>
        <p>{item.email}</p>
      </div>
    </li>
  );
};

export default Item;
