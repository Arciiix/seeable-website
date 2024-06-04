import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export default function Footer() {
  return (
    <div className="w-full bg-seeable bg-opacity-40 text-seeable p-8 grid grid-cols-1 lg:grid-cols-3 text-3xl font-rubik">
      <div className="flex items-center">
        <img
          src="/logo/logo-hexagon-empty.png"
          alt="Seeable"
          className="h-16 mx-2"
        />
        &copy; Seeable
      </div>
      <p className="flex justify-center items-center gap-3">
        Made with ❤️ by{" "}
        <a
          className="text-yellow-200 underline hover:text-yellow-300 transition-all"
          href="https://github.com/Arciiix"
          target="_blank"
        >
          Artur Nowak
        </a>
      </p>
      <div className="flex gap-2 justify-end items-center">
        <a
          className="group"
          href="https://www.linkedin.com/in/arciiix/"
          target="_blank"
        >
          <IconBrandLinkedin
            className="group-hover:scale-110 transition-all"
            size={32}
          />
        </a>
        <a className="group" href="https://github.com/Arciiix" target="_blank">
          <IconBrandGithub
            className="group-hover:scale-110 transition-all"
            size={32}
          />
        </a>
      </div>
    </div>
  );
}
