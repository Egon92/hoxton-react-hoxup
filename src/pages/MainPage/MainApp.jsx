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
    if (props.currentUser === null) {
      navigate("/");
    }
    // navigate('/')
  }, [props.currentUser, navigate]);
  useEffect(() => {
    if (params.conversationId) {
      // fetch conversation
    }
  }, []);
  if (props.currentUser === null) return <h1>Not signed in...</h1>;
  return (
    <div className="main-wrapper">
      <SidePanel currentUser={props.currentUser} logOut={props.logOut} />
      <MainChatSection
        // @ts-ignore
        params={props.params}
      />
    </div>
  );
}
export default MainApp;
