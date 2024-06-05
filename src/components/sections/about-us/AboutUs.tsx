import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export default function AboutUs() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row m-2 flex-1 h-full">
        <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-600 text-white text-center flex flex-col m-2">
          <span className="bg-blue-900 bg-opacity-50 uppercase font-bold text-blue-200  rounded-2xl w-max mx-auto p-2 m-1">
            software engineer
          </span>
          <span className="text-5xl">Artur Nowak</span>
          <span className="m-3">
            Overseeing all coding aspects, ensuring the seamless integration of
            cutting-edge technology with user-friendly features in Seeable,
            enabling safe and hassle-free navigation for wheelchair users with
            visual impairments and beyond.
          </span>
          <div className="flex justify-center">
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
        <div className="flex m-2 fle-1 h-full">
          <div className="p-3 rounded-2xl bg-gradient-to-r from-red-400 to-red-600 text-white text-center flex flex-col m-2">
            <span className="bg-red-900 bg-opacity-50 uppercase font-bold text-red-200  rounded-2xl w-max mx-auto p-2 m-1">
              hardware engineer
            </span>
            <span className="text-5xl">Jakub Moczoł</span>
            <span className="m-3">
              Designing and fabricating the prototype case housing: LiDAR,
              Raspberry Pi, and other components, ensuring seamless integration,
              functionality, durability, and aesthetic appeal for the users'
              optimal experience. Responsible for testing.
            </span>
            <div className="flex justify-center">
              <a
                className="hover:text-red-100 text-red-200 transition-all"
                href="https://www.linkedin.com/in/arciiix/"
                target="_blank"
                rel="noreferrer"
              >
                <IconBrandLinkedin size={64} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
