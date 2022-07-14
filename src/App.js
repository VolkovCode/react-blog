import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/navbar/Navbar';
import { AuthContext } from './context/context';
import './styles/App.css';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
