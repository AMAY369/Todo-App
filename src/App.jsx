import Header from './components/Header'
// import './App.css'
import { useState } from 'react'
import ToDoList from './components/ToDoList';

function App() {

  const [todos, setTodods] = useState([]);

  function addTodo(task){
    setTodods([...todos, {id:Date.now(), text:task, completed:false}])
  }

  function deleteTodo(id){
    setTodods(todos.filter(todo=>todo.id!==id));
  }

  function toggleComplete(id){
    setTodods(
      todos.map(todo=>
        todo.id===id?{...todo, completed:!todo.completed}: todo
      )
    )
  }

  function editTask(id,newText){
    setTodods(
      todos.map(todo=>
        todo.id===id?{...todos, text:newText}:todo
      )
    )
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center">
        <Header/>
        <ToDoList
          todos={todos}
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          editTask={editTask}
          toggleComplete={toggleComplete}
        />
      </div>
    </>
  )
}

export default App
