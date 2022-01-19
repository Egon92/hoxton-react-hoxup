import { useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainApp from "./pages/MainPage/MainApp";
import NotFound from "./pages/NotFound";

export default function App() {
  const [modal, setModal] = useState("new-user");
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<LoginPage setModal={setModal} />} />
        <Route path="/logged-in" element={<MainApp />} />
        <Route path="/logged-in/:conversationId" element={<MainApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {modal === "new-user" ? (
        <div className="modal-wrapper">
          <div className="modal">
            <h1>New user modal</h1>
          </div>
        </div>
      ) : null}

      {modal === "something-else" ? (
        <div className="modal-wrapper">
          <div className="modal">
            <h1>Something else</h1>
          </div>
        </div>
      ) : null}
    </div>
  );
}
