import { useContext , createContext } from "react";

export const ToDoContent = createContext({
    todos: [
        {
            id: 1,
            todo: "This is task one",
            complete: false,
        },

    ],
    addToDo: (todos) => {},
    deleteToDo: (id) => {},
    updateToDo: (todos, id) => {},
    markToDo: (id) => {}

});

//export const ToDoContentProvider = ToDoContent.Provider

export const useToDo = () => {
    return useContext(ToDoContent)
}