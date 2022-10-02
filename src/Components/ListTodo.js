import Todo from "./Todo";
import { useState } from "react";
import { useSelector } from "react-redux";

const ListTodo = () => {
  const todos = useSelector((state) => state.todo);
  const [statetodo, setStatetodo] = useState(false);
  const [filtermode, setFiltermode] = useState(false);

  const handleFilter = () => {
    setStatetodo(!statetodo);
  };
  const handleShow = () => {
    setFiltermode(!filtermode);
  };

  return (
    <div>
      <button onClick={handleShow}>
        {filtermode ? "Filter by " : "Show All"}
      </button>

      {filtermode && (
        <button onClick={handleFilter}>
          {statetodo ? "Not Done " : "Done"}
        </button>
      )}

      {filtermode ? (
        <div Style="margin:30px 0">
          {todos
            .filter((f) => f.isDone !== statetodo)
            .map((f) => (
              <Todo job={f} />
            ))}
        </div>
      ) : (
        <div Style="margin:30px 0">
          {" "}
          {todos.map((f) => (
            <Todo job={f} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListTodo;
