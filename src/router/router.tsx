import React from 'react';
import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const Login = lazy(() => import('../views/Login'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/login'/>
  },
  {
    path: '/login',
    element: <Login />
  },
]

export default routes;