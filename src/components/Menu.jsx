import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cafeSlice';
import Item from './Item';
import OrderModal from './OrderModal';

function Menu() {
  const menu = useSelector(state => state.cafe.menu);
  const cart = useSelector(state => state.cafe.cart);
  const dispatch = useDispatch();

  const [modalOn, setModalOn] = useState(false);
  const [modalMenu, setModalMenu] = useState(null);

  if (!menu || menu.length === 0) {
    return <div style={{ textAlign: 'center', margin: '80px' }}>메뉴 정보가 없어요!</div>;
  }

  const categories = [...new Set(menu.map(item => item.category))];

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      {categories.map(category => (
        <section key={category}>
          <h2>{category}</h2>
          <ul className="menu">
            {menu.filter(item => item.category === category).map(item => (
              <Item
                key={item.id}
                item={item}
                clickHandler={() => {
                  setModalMenu(item);
                  setModalOn(true);
                }}
              />
            ))}
          </ul>
        </section>
      ))}

      {modalOn && (
        <OrderModal
          modalMenu={modalMenu}
          setModalOn={setModalOn}
          cart={cart}
          addToCart={() => handleAddToCart(modalMenu)}
        />
      )}
    </>
  );
}

export default Menu;
