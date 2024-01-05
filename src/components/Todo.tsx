import axios from "axios";
import { useState } from "react";
import { Todos } from "../interfaces";
import { useEffect } from "react";

const Todo = () => {
  const [todos, setTodos] = useState<Todos[]>([]);

  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:3000/todo");
    setTodos(response.data.todos);
  };

  const markAsComplete = async (id: number) => {
    console.log(id, "id");
    const response = await axios.put("http://localhost:3000/completed", {
      id : id,
    })
    console.log(response);
    if(response.status === 200) {
      fetchTodos()
      alert("Marked as completed")

    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div>
      asd
      {todos?.map((res) => {
        const { completed, title, description } = res;
        return (
          <div key={res._id}>
            <h4>{title}</h4>
            <h4>{description}</h4>
            <button onClick={completed ? null : () => markAsComplete(res._id)}>
              {completed ? "Done" : "Mark as done"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
