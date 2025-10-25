import Banner from "../HomeComponents/Banner/Banner";
import About from "../HomeComponents/About/About";
import Menu from "../HomeComponents/Menu/Menu";
import Order from "../HomeComponents/Order/Order";
import Booking from "../HomeComponents/Booking/Booking";
import Specialities from "../HomeComponents/Specialities/Specialities";
import Chef from "../HomeComponents/Chef/Chef";
import Testimonial from "../HomeComponents/Testimonial/Testimonial";
import Location from "../HomeComponents/Location/Location";
import Community from "../HomeComponents/Community/Community";
import Footer from "../Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <Banner />
      <About />
      <Menu />
      <Order />
      <Booking />
      <Specialities />
      <Chef />
      <Testimonial />
      <Location />
      <Community />
      <Footer />
    </main>
  );
};
export default Home;
