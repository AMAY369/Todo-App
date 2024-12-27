/* eslint-disable react/prop-types */
import { useState } from "react"

function ToDoItem({todo,deleteTodo,toggleComplete,editTask}) {
  const[isEditing, setIsEditing] = useState(false);
  const[editedTodo, setEditedTodo] = useState(todo.text)

  function handleEdit(){
    if(isEditing&&editedTodo.trim()){
      editTask(todo.id,editedTodo);
    }
    setIsEditing(!isEditing);
  }
  return (
    <>
      <li className={`flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg ${
        todo.completed?"line-through text-gray-400": ''
        }`}
      >
        <div className="flex items-center gap-2">
          <input
          type="checkbox"
          checked={todo.completed}
          onChange={()=>toggleComplete(todo.id)}
          className="border border-gray-300 rounded-lg p-1"
          />

          {isEditing?(
            <input
            type="text"
            value={editedTodo}
            onChange={(e)=>setEditedTodo(e.target.value)}
            className="border border-gray-300 rounded-lg p-1"
            />
          ):(
            <span>{todo.text}</span>
          )
          }
        </div>

        <div className="flex gap-2">
          <button className="bg-blue-500 text-white px-2 py-1 rounded-lg hover:bg-blue-600" onClick={handleEdit}>
            {isEditing?"Save":"Edit"}
          </button>
          <button className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600" onClick={()=>deleteTodo(todo.id)}>
            Delete
          </button>
        </div>

      </li>
    </>
  )
}

export default ToDoItem