import { useTranslation } from "react-i18next";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconWorld,
} from "@tabler/icons-react";

export default function AboutUs() {
  const { t } = useTranslation();
  return (
    <div id="aboutUs">
      <h1 className="mx-auto bg-gradient-to-r from-rose-400 to-pink-400 text-transparent bg-clip-text text-center my-5 p-8 font-medium text-5xl lg:text-7xl">
        {t("aboutUs.title")}
      </h1>
      <div className="flex flex-col lg:flex-row m-2 flex-1 h-full">
        <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center flex flex-col m-2">
          <span className="bg-blue-900 bg-opacity-50 uppercase font-bold text-blue-200 rounded-2xl w-max mx-auto p-2 m-1">
            {t("aboutUs.roles.softwareEngineer")}
          </span>
          <span className="text-5xl">{t("aboutUs.team.arturNowak.name")}</span>
          <span className="m-3">
            {t("aboutUs.team.arturNowak.description")}
          </span>
          <div className="flex justify-center">
            <a
              className="hover:text-blue-100 text-blue-200 transition-all"
              href="https://arturnowak.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <IconWorld size={64} />
            </a>
            <a
              className="hover:text-blue-100 text-blue-200 transition-all"
              href="https://www.linkedin.com/in/arciiix/"
              target="_blank"
              rel="noreferrer"
            >
              <IconBrandLinkedin size={64} />
            </a>
            <a
              className="hover:text-blue-100 text-blue-200 transition-all"
              href="https://github.com/Arciiix"
              target="_blank"
              rel="noreferrer"
            >
              <IconBrandGithub size={64} />
            </a>
          </div>
        </div>
        <div className="flex m-2 h-full">
          <div className="p-3 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 text-white text-center flex flex-col m-2">
            <span className="bg-red-900 bg-opacity-50 uppercase font-bold text-red-200 rounded-2xl w-max mx-auto p-2 m-1">
              {t("aboutUs.roles.hardwareEngineer")}
            </span>
            <span className="text-5xl">
              {t("aboutUs.team.jakubMoczol.name")}
            </span>
            <span className="m-3">
              {t("aboutUs.team.jakubMoczol.description")}
            </span>
            <div className="flex justify-center">
              <a
                className="hover:text-red-100 text-red-200 transition-all"
                href="https://www.linkedin.com/in/jakub-moczoł-169176311/"
                target="_blank"
                rel="noreferrer"
              >
                <IconBrandLinkedin size={64} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <h1 className="bg-gradient-to-r from-rose-400 to-pink-400 text-transparent bg-clip-text text-center mt-5 p-8 font-medium text-2xl lg:text-3xl">
          {t("aboutUs.researchSupervisors.title")}
        </h1>
        <div className="mx-auto flex flex-wrap w-max max-w-[90vw] gap-2 justify-center">
          {(
            t("aboutUs.researchSupervisors.names", {
              returnObjects: true,
            }) as string[]
          ).map((name: string) => (
            <span
              key={name}
              className="bg-yellow-900 bg-opacity-50 uppercase font-bold text-yellow-200 rounded-2xl w-max p-2 text-center m-1"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
