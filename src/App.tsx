import React from 'react';
import './app.css';
import IconArrowDown from './icons/arrow-down.svg';
import { useState } from 'react';

export const App: React.FC = () => {

  const [todos, setTodos] = useState([
    {
      id : 0,
      task : 'Тестовое задание',
      isDone : false,
    },
    {
      id : 1,
      task : 'Прекрасный код',
      isDone : true,
    },
    {
      id : 2,
      task : 'Покрытие тестами',
      isDone : false,
    },
  ])

  return (
    <div className='wrapper'>
      <header className='header'>
        <img src={IconArrowDown} alt='arrow' />
        <input
          type='text'
          placeholder='What needs to be done?'
          className='header__input'
        />
        <button type='button' className='header__button'>Создать</button>
      </header>
      <main className='main'>
        <ul className='tasks'>
          {
            todos.map(todo => {
              return (
                <li className='tasks__task' key={todo.id}>
                  <input type='checkbox' id={todo.id} className='tasks__checkbox'/>
                  <label htmlFor={todo.id} className='tasks__custom-checkbox' checked={todo.isDone}>{todo.task}</label>
                </li>
              )
            })
          }
        </ul>
      </main>
      <footer className='footer'>
        <div>
          <span>2</span>
          <span> items left</span>
        </div>
        <div className='footer__filters'>
          <button className='footer__filter footer__filter_active'>All</button>
          <button className='footer__filter'>Active</button>
          <button className='footer__filter'>Completed</button>
        </div>
        <button type='button' className='footer__button'>Clear completed</button>
      </footer>
    </div>
  )
}
