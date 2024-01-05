import axios from "axios";
import { useState } from "react";
import { CreateTodo, Todos } from "../interfaces";
import { useEffect } from "react";

const Todo = () => {
  const [todos, setTodos] = useState<Todos[]>([]);
  const [formData , setFormData] = useState<CreateTodo>({
    title : "",
    description : ""
  })

  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:3000/todo");
    setTodos(response.data.todos);
  };

  const markAsComplete = async (id: number) => {
    console.log(id, "id");
    const response = await axios.put("http://localhost:3000/completed", {
      id: id,
    });
    console.log(response);
    if (response.status === 200) {
      fetchTodos();
      alert("Marked as completed");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const onChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name] : event.target.value
      }
    })
  }

  const submitHandler = async (event:React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    // console.log(formData , "formdata");
    const response = await axios.post("http://localhost:3000/todo" , {
      title : formData.title,
      description : formData.description
    });
  
    if(response.status === 200) {
      fetchTodos()
    }
  }

  return (
    <div>
      <h2>Create Todo</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label>Title</label> <br />
          <input name="title" type="text" required onChange={onChangeHandler} />
        </div>
        <div>
          <label>Description</label> <br />
          <input name="description" type="text" required onChange={onChangeHandler} />
        </div>
        <button>Create Todo</button>
      </form>
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
