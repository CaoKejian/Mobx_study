import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/router'
import React from 'react'
function App() {
  return (
    <div>
      {/* <svg className={s.svg}><use xlinkHref="#react"></use></svg> */}
      <Suspense fallback="">
        <div>{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App