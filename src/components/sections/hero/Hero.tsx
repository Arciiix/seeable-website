import {
  IconAugmentedReality,
  IconDisabled,
  IconMoodHeart,
} from "@tabler/icons-react";
import Phone from "../../ui/phone/Phone";
import { AnimatePresence, motion } from "framer-motion";

export default function Hero() {
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
                {"Everybody deserves to see.".split(" ").map((element, i) => (
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
                Introducing Seeable - a reliable{" "}
                <b>companion for safe and hassle-free navigation</b>, designed
                for wheelchair users with visual impairments and beyond! Seeable
                seamlessly integrates cutting-edge technology with user-friendly
                features. Seeable's commitment to users feedback (we make sure
                to communicate a lot with real visually impaired individuals)
                ensures continual improvement and innovation.{" "}
                <b>
                  Explore the world with confidence – one obstacle at a time,
                  with Seeable by your side!
                </b>
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
                    Get started
                  </span>
                </a>
              </motion.div>
            </AnimatePresence>
            <div className="flex items-center justify-center mt-10 flex-col md:flex-row-reverse">
              {/* <img
                src="/images/app-1.png"
                className="h-[500px] md:h-[500px]"
                alt="Seeable - proof of concept"
              /> */}
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
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  <IconAugmentedReality className="text-primary" size={32} />
                  Innovative approach
                </h6>
                <p className="mt-2 text-gray-500">
                  Seeable is a groundbreaking solution that combines advanced
                  technology with user-friendly features to offer a reliable
                  navigation companion - to ensure a safe and hassle-free
                  travel, enhancing mobility and independence.
                </p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  <IconDisabled className="text-primary" size={32} />
                  Designed with (real) users in mind
                </h6>
                <p className="mt-2 text-gray-500">
                  Seeable prioritizes the needs and feedback of its users by
                  actively engaging with visually impaired individuals. This
                  commitment to user input drives continual improvement and
                  innovation, ensuring the product evolves to better serve its
                  community.
                </p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  <IconMoodHeart className="text-primary" size={32} />
                  Solution, not product
                </h6>
                <p className="mt-2 text-gray-500">
                  We don't aim to make Seeable another fancy gadget, another
                  product to sell. We aim to make it a true solution - a beacon
                  of hope for those who need it the most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
