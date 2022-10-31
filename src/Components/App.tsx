import React, { useState } from 'react';

import { Header } from './header/header';
import { Main } from './main/main';
import { Footer } from './footer/footer';

import { ITodo } from './interfaces';

import './app.css';


export const App: React.FC = () => {

  const [filter, setFilter] = useState<string>('All')
  const [todos, setTodos] = useState<ITodo[]>([
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
      <Header
        todos={todos}
        setTodos={setTodos}
      />
      <Main
        todos={todos}
        setTodos={setTodos}
        filter={filter}
      />
      <Footer
        todos={todos}
        setTodos={setTodos}
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  )
}
