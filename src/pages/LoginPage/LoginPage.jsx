import { useEffect, useState } from "react";
import LoginSection from "./LoginSection";

function LoginPage(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((resp) => resp.json())
      .then((usersFromServer) => setUsers(usersFromServer));
  }, []);
  return (
    <div className="main-wrapper login">
      <LoginSection
        setModal={props.setModal}
        users={users}
        logIn={props.logIn}
      />
    </div>
  );
}
export default LoginPage;
