
import { Header}  from "../header/Header"
import {TaskList} from "../taskList/TaskList"
import "./appTaskList.css"
import useTaskList from "../../hooks/useTaskList"

function AppTaskList() {

  const [tasksState, create, deleteTask, clear] = useTaskList()

  return (
    <div className="screen">
      <div className="app-main">
        <Header create={create}></Header>
        <TaskList tasks={tasksState} deleteTask={deleteTask} clear={clear}></TaskList>
      </div>
    </div>
     
  )
  } 
  export default AppTaskList