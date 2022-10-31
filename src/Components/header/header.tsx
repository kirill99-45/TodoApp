import IconArrowDown from './icons/arrow-down.svg';

import{ useState, Dispatch, SetStateAction } from 'react';

import './header.css';

import { ITodo } from '../interfaces';

interface IProps {
  setTodos : Dispatch<SetStateAction<ITodo[]>>,
  todos : ITodo[],
}



export const Header: React.FC<IProps> = ({ setTodos, todos }) => {

  const [input, setInput] = useState<string>('')

  const buttonHandler = () => {
    if (input.trim().length > 0) {
      setTodos([{ id : Date.now(), task : input, isDone : false}, ...todos])
      setInput('')
    }
  }

  return (
    <header className='header'>
      <img src={IconArrowDown} alt='arrow' />
      <input
        type='text'
        placeholder='What needs to be done?'
        className='header__input'
        value={input}
        onChange={(event) => setInput(event.currentTarget.value)}
      />
      <button type='button' className='header__button' onClick={buttonHandler}>Создать</button>
    </header>
  )
}
