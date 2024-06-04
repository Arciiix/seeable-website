import LiDARRotationAnimation from "../../animations/LiDARRotationAnimation";
import Cards from "../cards/Cards";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Hero from "../hero/Hero";

export default function MainPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Cards />
      <LiDARRotationAnimation />
      <Footer />
    </div>
  );
}
