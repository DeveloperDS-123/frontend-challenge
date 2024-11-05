import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/todoAtom";
import TodoItem from "../components/TodoItem";

const TodoList: React.FC = () => {
  const todoList = useRecoilValue(todoListState);
  const setTodoList = useSetRecoilState(todoListState);

  const deleteItem = (index: number) => {
    setTodoList((oldList) => oldList.filter((_, i) => i !== index));
  };

  const toggleCompletion = (index: number) => {
    setTodoList((oldList) => {
      const newList = [...oldList];
      newList[index] = {
        ...newList[index],
        completed: !newList[index].completed,
      };
      return newList;
    });
  };

  return (
    <div className="mt-6">
      {todoList.map((item, index) => (
        <TodoItem
          key={index}
          item={item}
          onDelete={() => deleteItem(index)}
          onToggleCompletion={() => toggleCompletion(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;
