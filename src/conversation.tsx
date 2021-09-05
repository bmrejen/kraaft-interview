import { Message, User } from './assets/types';

interface Props {
  className: string;
  currentUserId: string;
  messages: Message[];
  users: User[];
}

const CURRENT_USER = 'maxime@kraaft.co';

function formatDate(date: Date): string {
  return `
  ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - 
  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

function formatEmailToFirstname(email: string): string {
  const name = email.split('@')[0];
  return name[0].toUpperCase() + name.slice(1) || '';
}

const Conversation = (props: Props) => {
  const { className, messages } = props;

  return (
    <div className={className}>
      {messages &&
        messages.length > 0 &&
        messages.map((message: Message, i) => {
          console.log(message);

          return (
            <div
              key={i}
              className={
                message.senderId === CURRENT_USER ? 'message right' : 'message'
              }>
              <span className="message-sender">
                {formatEmailToFirstname(message.senderId)}
              </span>
              {message.type === 'text' ? (
                <span className="message-content">{message.content}</span>
              ) : (
                <img src={message.url} width={400}></img>
              )}
              <span className="message-date">
                {formatDate(new Date(message.createdAt))}
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default Conversation;
