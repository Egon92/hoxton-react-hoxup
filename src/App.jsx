import { useState } from "react";
import { Navigate, Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainApp from "./pages/MainPage/MainApp";
import NotFound from "./pages/NotFound";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [modal, setModal] = useState("");
  const navigate = useNavigate();

  function logIn(user) {
    setCurrentUser(user);
    navigate("/logged-in");
  }
  function logOut() {
    setCurrentUser(null);
  }
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate replace to="/login" />} />
        <Route
          path="/login"
          element={
            <LoginPage setModal={setModal} logIn={logIn} logOut={logOut} />
          }
        />
        <Route
          path="/logged-in"
          element={<MainApp currentUser={currentUser} />}
        />
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
