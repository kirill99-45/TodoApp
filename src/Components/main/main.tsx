import { useState, useEffect, Dispatch, SetStateAction } from 'react';

import { ITodo } from '../interfaces';

import './main.css';

interface IProps {
  todos : ITodo[],
  setTodos : Dispatch<SetStateAction<ITodo[]>>,
  filter : string,
}

export const Main: React.FC<IProps> = ({ todos, setTodos, filter }) => {

  const [resTodos, setResTodos] = useState(todos)

  const inputHandler = (id: number) => {
    setTodos(todos.map(item => {
      if (item.id !== id) return item
      return {
        ...item,
        isDone : !item.isDone,
      }
    }))
  }

  const isTaskDone = (isDone: boolean, id: number) => {
    if (!isDone) {
      inputHandler(id)
    }
  }

  useEffect(() => {
    if (filter === 'Active') {
      setResTodos(todos.filter(todo => !todo.isDone))
    } else if (filter === 'Completed') {
      setResTodos(todos.filter(todo => todo.isDone))
    } else {
      setResTodos(todos)
    }
  }, [filter, todos])

  return (
    <main className='main'>
      <ul className='tasks'>
        {
          resTodos.map(todo => {
            return (
              <li className='tasks__task' key={todo.id}>
                <input
                  type='checkbox'
                  id={todo.id.toString()}
                  className='tasks__checkbox'
                  checked={todo.isDone}
                />
                <label
                  htmlFor={todo.id.toString()}
                  className='tasks__custom-checkbox'
                  onClick={() => isTaskDone(todo.isDone, todo.id)}
                >
                  {todo.task}
                </label>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}
