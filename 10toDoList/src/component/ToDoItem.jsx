import React from 'react'

function ToDoItem(todo) {
    return (
        <>
        <tr>
                    <td className="whitespace-nowrap px-4 py-4">
                      <div className="text-sm font-medium text-gray-900">
                            {todo.todo}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                      <div className='flex space-x-4'>
                      <a href="#" className="text-gray-700">
                        Edit
                      </a>
                      <a href="#" className="text-gray-700">
                        Delete
                      </a>
                      </div>
                    </td>
                  </tr>
        </>
        
    )
}

export default ToDoItem
