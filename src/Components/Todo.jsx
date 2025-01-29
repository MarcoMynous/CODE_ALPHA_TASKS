import React, { useState } from "react";
import { PlusCircle, CheckCircle2, XCircle, ListTodo } from "lucide-react";

const Todo = () => {
  const [todoList, setTodoList] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddList = () => {
    const newTask = { id: Date.now(), text: todoList, completed: false };

    setTodos((todoT) => [...todoT, newTask]);
    setTodoList("");
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteList = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEnterKey = (e) => {
    if (e.key == "Enter") {
      handleAddList();
    }
  };

  const icons = {
    plus: <PlusCircle className="h-5 w-5 text-white" />,
    check: <CheckCircle2 size={20} color="green" className="cursor-pointer" />,
    close: <XCircle size={20} color="red" className="cursor-pointer" />,
    manage: <ListTodo className="h-8 w-8 text-indigo-600 cursor-pointer" />,
  };

  return (
    <div className="bg-white max-w-md flex flex-col p-7 min-h-[250px] rounded-xl place-self-center w-11/12 gap-5">
      <div className="flex place-self-center gap-3 items-center">
        {icons["manage"]}
        <h1 className="font-semibold text-2xl ">Todo List</h1>
      </div>
      <div className="flex gap-2">
        <input
          className="border outline-none px-5 py-2 flex-1 rounded-lg text-lg focus:border-blue-800 focus:border-2"
          type="text"
          value={todoList}
          onChange={(e) => {
            setTodoList(e.target.value);
          }}
          onKeyDown={handleEnterKey}
          placeholder="Add a new todo..."
        />
        <button
          onClick={handleAddList}
          className="py-2 px-3 bg-blue-800 rounded-lg hover:opacity-75"
        >
          {icons["plus"]}
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {todos.length === 0 ? (
          <p className="text-center text-gray-500 py-4">
            No todos yet. Add one above!
          </p>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="bg-gray-100 p-4 items-center flex flex-row rounded-lg justify-between"
            >
              <div
                className="flex flex-row items-center gap-4"
                onClick={() => handleToggleComplete(todo.id)}
              >
                {todo.completed ? (
                  icons["check"]
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-stone-400 hover:text-green-800" />
                )}
                <p
                  className={`${
                    todo.completed ? "line-through text-gray-500" : ""
                  } text-lg`}
                >
                  {todo.text}
                </p>
              </div>
              <XCircle
                onClick={() => handleDeleteList(todo.id)}
                className="w-5 h-5 text-stone-400 hover:text-red-800"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Todo;
