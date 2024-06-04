import { Icon } from "@tabler/icons-react";
import { motion } from "framer-motion";

type InlineCardProps = {
  title: string;
  description: string;
  textColor: string;
  backgroundColor: string;
  Icon: Icon;
};

export default function InlineCard({
  title,
  description,
  textColor,
  backgroundColor,
  Icon,
}: InlineCardProps) {
  return (
    <motion.div
      className={`${textColor} flex gap-3 items-center m-2 max-w-sm md:max-w-md lg:max-w-max`}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`${backgroundColor} bg-opacity-30 w-16 h-16 rounded-full grid place-items-center flex-shrink-0`}
      >
        <Icon size={32} />
      </div>
      <div className="flex flex-col">
        <span className="font-bold">{title}</span>
        <span className="text-slate-300 text-wrap">{description}</span>
      </div>
    </motion.div>
  );
}
