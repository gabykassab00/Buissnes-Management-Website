import Menu from "./components/header/menu/Menu";
import Topnav from "./components/header/topnav/Topnav";

export default function Home() {
  return (
    <>
    <div className="overflow-x-hidden">
    <header id="header">
      <Topnav/>
      <Menu/>
    </header>
    </div>
    </>
  );
}
