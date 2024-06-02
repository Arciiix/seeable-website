import { useState } from "react";
import InitialAnimation from "./components/sections/initial-animation/InitialAnimation";
import MainPage from "./components/sections/main-page/MainPage";

function App() {
  const [isShowingInitialAnimation, setIsShowingInitialAnimation] =
    useState(true);

  const cancelInitialAnimation = () => {
    console.log("test");
    setIsShowingInitialAnimation(false);
  };

  return isShowingInitialAnimation ? (
    <InitialAnimation handleCancelInitialAnimation={cancelInitialAnimation} />
  ) : (
    <MainPage />
  );
}

export default App;
