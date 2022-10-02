import "./App.css";
import AddTodo from "./Components/AddTodo";
import ListTodo from "./Components/ListTodo";
import {useState} from 'react';
function App() {

    //----------- Fake Data -----------
    const [job, setJob] = useState([
      { title: "t1", id: 1, isDone: true },
      { title: "t2", id: 2, isDone: false },
      { title: "t3", id: 3, isDone: false },
    ]);

    const add = (Addtodo) =>{
      setJob([...job,Addtodo])
    }
  
  return (
    <div className="App">
    <div className="todoCard">
      <h1 Style="margin-top:30px">TO-DO List</h1>
      <AddTodo add={add} />
      <ListTodo  jobs={job}  />
      </div>
    </div>
  );
}

export default App;
