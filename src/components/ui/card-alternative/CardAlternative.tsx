export type CardAlternativeProps = {
  title: string;
  description: string;
  imageURL: string;
  place: string;
  range: string;
};

export default function CardAlternative({
  title,
  description,
  imageURL,
  place,
  range,
}: CardAlternativeProps) {
  return (
    <div className="hover:drop-shadow-glow hover:-translate-y-1 transition-all rounded-2xl rounded-t-none text-black  max-w-lg m-4 flex flex-col leading-7">
      <div
        className={
          "bg-gradient-to-r from-yellow-300 to-yellow-500 h-3 rounded-t-full"
        }
      ></div>
      <div
        className={`flex flex-col items-center lg:flex-row p-4 bg-white gap-5 rounded-b-2xl`}
      >
        <div className="flex flex-col gap-3">
          <div className="flex justify-between text-sm">
            <span>{place}</span>
            <span>{range}</span>
          </div>
          <img
            className="w-8/12 mx-auto rounded-2xl"
            src={imageURL}
            alt={title}
          />
          <span className="text-3xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text font-bold">
            {title}
          </span>
          <span className="text-slate-700">{description}</span>
        </div>
      </div>
    </div>
  );
}
