import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoslice";
import "./AddTodo.css"


const AddTodo = () =>{
    const  dispatch =useDispatch()
const [title, settitle]=useState("");


return(
    <div className="Addtask">
    <input  Style='padding:0 20px' onChange={(event)=>settitle(event.target.value )} placeholder="Type a new task here ..." />
    <button className="addBut" onClick={() => dispatch(addTodo(title))} >+</button>

    </div>
)
}


export default AddTodo;