import React from 'react'
import { useRecoilValue } from 'recoil'
import { TodoListStore } from './store'
export default function ShowPanel() {
  const todoListData = useRecoilValue(TodoListStore.todoList)
  const completedListLength = useRecoilValue(TodoListStore.completeCountSelector)
  console.log('completedListLength', completedListLength)

  return (
    <div>
      <h3>ShowPanel Page</h3>
      recoil中获取结果展示：
      {todoListData.map((item, index) => {
        return <div key={index}>{item.thing}</div>
      })}
      <div>未完成的任务个数：{completedListLength}</div>
    </div>
  )
}
