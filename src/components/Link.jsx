import * as React from 'react';

interface IProps {
  active: string;
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}
​
const Link = ({ active, children, onClick }: IProps) => {
  if (active) {
    return <span>{children}</span>
  }
​
  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}
​
export default Link