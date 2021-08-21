import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { TodoListStore } from './store'

export default function OperatePanel() {
  const [inputValue, setInputValue] = useState('')
  const [todoListData, setTodoListData] = useRecoilState(TodoListStore.todoList)

  const addItem = () => {
    const newList = [...todoListData, { thing: inputValue, isComplete: false }]
    setTodoListData(newList)
    setInputValue('')
  }

  return (
    <div>
      <h3>OperatePanel Page</h3>
      <input type='text' value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button onClick={addItem}>添加</button>
    </div>
  )
}
