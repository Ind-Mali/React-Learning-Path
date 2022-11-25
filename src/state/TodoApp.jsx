import { useState } from "react";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "Temizlik",
      description: "Odayı Toplamalısın",
    },
  ]);

  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    description: "",
  });

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

  const addTodo = () => {
    const { title, description } = todo;
    const newTodo = {
      id: uuidv4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id) => {
    if (id) {
      const filteredData = todoList.filter((q) => q.id !== id);
      setTodoList([...filteredData]);
    }
  };

  const deleteAll = () => {
    setTodoList([]);
  };

  const completedAllTodo = () => {
    const _todoList = todoList.map((todo) => {
    todo.isCompleted = true;
    return todo
    });
    setTodoList([..._todoList]);
  }

  const complateTodo = (id) => {
    let todo = todoList.find((q) => q.id === id);
    todo.isCompleted = !todo.isCompleted;
    setTodoList([...todoList]);
  };

  return (
    <>
      <div>
        <label htmlFor="">Title:</label>
        <input
          type="text"
          onChange={(e) =>
            setTodo((prev) => {
              return { ...prev, title: e.target.value };
            })
          }
        />
      </div>
      <div>
        <label htmlFor="">Description:</label>
        <input
          type="text"
          onChange={(e) =>
            setTodo((prev) => {
              return { ...prev, description: e.target.value };
            })
          }
        />
      </div>
      <div>
        <button onClick={addTodo}>Add Todo</button>
        <button onClick={completedAllTodo}>Complete All</button>
        <button onClick={deleteAll}>Delete All</button>
      </div>

      <ul>
        {todoList &&
          todoList.map((todo, key) => (
            <li
              key={key}
              style={{
                textDecoration: todo.isCompleted ? "line-through" : null,
                color: todo.isCompleted ? "green" : "red",
              }}
            >
              {todo.title} / {todo.description}
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button onClick={() => complateTodo(todo.id)}>Complete</button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default TodoApp;
