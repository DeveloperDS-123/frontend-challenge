import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/todoAtom";

const InputField: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTodoList((oldList) => [
        ...oldList,
        { text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };

  return (
    <div
      id="#input"
      className="flex w-full h-16 px-6 my-6 text-lg leading-tight text-gray-700 align-middle bg-white rounded shadow appearance-none dark:bg-input-dark focus:outline-none focus:shadow-outline"
    >
      <form className="w-screen flex justify-between" onSubmit={addItem}>
        <input
          className="w-[150px] md:w-96 lg:w-96 lg:w-96 h-16 border-none input dark:bg-input-dark dark:text-gray-300 outline-none"
          id="username"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="What to do ?"
        />
        <button className="my-[11px] p-2 before:ease relative rounded-lg overflow-hidden borde bg-purple-600 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-1000 hover:shadow-green-500 hover:before:-translate-x-40 leading-[11px]">
      <span className="relative z-10 w-auto text-[12px] md:text-lg">Add Item</span>
    </button>
      </form>
    </div>
  );
};

export default InputField;
