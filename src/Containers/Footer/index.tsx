import React from 'react';
import { Wrapper } from '../../components/Button/buttonStyles';
import { FooterButton, FooterText } from './footer';

interface FooterButtonProps {
  title?: string;
}

const Footer: React.FC<FooterButtonProps> = (props: FooterButtonProps) => {
  return (
    <Wrapper>
      <FooterButton>
        <FooterText>{props.title}</FooterText>
      </FooterButton>
    </Wrapper>
  );
};

export default Footer;
