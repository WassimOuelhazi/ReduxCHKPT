import { deletetodo,edittodo,toggleTodo } from "../redux/todoslice";
import { useDispatch } from "react-redux";
import {AiOutlineEdit} from "react-icons/ai"
import {RiDeleteBin6Line} from "react-icons/ri"
import {MdDownloadDone} from "react-icons/md"
import {MdDoneAll} from "react-icons/md"
import {MdRemoveDone} from "react-icons/md"
import Button from 'react-bootstrap/Button';



const Todo = ({job}) => {
const  dispatch =useDispatch ();
  return (
    <div Style='display:flex ;background-color:aliceblue;margin: 5px 30px; width; justify-content:space-between;border-radius:20px;padding:5px'>
      <p Style="padding: 3px 10px;">{job.title}</p>
      <span> {job.isDone?<MdDoneAll/>:<MdRemoveDone/>}</span>
      <div Style='display:flex'>
      
      <Button Style='margin:0 3px'  variant="outline-primary" onClick={()=>dispatch (deletetodo(job.id))}><RiDeleteBin6Line/></Button>
      <Button Style='margin:0 3px' variant="outline-warning" onClick={()=>dispatch (edittodo(job.id))}><AiOutlineEdit/></Button>
      <Button Style='margin:0 3px' variant="outline-success" onClick={()=>dispatch (toggleTodo(job.id))}><MdDownloadDone/></Button>
      </div>
    </div>
  );
};

export default Todo;
