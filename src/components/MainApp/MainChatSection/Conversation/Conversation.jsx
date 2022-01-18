import ChatHeader from "./ChatHeader";
import MessageBox from "./MessageBox";
import MessageList from "./MessageList";

function Conversation() {
  return (
    <main className="conversation">
      <ChatHeader />
      <MessageList />
      <MessageBox />
    </main>
  );
}
export default Conversation;
