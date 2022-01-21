import SearchForm from "./SearchForm";
import SideChat from "./SideChat";
import SideHeader from "./SideHeader";

function SidePanel(props) {
  console.log("Poop");
  return (
    <aside>
      <SideHeader currentUser={props.currentUser} logOut={props.logOut} />
      <SearchForm />
      <SideChat />
    </aside>
  );
}
export default SidePanel;
