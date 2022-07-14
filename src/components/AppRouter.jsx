import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../context/context";
import { privateRoutes, publicRoutes } from "../router/route";

const AppRouter = () => {
  const {isAuth} = useContext(AuthContext) 
  return ( 
        isAuth 
          ? <Routes>
          {privateRoutes.map((route, index) => 
            <Route
              key={index} 
              path={route.path} 
              element={<route.element/>} 
              exact={route.exact}>
            </Route>)}
            <Route path='/*' element={<Navigate replace to='/posts' />}/>
        </Routes>
        : <Routes>
          {publicRoutes.map((route, index) => 
            <Route
              key={index} 
              path={route.path} 
              element={<route.element/>} 
              exact={route.exact}>
            </Route>)}
            <Route path='/*' element={<Navigate replace to='/login' />}/>
        </Routes>
        
    )
}

export default AppRouter