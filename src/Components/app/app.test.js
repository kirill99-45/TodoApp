import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import { App } from './app';
import { Main } from '../main/main';
import { Header } from '../header/header';
import { Input } from '../header/input';

describe('App component', () => {
  it('Render app', () => {
    render(<App />)
    const buttonText = screen.getByText('Создать')
    expect(buttonText).toBeInTheDocument()
  });

  it('Clear completed is working', () => {
    render(<App />)

    expect(screen.getByText('Тестовое задание')).toBeInTheDocument()
    expect(screen.queryByText('Прекрасный код')).toBeInTheDocument()

    userEvent.click(screen.getByText('Clear completed'))

    expect(screen.queryByText('Тестовое задание')).toBeInTheDocument()
    expect(screen.queryByText('Прекрасный код')).toBeNull()
  });

  it('Add new task', () => {
    render(<App />)

    expect(screen.getByText('Тестовое задание')).toBeInTheDocument()

    userEvent.type(screen.getByRole('textbox'), 'New task')
    userEvent.click(screen.getByText('Создать'))

    expect(screen.queryByText('Тестовое задание')).toBeInTheDocument()
    expect(screen.queryByText('New task')).toBeInTheDocument()
  });
})


const data = [{ id : 1, task : 'Сходить в магазин', isDone : false }]
const setTodos = jest.fn()
const filter = 'all'

describe('Main component', () => {
  it('Main with props', () => {
    render(<Main todos={data} setTodos={setTodos} filter={filter}/>)
    expect(screen.getByText(/Сходить в магазин/)).toBeInTheDocument()
  })
})

const onChange = jest.fn()

describe('Header component', () => {
  it(`Header's input works`, () => {
    render(<Input onChange={onChange} value='' placeholder='What needs to be done?'/>)

    userEvent.type(screen.getByRole('textbox'), 'React')

    expect(onChange).toHaveBeenCalledTimes(5)
  })
  it (`Header's input works withour placeholder`, () => {
    render (<Input value='' onChange={onChange} />)

    expect(screen.getByPlaceholderText('Text...')).toBeInTheDocument();
  })
})
