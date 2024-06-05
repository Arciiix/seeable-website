import LiDARRotationAnimation from "../../animations/LiDARRotationAnimation";
import Achievements from "../achivements/Achievements";
import Adventages from "../adventages/Adventages";
import Cards from "../cards/Cards";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import WatchVideo from "../video/WatchVideo";

export default function MainPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Cards />
      <Adventages />
      <WatchVideo />
      <Achievements />
      <LiDARRotationAnimation />
      <Footer />
    </div>
  );
}
