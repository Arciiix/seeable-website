import { useTranslation } from "react-i18next";
import CardAlternative, {
  CardAlternativeProps,
} from "../../ui/card-alternative/CardAlternative";

export default function Achievements() {
  const { t } = useTranslation();
  const cards = t("achievements.cards", { returnObjects: true });

  return (
    <div id="achievements" className="flex flex-col items-center w-full">
      <span className="text-5xl lg:text-7xl text-center bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text font-bold px-2 py-4">
        {t("achievements.title")}
      </span>
      <span className="text-2xl mt-4 text-yellow-200 text-center w-1/2">
        {t("achievements.subtitle")}
      </span>
      <div className="flex flex-wrap items-center justify-center">
        {(cards as CardAlternativeProps[]).map(
          (card: CardAlternativeProps, index: number) => (
            <CardAlternative
              key={index}
              title={card.title}
              description={card.description}
              imageURL={card.imageURL}
              place={card.place}
              range={card.range}
            />
          )
        )}
      </div>
    </div>
  );
}
