import CardAlternative from "../../ui/card-alternative/CardAlternative";

export default function Achievements() {
  return (
    <div className="flex flex-col items-center w-full">
      <span className="text-5xl lg:text-7xl text-center bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text font-bold">
        What have we achieved so far?
      </span>
      <span className="text-2xl mt-4 text-yellow-200 text-center w-1/2">
        Here are just a few of our successes 🏆
      </span>
      <div className="flex flex-wrap justify-center">
        <CardAlternative
          title="YOUNG E-NNOVATOR PITCH @ E-NNOVATE 2024"
          description="Young E-NNOVATOR Pitch is a contest created to enable the young innovators, inventors and entrepreneurs to present their idea to the industry and get validation, feedback, mentoring and funding."
          imageURL="/images/achievements/E-NNOVATE Young Innovator Pitch.jpeg"
          place="1st place"
          range="international"
        />
        <CardAlternative
          title="OLIMPIADA INNOWACJI TECHNICZNYCH W ELEKTRONICE I MECHATRONICE"
          description="A nationwide competition for the best technical innovations in electronics and mechatronics. This competition is listed on the official Poland's Ministry Of Education list of competitions. Seeable was awarded the 2nd place in the nation-wide range, first having to qualify to the national final by advancing at the school and regional level."
          imageURL="/images/achievements/Olimpiada.jpg"
          place="2nd place"
          range="nation-wide"
        />
        <CardAlternative
          title="E-NNOVATE 2024"
          description="E-NNOVATE INNOVATION SHOW brings together the world's innovators. Our project got awarded the silver medal, among the projects from all over the world - we were competing with the best of the best."
          imageURL="/images/achievements/E-NNOVATE.jpeg"
          place="silver medal"
          range="international"
        />
        <CardAlternative
          title="International Special Award from the Stefan cel Mare University of Suceava, Romania"
          description="Received at the E-NNOVATE 2024 Innovation Show. The award was given for the innovative approach to the problem of navigation for the visually impaired."
          imageURL="/images/achievements/Suceava Romania University.jpeg"
          place="special award"
          range="international"
        />
      </div>
    </div>
  );
}
