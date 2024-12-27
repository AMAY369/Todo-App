/* eslint-disable react/prop-types */
import { useState } from "react"
import ToDoItem from "./ToDoItem"
function ToDoList({todos, addTodo, deleteTodo, editTask, toggleComplete}) {
  const [task, setTask] = useState('');
  function handleAdd(){
    if(task.trim()){
      addTodo(task);
      setTask('');
    }
  }
  return (
    <>
      <div className="mx-auto mt-6 max-w-md bg-white shadow-lg rounded-lg p-6">
        <div className="flex gap-2 mb-4">
          <input type="text"
          value={task}
          onChange={(e)=>setTask(e.target.value)}
          className="flex-grow border border-gray-300 rounded-lg p-2"
          placeholder="Enter Todo"
          />
          <button onClick={handleAdd} className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Add
          </button>
        </div>

        <ul className="space-y-2 max-h-60 overflow-y-auto border-t border-gray-200 pt-4 scroll-smooth">
          {todos.map((todo)=>(
            <ToDoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            editTask={editTask}
            />
          ))}
        </ul>

      </div>
    </>
  )
}

export default ToDoList