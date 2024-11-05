import { atom } from 'recoil';

export type TodoItemType = {
  text: string;
  completed: boolean;
};

export const todoListState = atom<TodoItemType[]>({
  key: 'todoListState',
  default: [],
});