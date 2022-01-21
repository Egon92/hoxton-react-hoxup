import MainChatSection from "./MainChatSection/MainChatSection";
import SidePanel from "./SidePanel/SidePanel";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MainApp(props) {
  const [currentConversation, setCurrentConversation] = useState([]);
  const [setonversation, setConversation] = useState([]);
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
      fetch(
        `http://localhost:4000/conversations/${params.conversationId}?_embed=messages`
      )
        .then((resp) => resp.json())
        .then((conversation) => setCurrentConversation(conversation));
    }
  }, [params.conversationId]);
  useEffect(() => {
    if (props.currentUser === null) return;

    fetch(`http://localhost:4000/conversations?userId=${currentUser.id}`)
      .then((resp) => resp.json())
      .then((conversations) => props.setConversations(conversations));
  }, [props.currentUser]);
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
