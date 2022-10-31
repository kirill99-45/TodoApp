import { Dispatch, SetStateAction } from 'react';
import { ITodo } from '../interfaces';

import './footer.css';


interface IProps {
  filter : string,
  setFilter : Dispatch<SetStateAction<string>>,
  todos : ITodo[],
  setTodos : Dispatch<SetStateAction<ITodo[]>>,
}

export const Footer: React.FC<IProps> = ({ filter, setFilter, todos, setTodos }) => {

  const buttons = ['All', 'Active', 'Completed']

  return (
    <footer className='footer'>
      <div>
        <span>{todos.reduce((acc, item) => { return acc += item.isDone ? 0 : 1  }, 0)}</span>
        <span> items left</span>
      </div>
      <div className='footer__filters'>
        {
          buttons.map((button, index) => {
            return (
              <button
                key={index}
                className={filter === button ? 'footer__filter footer__filter_active' : 'footer__filter'}
                onClick={(event) => setFilter(event.currentTarget.innerText)}
              >
                {button}
              </button>
            )
          })
        }
      </div>
      <button
        type='button'
        className='footer__button'
        onClick={() => setTodos(todos.filter(todo => !todo.isDone))}
      >
        Clear completed
      </button>
    </footer>
  )
}
