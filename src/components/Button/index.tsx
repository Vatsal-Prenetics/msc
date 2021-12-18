import React, { Children, ReactNode } from 'react';
import A from './A';
import { ButtonButton, Wrapper } from './buttonStyles';

export interface ButtonProps {
  title?: string;
  onClick?(): void;
  href?: string;
  handleRoute?(): void;
  children?: ReactNode;
}

function Button(props: ButtonProps) {
  let button;
  // Render an anchor tag
  <A href={props.href} onClick={props.onClick}>
    {Children.toArray(props.children)}
  </A>;

  // If the Button has a handleRoute prop, we want to render a button

  if (props.title) {
    button = <ButtonButton>{props.title}</ButtonButton>;
  }

  return <Wrapper>{button}</Wrapper>;
}

export default Button;
