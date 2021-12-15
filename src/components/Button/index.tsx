import React, { Children, ReactNode } from 'react';
import { ButtonButton, Wrapper } from './buttonStyles';

interface ButtonProps {
  title?: string;
  onClick?(): void;
  href?: string;
  handleRoute?(): void;
  children?: ReactNode;
}

function Button(props: ButtonProps) {
  // Render an anchor tag
  let button;
  // If the Button has a handleRoute prop, we want to render a button
  if (props.handleRoute) {
    button = (
      <ButtonButton onClick={props.handleRoute}>
        {Children.toArray(props.children)}
      </ButtonButton>
    );
  }

  if (props.title) {
    button = <ButtonButton>{props.title}</ButtonButton>;
  }

  return <Wrapper>{button}</Wrapper>;
}

export default Button;
