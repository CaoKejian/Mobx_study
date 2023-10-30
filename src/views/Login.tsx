import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { observer } from 'mobx-react';
import todoStore from '../stores/TodoStore';
interface IProps {
  children?: ReactNode
}

const Login: FC<IProps> = observer(() => {
  // 你可以在这里使用 todoStore
  const [todo, setTodo] = useState(todoStore.todos)
  const changeTodo = () => {
    console.log('点击按钮')
    todoStore.handleChange()
    setTodo(todoStore.todos)
  }
  useEffect(() => {
    console.log('mobx todo:', todoStore.todos);
    console.log('local todo:', todo);
  }, [todo])
  
  return (<>
    <div>Login</div>
    <div>Todo: {todo}</div>
    <button
      onClick={changeTodo}
    >点击改变todos</button>
  </>
  )
})

export default memo(Login)