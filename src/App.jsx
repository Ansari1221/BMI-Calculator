import {React,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, addTask } from "./Action";
import './App.css'

const App = () =>{
  const [value, setValue] =useState('');
  let inputHasChanged = (event) =>{
    setValue(event.target.value);
  }

  let taskList = useSelector((state=> state.taskReducer));
  console.log(taskList);
  let dispatch = useDispatch();

  let dispatchAtction =() =>{
    if(!value==''){
      dispatch(addTask({id:Math.trunc((Math.random()*1000)+1), taskTitle:value})); 
    }else{
      alert('Please enter your task');
    }
    setValue('');
  }
    return(
      <>
        <div className="container">
          <div className="input_container">
            <input placeholder="Enter your task here..." type="text" name="" id=""  onChange={inputHasChanged} value={value}/>
            <button onClick={dispatchAtction}>Add</button>
          </div>
          <div className="task_container">
           {
             taskList.map(
               (element) =>{
                 return(
                  
                    <div className="task_wrapper" key={element.id}>
                       <p>{element.taskTitle}</p>
                       <button onClick={() =>{dispatch(deleteTask(element.id))}}>Delete</button>
                     </div>
                
                 );
               }
             )
           }
         
          </div>
        </div>
      </>

    );
}

export default App;