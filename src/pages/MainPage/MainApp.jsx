import MainChatSection from "./MainChatSection/MainChatSection";
import SidePanel from "./SidePanel/SidePanel";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MainApp(props) {
  const params = useParams();
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    if (params.conversationId) {
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
