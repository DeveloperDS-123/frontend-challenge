import React from "react";
import Cross from "../assets/icon-cross.svg";
import Circle from "../assets/circle.svg";
import Checked from "../assets/circle-cheked.svg";

type TodoItemProps = {
  item: { text: string; completed: boolean };
  onDelete: () => void;
  onToggleCompletion: () => void;
};

const TodoItem: React.FC<TodoItemProps> = ({
  item,
  onDelete,
  onToggleCompletion,
}) => {
  return (
    <div className="transition-all duration-300 hover:scale-50 flex items-center justify-between p-2 bg-white shadow-md rounded-lg mb-2 animate-add">
      <div className="p-4">
        <button className="w-6 h-6 my-auto mr-3 border border-gray-500 rounded-[50%]" onClick={onToggleCompletion}>
          <img src={item.completed ? Checked : Circle} alt="LogoCentang" />
        </button>
      </div>
      <div className="flex justify-between w-full">
        <p
          className={`my-auto text-lg text-gray-700 w-[85%] align-middle border-none cursor-pointer input hover:text-purple-600 ${item.completed ? "line-through-animation text-gray-400" : ""
            }`}
          style={{overflowWrap: "anywhere"}}
        >
          {item?.text}
        </p>
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-700 mr-5"
        >
          <img src={Cross} alt="LogoCross" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
