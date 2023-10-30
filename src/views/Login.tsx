import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { observer } from 'mobx-react';
import todoStore from '../stores/TodoStore';
interface IProps {
  children?: ReactNode
}

const Login: FC<IProps> = observer(() => {
  // 你可以在这里使用 todoStore
  console.log(todoStore.todos);

  return (
    <div>Login</div>
  )
})

export default memo(Login)