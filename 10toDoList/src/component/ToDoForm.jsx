import React from 'react'
import { useToDo } from '../ToDoContext'

function ToDoForm() {
    const [todo, setTodo] = useState("")
    const {addToDo} = useToDo()

    const addlist = (e) => {
      e.preventDefault()
      if(todo.length > 0)
      {
        addToDo(todo)
      }
    }
    return (
        <form onSubmit={addlist}>
          <div className="flex w-full max-w-md items-center space-x-2">
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="To do"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            className="w-auto rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Add</button>
        </div> 
        </form>    
    )
}

export default ToDoForm
