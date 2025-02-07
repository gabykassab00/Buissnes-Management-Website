import Case from "./components/casestudy/Case";
import Form from "./components/formrequest/Form";
import Menu from "./components/header/menu/Menu";
import Topnav from "./components/header/topnav/Topnav";
import Payment from "./components/paymentgateway/Payment";
import Paymentpart from "./components/paymentgateway/Paymentpart";
import Service from "./components/service/Service";
import Slider from "./components/slider/Slider";
import serviceData from '@/./app/data/service.json'
import Testimonial from "./components/testimonial/Testimonial";
import Blog from "./components/blog/Blog";
import blogData from '@/./app/data/blog.json';
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
    <Service data={serviceData}/>
    <Payment/>
    <Case/>
    <Paymentpart/>
    <Form/>
    <Testimonial/>
    <Blog data={blogData}/>
    </main>
    </div>
    </>
  );
}
