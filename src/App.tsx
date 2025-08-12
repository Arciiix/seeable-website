// import { useState } from "react";
// import InitialAnimation from "./components/sections/initial-animation/InitialAnimation";
import MainPage from "./components/sections/main-page/MainPage";
import "./i18n/i18n";

function App() {
  // const [isShowingInitialAnimation, setIsShowingInitialAnimation] =
  //   useState(true);

  // const cancelInitialAnimation = () => {
  //   setIsShowingInitialAnimation(false);
  // };

  // TODO: Think about whether to use the initial animation at all
  // return isShowingInitialAnimation ? (
  //   <InitialAnimation handleCancelInitialAnimation={cancelInitialAnimation} />
  // ) : (
  //   <MainPage />
  // );

  return <MainPage />;
}

export default App;
