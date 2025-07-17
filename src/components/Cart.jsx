import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from '../redux/cafeSlice';

function Cart() {
  const cart = useSelector(state => state.cafe.cart);
  const dispatch = useDispatch();

  if (cart.length === 0) {
    return <div style={{ textAlign: 'center', margin: '80px' }}>장바구니가 비어있어요!</div>;
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>장바구니</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - {item.price}원 x {item.quantity}
            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>삭제</button>
          </li>
        ))}
      </ul>
      <div>총 합계: {totalPrice}원</div>
      <button onClick={() => dispatch(clearCart())}>전체 비우기</button>
    </div>
  );
}

export default Cart;