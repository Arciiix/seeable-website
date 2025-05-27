import { useTranslation } from "react-i18next";
import Card, { CardProps } from "../../ui/card/Card";
import {
  Icon,
  IconBrain,
  IconGps,
  IconMap,
  IconNavigation,
  IconRoad,
  IconShield,
} from "@tabler/icons-react";

const iconMap: Record<string, React.ComponentType> = {
  IconMap,
  IconShield,
  IconGps,
  IconNavigation,
  IconRoad,
  IconBrain,
};

export default function Cards() {
  const { t } = useTranslation();
  const cards = t("cards", { returnObjects: true });

  return (
    <div
      id="getStarted"
      className="break-inside-avoid gap-x-1 mx-auto w-max sm:columns-1 lg:columns-2 xl:columns-3 m-5"
    >
      {(cards as CardProps[]).map((card: CardProps, index: number) => {
        const IconComponent = (iconMap[
          card.Icon as unknown as keyof typeof iconMap
        ] || IconBrain) as Icon;
        return (
          <Card
            key={index}
            videoUrl={card.videoUrl}
            description={card.description}
            title={card.title}
            Icon={IconComponent}
            slug={card.slug}
            badgeBackground={card.badgeBackground}
            cardBackground={card.cardBackground}
          />
        );
      })}
    </div>
  );
}
