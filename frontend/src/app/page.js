import Menu from "./components/header/menu/Menu";
import Topnav from "./components/header/topnav/Topnav";
import Service from "./components/service/Service";
import Slider from "./components/slider/Slider";

export default function Home() {
  return (
    <>
    <div className="overflow-x-hidden">
    <header id="header">
      <Topnav/>
      <Menu/>
    </header>
    <main className="content">
    <Slider/>
    <Service/>
    </main>
    </div>
    </>
  );
}
