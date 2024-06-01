import { useState } from "react";
import InitialAnimation from "./components/sections/initial-animation/InitialAnimation";

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
    <div>App</div>
  );
}

export default App;
