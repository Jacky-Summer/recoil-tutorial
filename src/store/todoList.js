import { atom, selector } from 'recoil'

export const todoList = atom({
  key: 'todoList',
  default: [],
})

export const completeCountSelector = selector({
  key: 'completeCountSelector',
  get({ get }) {
    const completedList = get(todoList)
    return completedList.filter(item => item.isComplete).length
  },
})
