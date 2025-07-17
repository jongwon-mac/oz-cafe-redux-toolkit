import React from 'react';

function OrderModal({ modalMenu, setModalOn, cart, addToCart }) {
  if (!modalMenu) return null;

  return (
    <div className="modal">
      <h3>{modalMenu.name}</h3>
      <p>가격: {modalMenu.price}원</p>
      <button onClick={() => {
        addToCart();
        setModalOn(false);
      }}>장바구니에 추가</button>
      <button onClick={() => setModalOn(false)}>닫기</button>
    </div>
  );
}

export default OrderModal;