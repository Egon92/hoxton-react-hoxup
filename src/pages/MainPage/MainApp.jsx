import MainChatSection from "./MainChatSection/MainChatSection";
import SidePanel from "./SidePanel/SidePanel";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MainApp(props) {
  const [conversation, setConversation] = useState([]);
  const params = useParams();
  // if user is not signed in, redirect to login page
  const navigate = useNavigate();
  useEffect(() => {
    // if user is not logged in:
    // navigate('/')
  });
  useEffect(() => {
    if (params.conversationId) {
      // fetch conversation
    }
  }, []);
  return (
    <div className="main-wrapper">
      <SidePanel />
      <MainChatSection
        // @ts-ignore
        params={props.params}
      />
    </div>
  );
}
export default MainApp;
