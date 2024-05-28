import { useState } from 'react'
import './App.css'
import {ToDoContent} from './ToDoContext'
import ToDoForm from './component/ToDoForm'
import ToDoItem from './component/ToDoItem'

function App() {
  const [todos, setTodos] = useState({})

  const addToDo = (todo) =>{
  }

  const updateToDo = () =>{

  }

  const deleteToDo = () =>{
    
  }

  const markToDo = () =>{
    
  }

  return (
    <ToDoContent.Provider value={{todos,addToDo,updateToDo,deleteToDo,markToDo}}>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <ToDoForm />
      <div className="mt-6 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 text-left">
                <tbody className="divide-y divide-gray-200 bg-white">
                {todos.map((todo) => (
                  <ToDoItem todo={todo} />
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    </ToDoContent.Provider>
  )
}

export default App
