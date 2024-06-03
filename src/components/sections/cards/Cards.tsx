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
    <div className="flex flex-wrap gap-5">
      <Card
        videoUrl="/videos/Seeable_0_mapping.mp4"
        description="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
        title="Mapping"
        Icon={IconMap}
        slug="Your own environment"
      />
      <Card
        videoUrl="/videos/Seeable_1_free_mode.mp4"
        description="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
        title="Free mode"
        Icon={IconShield}
        slug="Your trusted companion"
      />
      <Card
        videoUrl="/videos/Seeable_2_map_load.mp4"
        description="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
        title="GPS-based map loading"
        Icon={IconGps}
        slug="Your intelligent system"
      />
      <Card
        videoUrl="/videos/Seeable_3_navigation.mp4"
        description="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
        title="Navigation"
        Icon={IconNavigation}
        slug="Your own navigation"
      />
      <Card
        videoUrl="/videos/Seeable_4_dynamic_path_planning.mp4"
        description="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
        title="Dynamic Path Planning"
        Icon={IconRoad}
        slug="Your live assistant"
      />
      <Card
        videoUrl="/videos/Seeable_5_get_bearings.mp4"
        description="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
        title="Get Bearings"
        Icon={IconBrain}
        slug="Your own environment"
      />
    </div>
  );
}
