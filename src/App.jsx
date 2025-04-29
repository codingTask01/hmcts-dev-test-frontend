import { useState, useEffect } from 'react'

import './App.css'
import CreateTask from './components/CreateTask'

function App() {

  const [allTasks, setAllTasks] = useState([]);

  // const fetchAllTasks = async () => {
  //   const response = await fetch("http://localhost:4000/tasks");
  //   const data = await response.json();
  //   setAllTasks(data);
  // }   

  const postTask = async (newTask) => {
    const response = await fetch (`http://localhost:4000/tasks`, {
      method: "POST", 
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newTask)
    }); 
    const savedTask = await response.json();
    setAllTasks([...allTasks, savedTask]); 
  }

  // useEffect(() => {
  //   fetchAllTasks();
  // },[])


  return (
    <>
      <h1>Task management platform</h1>
      <CreateTask postTask={postTask}/>
    </>
  )
}

export default App
