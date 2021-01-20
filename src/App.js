import React, { useState } from "react";
import Newtodo from "./Newtodo";
import ToDoList from "./todolist";

const App = () => {
  const [newtodo, setnewtodo] = useState("");
  const [todolist, settodolist] = useState(
    (localStorage.getItem("todolist") &&
      JSON.parse(localStorage.getItem("todolist"))) ||
      []
  );
  const newTodo = (newtodo) => {
    setnewtodo(newtodo);
  };
  const addnewtodo = () => {
    settodolist([...todolist, { todo: newtodo, isComplete: false }]);
    setnewtodo("");
    localStorage.setItem(
      "todolist",
      JSON.stringify([...todolist, { todo: newtodo, isComplete: false }])
    );
  };
  const removetodo = (index) => {
    settodolist(todolist.filter((el, i) => index !== i));
    localStorage.setItem(
      "todolist",
      JSON.stringify(todolist.filter((el, i) => index !== i))
    );
  };
  const complete = (index) => {
    settodolist(
      todolist.map((el, i) =>
        index === i ? { ...el, isComplete: !el.isComplete } : el
      )
    );
    localStorage.setItem(
      "todolist",
      JSON.stringify(
        todolist.map((el, i) =>
          index === i ? { ...el, isComplete: !el.isComplete } : el
        )
      )
    );
  };
  return (
    <>
      <Newtodo newtodo={newTodo} addnewtodo={addnewtodo} todo={newtodo} />
      <ToDoList
        todolist={todolist}
        removetodo={removetodo}
        complete={complete}
      />
    </>
  );
};

export default App;
