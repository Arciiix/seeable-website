import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export default function Footer() {
  return (
    <div className="w-full bg-seeable bg-opacity-40 text-seeable p-8 grid grid-cols-3 text-3xl font-rubik">
      <p>&copy; Seeable</p>
      <p className="flex justify-center gap-3">
        Made with ❤️ by{" "}
        <a
          className="text-yellow-200 underline hover:text-yellow-300 transition-all"
          href="https://github.com/Arciiix"
          target="_blank"
        >
          Artur Nowak
        </a>
      </p>
      <div className="flex gap-2 justify-end">
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
