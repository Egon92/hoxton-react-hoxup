function LoginSection(props) {
  console.log(props.users);
  return (
    <section className="login-section">
      <h2>Choose your user!</h2>
      <ul>
        {props.users.map((user) => (
          <li>
            <button className="user-selection">
              <img
                className="avatar"
                width="50"
                height="50"
                src={user.avatar}
                alt=""
              />
              <h3>{`${user.firstName} ${user.lastName}`}</h3>
            </button>
          </li>
        ))}
        <li>
          <button
            className="user-selection"
            onClick={() => props.setModal("new-user")}
          >
            <h3>+ Add a new user</h3>
          </button>
        </li>
      </ul>
    </section>
  );
}
export default LoginSection;
