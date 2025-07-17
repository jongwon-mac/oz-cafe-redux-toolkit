import React from 'react';

function Item({ item, clickHandler }) {
  return (
    <li onClick={clickHandler} style={{ cursor: 'pointer' }}>
      {item.name} - {item.price}원
    </li>
  );
}

export default Item;