import { MessageStyles } from './MessageStyles';

interface MessageProps {
  ResultMessage: string;
}

const Message: React.FC<MessageProps> = (props: MessageProps) => {
  return <MessageStyles>{props.ResultMessage}</MessageStyles>;
};
export default Message;
