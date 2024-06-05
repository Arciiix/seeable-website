import { Icon } from "@tabler/icons-react";

type CardProps = {
  videoUrl: string;
  title: string;
  description: string;
  Icon: Icon;
  slug: string;

  cardBackground: string;
  badgeBackground: string;
};

export default function Card({
  videoUrl,
  title,
  description,
  Icon,
  slug,
  cardBackground,
  badgeBackground,
}: CardProps) {
  return (
    <div className="group font-rubik flex flex-col items-center justify-center rounded-3xl overflow-hidden m-6 w-72 md:w-96 h-full transition-all hover:drop-shadow-glow">
      <video
        className="group-hover:scale-105 transition-all ease-in-out rounded-t-3xl w-96 overflow-hidden"
        src={videoUrl}
        autoPlay
        loop
        muted
      />

      <div
        className={`relative w-full p-7 text-black rounded-b-3xl ${cardBackground}`}
      >
        <div
          className={`flex bg-gradient-to-r from-amber-100 to-yellow-400 text-black rounded-2xl w-max gap-4 m-1 p-2 ${badgeBackground}`}
        >
          {<Icon />}
          <div className="font-medium">{slug}</div>
        </div>
        <h1 className="text-4xl py-5">{title}</h1>
        <p className="text-1xl py-2">{description}</p>
      </div>
    </div>
  );
}
