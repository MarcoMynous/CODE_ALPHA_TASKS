import React, { useState } from "react";
import Todo from "./Components/Todo";

const App = () => {
  const [taskList, setTaskList] = useState("");
  return (
    <div className="min-h-screen pt-32 bg-purple-100">
      <Todo />
    </div>
  );
};

export default App;
