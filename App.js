import React from 'react'
import { Routes, Route, useNavigate, createSearchParams } from 'react-router-dom'

import { NavBar } from './components/navbar/navbar'
import { Products } from './Pages/products/products'
import { Product } from './Pages/product/product'
import { Cart } from './Pages/cart/cart'
import { NotFound } from './Pages/not-found/not-found'
import { useCart } from './context/cart'
function App() {

  const navigate = useNavigate();
  const { cartItemCount } = useCart()

  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }

  return (
    <>
      <NavBar onSearch={onSearch} cartItemCount={cartItemCount()} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}


export default App;