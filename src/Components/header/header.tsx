import IconArrowDown from './icons/arrow-down.svg';
import { Input } from './input';

import{ useState, Dispatch, SetStateAction } from 'react';

import './header.css';

import { ITodo } from '../interfaces';

interface IProps {
  setTodos : Dispatch<SetStateAction<ITodo[]>>,
  todos : ITodo[],
}


export const Header: React.FC<IProps> = ({ setTodos, todos }) => {

  const [inputValue, setInputValue] = useState<string>('')

  const buttonHandler = () => {
    if (inputValue.trim().length > 0) {
      setTodos([{ id : Date.now(), task : inputValue, isDone : false}, ...todos])
      setInputValue('')
    }
  }

  return (
    <header className='header'>
      <img src={IconArrowDown} alt='arrow' />
      <Input placeholder='What needs to be done?' value={inputValue} onChange={setInputValue}/>
      <button type='button' className='header__button' onClick={buttonHandler}>Создать</button>
    </header>
  )
}
