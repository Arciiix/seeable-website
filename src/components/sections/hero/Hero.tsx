import {
  IconAugmentedReality,
  IconDisabled,
  IconMoodHeart,
} from "@tabler/icons-react";
import Phone from "../../ui/phone/Phone";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type Feature = {
  title: string;
  description: string;
};

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative px-4" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20"
      >
        <div className="blur-[106px] h-screen bg-gradient-to-br  to-purple-400 from-blue-700"></div>
        <div className="blur-[106px] h-screen bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <div>
        <div className="relative pt-36 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <AnimatePresence>
              <h1 key="title" className="flex flex-wrap justify-center">
                {t("hero.title")
                  .split(" ")
                  .map((element: string, i: number) => (
                    <motion.span
                      key={element}
                      className="text-white font-bold text-5xl md:text-6xl xl:text-7xl mx-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: i * 0.7,
                      }}
                    >
                      {element}
                    </motion.span>
                  ))}
              </h1>
              <motion.p
                key="description"
                className="mt-8 text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.5 }}
              >
                {t("hero.description")}
              </motion.p>
              <motion.div
                key="button"
                className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.5 }}
              >
                <a
                  href="#getStarted"
                  className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-base font-semibold text-white">
                    {t("hero.getStarted")}
                  </span>
                </a>
              </motion.div>
            </AnimatePresence>
            <div className="flex items-center justify-center mt-10 flex-col md:flex-row-reverse">
              <Phone />
              <div className="relative">
                <div className="absolute transition-all duration-1000 opacity-30 inset-16 bg-gradient-to-r from-seeable via-amber-400 to-yellow-500 rounded-xl blur-3xl"></div>
                <img
                  src="/images/seeable-poc.png"
                  className="relative md:h-[500px]"
                  alt="Seeable - proof of concept"
                />
              </div>
            </div>
            <div className="py-8 border-y border-gray-100 dark:border-gray-800 gap-3 flex flex-col sm:flex-row justify-between">
              {(t("hero.features", { returnObjects: true }) as Feature[]).map(
                (feature: Feature, index: number) => (
                  <div key={index} className="text-left">
                    <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                      {index === 0 && (
                        <IconAugmentedReality
                          className="text-primary"
                          size={32}
                        />
                      )}
                      {index === 1 && (
                        <IconDisabled className="text-primary" size={32} />
                      )}
                      {index === 2 && (
                        <IconMoodHeart className="text-primary" size={32} />
                      )}
                      {feature.title}
                    </h6>
                    <p className="mt-2 text-gray-500">{feature.description}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
