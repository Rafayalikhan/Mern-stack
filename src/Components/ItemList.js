// ItemList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setItems } from '../Store/actions';
import Item from './Item';

const ItemList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => dispatch(setItems(data)))
      .catch((error) => console.error('Error fetching data:', error));
  }, [dispatch]);

  return (
    <div>
      <h1>List of Items</h1>
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
