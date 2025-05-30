import { useTranslation } from "react-i18next";

export default function WatchVideo() {
  const { t } = useTranslation();

  return (
    <div
      id="video"
      className="w-full mx-auto bg-gradient-to-b from-seeable-dark to-seeable-light text-seeable p-8 font-rubik"
    >
      <span className="bg-gradient-to-r from-amber-100 to-yellow-400 text-transparent w-full block bg-clip-text text-center my-5 p-8 font-medium text-5xl lg:text-7xl">
        {t("watchVideo.title")}{" "}
        <b className="bg-gradient-to-r from-rose-400 to-pink-400 text-transparent bg-clip-text">
          {t("watchVideo.highlight")}
        </b>
      </span>
      <iframe
        className="mx-auto w-[80vw] h-[calc(80vw/1.77)] rounded-2xl"
        src={t("watchVideo.videoUrl")}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
