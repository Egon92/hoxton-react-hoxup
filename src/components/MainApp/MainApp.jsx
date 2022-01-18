import MainChatSection from "./MainChatSection/MainChatSection";
import SidePanel from "./SidePanel/SidePanel";

function MainApp() {
  return (
    <div className="main-wrapper">
      <SidePanel />
      <MainChatSection />
    </div>
  );
}
export default MainApp;
