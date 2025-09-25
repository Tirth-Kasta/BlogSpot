import React from 'react'
// import './assets/css/login.css'
import { Routes, Route, Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App