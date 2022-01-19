import { Navigate, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainApp from "./pages/MainPage/MainApp";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logged-in" element={<MainApp />} />
        <Route path="/logged-in/:conversationId" element={<MainApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
