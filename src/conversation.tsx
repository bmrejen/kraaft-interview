import { Message, User } from './assets/types';

interface Props {
  className: string;
  currentUserId: string;
  messages: Message[];
  users: User[];
}

const Conversation = (props: Props) => {
  const { className, messages } = props;

  return (
    <div className={className}>
      {messages &&
        messages.length > 0 &&
        messages.map((message, i) => {
          // console.log(typeof message);
          return <div key={i}>{typeof message}</div>;
        })}
    </div>
  );
};

export default Conversation;
