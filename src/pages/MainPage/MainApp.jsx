import MainChatSection from "./MainChatSection/MainChatSection";
import SidePanel from "./SidePanel/SidePanel";

function MainApp(props) {
  return (
    <div className="main-wrapper">
      <SidePanel />
      <MainChatSection
        // @ts-ignore
        params={props.params}
      />
    </div>
  );
}
export default MainApp;
