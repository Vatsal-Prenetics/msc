import { FooterButton, FooterText, Wrapper } from './footer';

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
