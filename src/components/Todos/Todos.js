import { useDispatch, useSelector } from "react-redux"
import { editTodo, removeTodo } from "../../features/todo/todoSlice";
import { FaPen, FaTrash } from "react-icons/fa";

function Todos() {

  const todos = useSelector((store) => {
    return store.todos;
  })

  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center p-3">
      <ol className="w-96">
        {
          todos.map((item, ind) => {
            return <li className="bg-gray-800 rounded border-gray-700 text-800 text-white p-2 my-1 flex justify-between items-center">
              <span className="w-1/2 text-lg">{item.text}</span>
              <button className="text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-lg" onClick={() => {
                dispatch(removeTodo(item.id))
              }}><FaTrash/></button>
              <button className="text-white bg-indigo-500 border-0 py-2 px-4   focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={() => {
                let text = prompt("Edit")
                dispatch(editTodo({
                  ind,
                  text
                }))
              }}><FaPen/></button>
            </li>
          })
        }
      </ol>
    </div>
  )
}

export default Todos
