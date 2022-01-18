import SearchForm from "./SearchForm";
import SideChat from "./SideChat";
import SideHeader from "./SideHeader";

function SidePanel() {
  return (
    <aside>
      <SideHeader />
      <SearchForm />
      <SideChat />
    </aside>
  );
}
export default SidePanel;
