import {
  IconBrain,
  IconGps,
  IconMap,
  IconNavigation,
  IconRoad,
  IconShield,
} from "@tabler/icons-react";
import Card from "../../ui/card/Card";

export default function Cards() {
  return (
    <div className="break-inside-avoid gap-x-1 mx-auto w-max sm:columns-1 lg:columns-2 xl:columns-3 m-5">
      <Card
        videoUrl="/videos/Seeable_0_mapping.mp4"
        description="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
        title="Mapping"
        Icon={IconMap}
        slug="Your own environment"
        badgeBackground="bg-gradient-to-r from-rose-400 to-pink-400 text-pink-950"
        cardBackground="bg-rose-100"
      />
      <Card
        videoUrl="/videos/Seeable_1_free_mode.mp4"
        description="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
        title="Free mode"
        Icon={IconShield}
        slug="Your trusted companion"
        badgeBackground="bg-gradient-to-r from-blue-400 to-cyan-200 text-blue-950"
        cardBackground="bg-blue-100"
      />
      <Card
        videoUrl="/videos/Seeable_2_map_load.mp4"
        description="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
        title="GPS-based map loading"
        Icon={IconGps}
        slug="Your intelligent system"
        badgeBackground="bg-gradient-to-r from-green-400 to-emerald-400 text-green-950"
        cardBackground="bg-green-100"
      />
      <Card
        videoUrl="/videos/Seeable_3_navigation.mp4"
        description="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
        title="Navigation"
        Icon={IconNavigation}
        slug="Your own navigation"
        badgeBackground="bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-950"
        cardBackground="bg-yellow-100"
      />
      <Card
        videoUrl="/videos/Seeable_4_dynamic_path_planning.mp4"
        description="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
        title="Dynamic Path Planning"
        Icon={IconRoad}
        slug="Your live assistant"
        badgeBackground="bg-gradient-to-r from-red-400 to-rose-400 text-red-950"
        cardBackground="bg-red-100"
      />
      <Card
        videoUrl="/videos/Seeable_5_get_bearings.mp4"
        description="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
        title="Get Bearings"
        Icon={IconBrain}
        slug="Your own mind"
        badgeBackground="bg-gradient-to-r from-purple-400 to-violet-400 text-purple-950"
        cardBackground="bg-purple-100"
      />
    </div>
  );
}
