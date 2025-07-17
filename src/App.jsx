import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </Provider>
  );
}

export default App;