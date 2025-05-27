import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "../../ui/buttons/Button";
import { ROTATION_FRAMES_FILENAME } from "../../animations/LiDARRotationAnimation";
import { useTranslation } from "react-i18next";
import ChangeLanguageButton from "../../language/ChangeLanguageButton";

type InitialAnimationProps = {
  handleCancelInitialAnimation: () => void;
};

type AnimationStage =
  | "logo"
  | "imagineYourself"
  | "dark"
  | "feelsHard"
  | "done";

let alreadyCachedImages = false;

// A function that preloads images for the scroll animation of the LiDAR
const preloadImages = async () => {
  if (alreadyCachedImages) return;
  alreadyCachedImages = true;

  const promises = ROTATION_FRAMES_FILENAME.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  });
  await Promise.all(promises);
};

export default function InitialAnimation({
  handleCancelInitialAnimation,
}: InitialAnimationProps) {
  const { t } = useTranslation();
  const [animationStage, setAnimationStage] = useState<AnimationStage>("logo");

  const handleSkip = () => {
    handleCancelInitialAnimation();
  };

  useEffect(() => {
    const timeouts = [
      setTimeout(() => {
        setAnimationStage("imagineYourself");
      }, 3000),
      setTimeout(() => {
        setAnimationStage("dark");
      }, 7000),
      setTimeout(() => {
        setAnimationStage("feelsHard");
      }, 10000),
      setTimeout(() => {
        setAnimationStage("done");
      }, 12500),
      setTimeout(() => {
        handleCancelInitialAnimation();
      }, 13500),
    ];

    preloadImages();

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-seeable-dark">
      <div className="font-rubik">
        <AnimatePresence>
          {animationStage === "logo" && (
            <motion.div
              className="flex items-center justify-center flex-col w-screen h-screen"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute top-0 right-0 p-4">
                <ChangeLanguageButton />
              </div>
              <motion.img
                className="h-64"
                src="/logo/logo-hexagon-empty.png"
                alt="Seeable"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
              <motion.span
                className="text-8xl font-medium text-seeable"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {t("initialAnimation.logo.title")}
              </motion.span>
              <div className="flex gap-1 text-seeable text-opacity-90 text-2xl m-3 flex-wrap justify-center">
                {t("initialAnimation.logo.subtitle")
                  .split(" ")
                  .map((el, i) => (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.1,
                        delay: i * 0.1 + 1,
                      }}
                      key={i}
                    >
                      {el}{" "}
                    </motion.span>
                  ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <Button onClick={handleSkip}>
                  {t("initialAnimation.logo.skipButton")}
                </Button>
              </motion.div>
            </motion.div>
          )}
          {animationStage === "imagineYourself" && (
            <motion.div
              className="flex items-center justify-center flex-col w-screen h-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.span
                className="text-6xl font-medium text-seeable"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {t("initialAnimation.imagineYourself.line1")}
              </motion.span>
              <motion.span
                key="test"
                className="text-6xl font-medium text-seeable"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                {t("initialAnimation.imagineYourself.line2")}
              </motion.span>
              <motion.span
                key="test2"
                className="text-6xl text-center lg:text-8xl font-medium text-seeable-dark text-outline-seeable w-screen break-all px-2 hyphens-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 2 }}
              >
                {t("initialAnimation.imagineYourself.line3")}
              </motion.span>
            </motion.div>
          )}
          {(animationStage === "dark" || animationStage === "done") && (
            <motion.div
              className="bg-black flex items-center justify-center flex-col w-screen h-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>
          )}
          {animationStage === "feelsHard" && (
            <motion.div
              className="bg-black flex items-center justify-center flex-col w-screen h-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.span
                className="text-6xl font-medium text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {t("initialAnimation.feelsHard.line1")}
              </motion.span>
              <motion.span
                className="text-6xl font-medium text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                {t("initialAnimation.feelsHard.line2")}
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
