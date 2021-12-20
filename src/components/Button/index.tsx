import React, { Children, ReactNode } from 'react';
import A from './A';
import { ButtonButton, Wrapper } from './buttonStyles';

export interface ButtonProps {
  title?: string;
  href?: string;
  children?: ReactNode;
  imgLeft?: ReactNode;
  onClick?(): void;
  handleRoute?(): void;
}

function Button(props: ButtonProps) {
  let button;
  // Render an anchor tag
  <A href={props.href} onClick={props.onClick}>
    {Children.toArray(props.children)}
  </A>;

  // If the Button has a handleRoute prop, we want to render a button

  if (props.title) {
    button = <ButtonButton>{props.imgLeft}{props.title}</ButtonButton>;
  }

  return <Wrapper>{button}</Wrapper>;
}

export default Button;
