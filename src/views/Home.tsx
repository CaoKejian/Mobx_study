import { observer } from 'mobx-react'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import stores from '../stores'
interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = observer(() => {
  const todo = stores.TodoStore.todos
  return (
    <div>
      <p>Home</p>
      <div>todo: {todo}</div>
    </div>
  )
})

export default memo(Home)