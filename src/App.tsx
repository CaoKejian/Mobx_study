import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/router'
import React from 'react'
import { Provider } from 'mobx-react';
import stores from './stores';

function App() {
  return (
    <Provider {...stores}>
      <div>
        <Suspense fallback="">
          <div>{useRoutes(routes)}</div>
        </Suspense>
      </div>
    </Provider>
  )
}

export default App