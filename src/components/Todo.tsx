import * as React from 'react';

interface IProps {
  text: string;
  completed: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const Todo = ({ onClick, completed, text }: IProps) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}>
    {text}
  </li>
);

export default Todo;
