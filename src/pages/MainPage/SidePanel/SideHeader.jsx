function SideHeader(props) {
  return (
    <header className="panel">
      <img
        className="avatar"
        width="50"
        height="50"
        src={props.currentUser.avatar}
        alt=""
      />
      <h3>{props.currentUser.firstName}</h3>
      <button onClick={() => props.logOut()}>LOG OUT</button>
    </header>
  );
}
export default SideHeader;
