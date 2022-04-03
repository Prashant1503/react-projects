import Header from './component/Header';
import './App.css';
import TaskList from './component/TaskList';
import AddTask from './component/AddTask';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Food Shopping",
      day: "April 2 12:20PM",
      remainder: false,
    },
    {
      id: 2,
      text: "Went to KareliBagh",
      day: "March 2 11:00PM",
      remainder: false,
    },
    {
      id: 3,
      text: "Dubai To America",
      day: "April 5 09:00AM",
    },
    {
      id: 4,
      text: "Food Shopping",
      day: "April 2 12:20PM",
      remainder: true,
    },
    {
      id: 5,
      text: "Venture Shopping",
      day: "April 10 12:20PM",
      remainder: false,
    },
  ]);

  /**@function : Delete Task */
  const deleteTask = (id) => {
    
    setTasks(tasks.filter((task) => task.id !== id))

  }

  /** @function : Toogle remainder */
  const togleRemainder = (id) => {
    console.log("Togle function called..")
    console.log(id);
  }

  /** @function : Add Task */
  const addTask = (newTask) => {
   
    const id = Math.floor(Math.random() * 10000) + 1;
    
    const taskObj = {id,...newTask};
    setTasks([...tasks,taskObj])
    
    
  }
  return (
    <div className="container">
      <AddTask onAdd={addTask} />
      <Header />
      {tasks.length > 0 ? (<TaskList tasks={tasks} onDelete={deleteTask} onToggle={togleRemainder} />) : "No Task found"}
    </div>
  );
}

export default App;
