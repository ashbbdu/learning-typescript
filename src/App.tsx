// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Counter from "./components/Counter";
import Home from "./components/Home";
import Todo from "./components/Todo";
// import { Person } from "./interfaces";



function App() {
  // const [data, setData] = useState<Person>({
  //   firstName: "Ashish",
  //   lastName: "Srivastava",
  // });

  return (
    <>
      {/* <h1>
        My name is {data.firstName} {data.lastName}
      </h1>
      <div
        onClick={() =>
          setData({ firstName: "First Name" , lastName : "Last Name" })
        }
      >
        Change name
      </div>
      <Counter /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/body" element={<Body />} />
      </Routes>
    </>
  );
}

export default App;
