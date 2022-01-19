import LoginSection from "./LoginSection";

function LoginPage(props) {
  return (
    <div className="main-wrapper login">
      <LoginSection setModal={props.setModal} />
    </div>
  );
}
export default LoginPage;
