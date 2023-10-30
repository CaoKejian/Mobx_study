import React from 'react';
import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const Login = lazy(() => import('../views/Login'))
const Home = lazy(() => import('../views/Home'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/login'/>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />
  }
]

export default routes;