import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainApp from "./pages/MainPage/MainApp";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function App() {
  const params = useParams();
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    if (params.conversationId) {
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="./login" element={<LoginPage />} />
        <Route path="./logged-in" element={<MainApp params={params} />} />
        <Route path="./logged-in/:conversationId" element={<MainApp />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}
