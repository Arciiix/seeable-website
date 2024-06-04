import {
  IconBrush,
  IconCoin,
  IconDisabled,
  IconMoodSilence,
  IconPhotoSensor2,
} from "@tabler/icons-react";
import InlineCard from "../../ui/inline-card/InlineCard";

export default function Adventages() {
  return (
    <div className="relative [&>*]:text-nowrap text-2xl w-full my-3 flex flex-col items-center">
      <span
        className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500
      "
      >
        And it's all...
      </span>
      <div className="w-max flex flex-col gap-3 ">
        <InlineCard
          title="Costless"
          description="No need to modify the building - no additional sensors needed"
          textColor="text-purple-300"
          backgroundColor="bg-purple-900"
          Icon={IconPhotoSensor2}
        />
        <InlineCard
          title="Customizable"
          description="Everyone creates their own Seeable"
          textColor="text-blue-300"
          backgroundColor="bg-blue-900"
          Icon={IconBrush}
        />
        <InlineCard
          title="Accessible"
          description="Seeable is designed for people with disabilities"
          textColor="text-green-300"
          backgroundColor="bg-green-900"
          Icon={IconDisabled}
        />
        <InlineCard
          title="Affordable"
          description="No need to buy expensive equipment"
          textColor="text-yellow-300"
          backgroundColor="bg-yellow-900"
          Icon={IconCoin}
        />
        <InlineCard
          title="Discreet"
          description="As the visually impaired people asked for"
          textColor="text-red-300"
          backgroundColor="bg-red-900"
          Icon={IconMoodSilence}
        />
      </div>
    </div>
  );
}
