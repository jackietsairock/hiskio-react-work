import React, { useState } from "react";

import TodoInput from "./TodoInput";
import "../assets/css/TodoList.css";

const hooksTodoList = () => {
  const [items, setTtems] = useState([]);
  const addItem = text => {
    setTtems([...items, { id: Date.now(), text }]);
  };
  const removeItem = id => {
    setTtems(items.filter(item => item.id !== id));
  };
  return (
    <div>
      <TodoInput addItem={addItem} />
      <ul>
        {items.map(item => (
          <li
            className="todolist_li"
            key={item.id}
            onClick={() => removeItem(item.id)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default hooksTodoList;
