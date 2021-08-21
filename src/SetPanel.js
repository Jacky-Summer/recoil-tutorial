import React from 'react'
import { useSetRecoilState } from 'recoil'
import { TodoListStore } from './store'
export default function SetPanel() {
  const setTodoListData = useSetRecoilState(TodoListStore.todoList)

  const clearData = () => {
    setTodoListData([])
  }

  return (
    <div>
      <button onClick={clearData}>清空recoil的数组</button>
    </div>
  )
}
