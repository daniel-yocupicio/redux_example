import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import NewProduct from './pages/NewProduct';
import EditProduct from './pages/EditProduct';

// redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />

        <div className="container mt-5">
          <Routes>
            <Route exact path="/" element={<Products />} />
            <Route exact path="/productos/nuevo" element={<NewProduct />} />
            <Route exact path="/productos/editar/:id" element={<EditProduct />} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
