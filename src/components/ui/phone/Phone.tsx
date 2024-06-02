import { IconAntennaBars5, IconBatteryCharging } from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function Phone() {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-2xl drop-shadow-[0_6px_6px_rgba(218,197,0,0.2)]"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(24px) translateY(-20px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 3,
          ease: "easeInOut",
        }}
        className="relative h-[500px] w-64 rounded-3xl border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-app-background p-1 pl-1 pt-8"
      >
        <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-app-background"></div>

        <div className="w-full pr-8 justify-between absolute top-2 left-4 z-10 flex gap-2">
          <span className="text-xs">Seeable</span>
          <div className="flex gap-1">
            <IconAntennaBars5 className="text-white" size={16} />
            <IconBatteryCharging className="text-white" size={16} />
          </div>
        </div>

        <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
          <div className="bg-app-background">
            <img
              className="mt-3"
              src="/images/app-1.png"
              alt="Seeable - proof of concept"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
