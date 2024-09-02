import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage.tsx';
import CartPage from './pages/CartPage.tsx';
import { Page } from './consts/enum.ts';
import Header from './components/Header.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={Page.Main} element={<MainPage />} />
        <Route path={Page.Cart} element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
