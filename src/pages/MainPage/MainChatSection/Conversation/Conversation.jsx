import ChatHeader from "./ChatHeader";
import MessageBox from "./MessageBox";
import MessageList from "./MessageList";

function Conversation(props) {
  return (
    <main className="conversation">
      <ChatHeader />
      <MessageList params={props.params} />
      <MessageBox />
    </main>
  );
}
export default Conversation;
