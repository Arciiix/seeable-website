import { useTranslation } from "react-i18next";
import {
  IconBrush,
  IconCoin,
  IconDisabled,
  IconMoodSilence,
  IconPhotoSensor2,
} from "@tabler/icons-react";
import InlineCard, { InlineCardProps } from "../../ui/inline-card/InlineCard";

export default function Adventages() {
  const { t } = useTranslation();
  const cards = t("adventages.cards", { returnObjects: true });

  const icons = [
    IconPhotoSensor2,
    IconBrush,
    IconDisabled,
    IconCoin,
    IconMoodSilence,
  ];

  return (
    <div className="relative [&>*]:text-nowrap text-2xl w-full my-3 flex flex-col items-center">
      <span className="text-6xl py-3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        {t("adventages.title")}
      </span>
      <div className="w-max flex flex-col gap-3">
        {(cards as InlineCardProps[]).map(
          (card: InlineCardProps, index: number) => (
            <InlineCard
              key={index}
              title={card.title}
              description={card.description}
              textColor={`text-${
                ["purple", "blue", "green", "yellow", "red"][index]
              }-300`}
              backgroundColor={`bg-${
                ["purple", "blue", "green", "yellow", "red"][index]
              }-900`}
              Icon={icons[index]}
            />
          )
        )}
      </div>
    </div>
  );
}
