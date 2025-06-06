import LiDARRotationAnimation from "../../animations/LiDARRotationAnimation";
import CookieNotice from "../../cookies/CookieNotice";
import AboutUs from "../about-us/AboutUs";
import Achievements from "../achivements/Achievements";
import Adventages from "../adventages/Adventages";
import Cards from "../cards/Cards";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import WatchVideo from "../video/WatchVideo";

export default function MainPage() {
  return (
    <div>
      <CookieNotice />
      <Header />
      <Hero />
      <Cards />
      <Adventages />
      <WatchVideo />
      <Achievements />
      <AboutUs />
      <Contact />
      <LiDARRotationAnimation />
      <Footer />
    </div>
  );
}
