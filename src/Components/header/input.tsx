import { Dispatch, SetStateAction } from 'react';

interface IProps {
  placeholder? : string,
  value : string,
  onChange : Dispatch<SetStateAction<string>>,
}


export const Input: React.FC<IProps> = ({ placeholder = 'Text...', value = '', onChange  }) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      className='header__input'
      value={value}
      onChange={(event: React.FormEvent<HTMLInputElement>) => onChange(event.currentTarget.value)}
    />
  )
}
