import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      aboutUs: {
        title: "Who are we?",
        roles: {
          softwareEngineer: "software engineer",
          hardwareEngineer: "hardware engineer",
        },
        team: {
          arturNowak: {
            name: "Artur Nowak",
            description:
              "Overseeing all coding aspects, ensuring the seamless integration of cutting-edge technology with user-friendly features in Seeable, enabling safe and hassle-free navigation for wheelchair users with visual impairments and beyond.",
          },
          jakubMoczol: {
            name: "Jakub Moczoł",
            description:
              "Designing and fabricating the prototype case housing: LiDAR, Raspberry Pi, and other components, ensuring seamless integration, functionality, durability, and aesthetic appeal for the users' optimal experience. Responsible for testing.",
          },
        },
        researchSupervisors: {
          title: "Research supervisors",
          names: ["Marcin Lasak", "Artur Hausman", "Krzysztof Smyczek"],
        },
      },

      achievements: {
        title: "What have we achieved so far?",
        subtitle: "Here are just a few of our achievements 🏆",
        cards: [
          {
            title: "YOUNG E-NNOVATOR PITCH @ E-NNOVATE 2024",
            description:
              "Young E-NNOVATOR Pitch is a contest created to enable the young innovators, inventors and entrepreneurs to present their idea to the industry and get validation, feedback, mentoring and funding.",
            imageURL:
              "/images/achievements/E-NNOVATE Young Innovator Pitch.jpeg",
            place: "1st place",
            range: "international",
          },
          {
            title: "IPITEx 2025",
            description:
              "Bangkok International Intellectual Property, Invention, Innovation and Technology Exposition (IPITEx) is an annual international exhibition in Thailand that showcases inventions and innovations, fostering global collaboration and technological advancement. Seeable was awarded the gold medal in the international range.",
            imageURL: "/images/achievements/IPITEx.jpeg",
            place: "gold medal",
            range: "international",
          },
          {
            title:
              "OLIMPIADA INNOWACJI TECHNICZNYCH W ELEKTRONICE I MECHATRONICE",
            description:
              "A nationwide competition for the best technical innovations in electronics and mechatronics. This competition is listed on the official Poland's Ministry Of Education list of competitions. Seeable was awarded the 2nd place in the nation-wide range, first having to qualify to the national final by advancing at the school and regional level.",
            imageURL: "/images/achievements/Olimpiada.jpg",
            place: "2nd place",
            range: "nation-wide",
          },
          {
            title: "E-NNOVATE 2024",
            description:
              "E-NNOVATE INNOVATION SHOW brings together the world's innovators. Our project got awarded the silver medal, among the projects from all over the world - we were competing with the best of the best.",
            imageURL: "/images/achievements/E-NNOVATE.jpeg",
            place: "silver medal",
            range: "international",
          },
          {
            title:
              "International Special Award from the Stefan cel Mare University of Suceava, Romania",
            description:
              "Received at the E-NNOVATE 2024 Innovation Show. The award was given for the innovative approach to the problem of navigation for the visually impaired.",
            imageURL: "/images/achievements/Suceava Romania University.jpeg",
            place: "special award",
            range: "international",
          },
        ],
      },

      adventages: {
        title: "And it's all...",
        cards: [
          {
            title: "Costless",
            description:
              "No need to modify the building - no additional sensors needed",
          },
          {
            title: "Customizable",
            description: "Everyone creates their own Seeable",
          },
          {
            title: "Accessible",
            description: "Seeable is designed for people with disabilities",
          },
          {
            title: "Affordable",
            description: "No need to buy expensive equipment",
          },
          {
            title: "Discreet",
            description: "As the visually impaired people asked for",
          },
        ],
      },

      cards: [
        {
          videoUrl: "/videos/Seeable_0_mapping.mp4",
          description:
            "Create a comprehensive and precise map of your environment, ensuring you're always aware of what's nearby.",
          title: "Mapping",
          slug: "Your own environment",
          badgeBackground:
            "bg-gradient-to-r from-rose-400 to-pink-400 text-pink-950",
          cardBackground: "bg-rose-100",
          Icon: "IconMap",
        },
        {
          videoUrl: "/videos/Seeable_1_free_mode.mp4",
          description:
            "Explore with ease and confidence! Free mode feels like having a friend by your shoulder who navigates you through the intricacies of everyday's reality.",
          title: "Free mode",
          slug: "Your trusted companion",
          badgeBackground:
            "bg-gradient-to-r from-blue-400 to-cyan-200 text-blue-950",
          cardBackground: "bg-blue-100",
          Icon: "IconShield",
        },
        {
          videoUrl: "/videos/Seeable_2_map_load.mp4",
          description:
            "This system is for visually impaired individuals, so it has to be the most accessible and user-friendly. No need to scan any QR code or type in any address - just open the app and you're good to go!",
          title: "GPS-based map loading",
          slug: "Your intelligent system",
          badgeBackground:
            "bg-gradient-to-r from-green-400 to-emerald-400 text-green-950",
          cardBackground: "bg-green-100",
          Icon: "IconGps",
        },
        {
          videoUrl: "/videos/Seeable_3_navigation.mp4",
          description:
            "Your reliable guide for every journey! Navigation mode provides clear, step-by-step directions, ensuring you reach your destination efficiently and securely.",
          title: "Navigation",
          slug: "Your own navigation",
          badgeBackground:
            "bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-950",
          cardBackground: "bg-yellow-100",
          Icon: "IconNavigation",
        },
        {
          videoUrl: "/videos/Seeable_4_dynamic_path_planning.mp4",
          description:
            "Nothing is set in stone - Seeable adapts to the needs of the environment and your preferences, providing the most efficient route to your destination.",
          title: "Dynamic Path Planning",
          slug: "Your live assistant",
          badgeBackground:
            "bg-gradient-to-r from-red-400 to-rose-400 text-red-950",
          cardBackground: "bg-red-100",
          Icon: "IconRoad",
        },
        {
          videoUrl: "/videos/Seeable_5_get_bearings.mp4",
          description:
            "Quickly understand your surroundings! By moving your phone in a certain direction, Get Bearings mode helps you instantly grasp the layout of your immediate environment.",
          title: "Get Bearings",
          slug: "Your own mind",
          badgeBackground:
            "bg-gradient-to-r from-purple-400 to-violet-400 text-purple-950",
          cardBackground: "bg-purple-100",
          Icon: "IconBrain",
        },
      ],

      footer: {
        madeWithLove: "Made with ❤️ by",
      },
      header: {
        portfolio: {
          goBack: "Go back to",
          checkPortfolio: "Go check my",
        },
        navLinks: {
          features: "Features",
          video: "Video",
          achievements: "Achievements",
          aboutUs: "About Us",
          contact: "Contact",
        },
        getStarted: "Get Started",
      },

      hero: {
        title: "Everybody deserves to see.",
        description:
          "Introducing Seeable - a reliable companion for safe and hassle-free navigation, designed for wheelchair users with visual impairments and beyond! Seeable seamlessly integrates cutting-edge technology with user-friendly features. Seeable's commitment to users feedback (we make sure to communicate a lot with real visually impaired individuals) ensures continual improvement and innovation. Explore the world with confidence - one obstacle at a time, with Seeable by your side!",
        getStarted: "Get started",
        features: [
          {
            title: "Innovative approach",
            description:
              "Seeable is a groundbreaking solution that combines advanced technology with user-friendly features to offer a reliable navigation companion - to ensure a safe and hassle-free travel, enhancing mobility and independence.",
          },
          {
            title: "Designed with (real) users in mind",
            description:
              "Seeable prioritizes the needs and feedback of its users by actively engaging with visually impaired individuals. This commitment to user input drives continual improvement and innovation, ensuring the product evolves to better serve its community.",
          },
          {
            title: "Solution, not product",
            description:
              "We don't aim to make Seeable another fancy gadget, another product to sell. We aim to make it a true solution - a beacon of hope for those who need it the most.",
          },
        ],
      },

      initialAnimation: {
        logo: {
          title: "Seeable",
          subtitle:
            "Navigation and Warning System for Wheelchair Users with Visual Impairments",
          skipButton: "Skip",
        },
        imagineYourself: {
          line1: "Imagine",
          line2: "if you were",
          line3: "blindfolded",
        },
        feelsHard: {
          line1: "It feels hard,",
          line2: "doesn't it?",
        },
      },

      watchVideo: {
        title: "Video says more than",
        highlight: "a thousand words",
        videoUrl:
          "https://www.youtube.com/embed/qrnMIw_VRnE?si=nbrJfwcq7j4f8Rtg",
      },
      contact: {
        title: "Get in Touch",
        sendDirectEmail: "Send Email Directly",
        form: {
          email: "Your Email",
          message: "Your Message",
          send: "Send Message",
          placeholder: "Type your message here...",
          successMessage:
            "Thank you for reaching out! Your message has been sent successfully.",
        },
      },
    },
  },
  pl: {
    translation: {
      aboutUs: {
        title: "Kim jesteśmy?",
        roles: {
          softwareEngineer: "inżynier oprogramowania",
          hardwareEngineer: "inżynier sprzętu",
        },
        team: {
          arturNowak: {
            name: "Artur Nowak",
            description:
              "Czuwa nad całym kodem Seeable, dbając o perfekcyjne połączenie nowoczesnych technologii z intuicyjną obsługą - wszystko po to, by poruszanie się dla osób na wózku z dysfunkcją wzroku (i nie tylko!) było łatwe i bezpieczne.",
          },
          jakubMoczol: {
            name: "Jakub Moczoł",
            description:
              "Projektuje i wykonuje obudowę prototypu zawierającą LiDAR, Raspberry Pi i inne komponenty, dbając o ich integrację, funkcjonalność, trwałość i estetykę. Odpowiada również za testowanie urządzenia.",
          },
        },
        researchSupervisors: {
          title: "Opiekunowie naukowi",
          names: ["Marcin Lasak", "Artur Hausman", "Krzysztof Smyczek"],
        },
      },

      achievements: {
        title: "Co już osiągnęliśmy?",
        subtitle: "Oto tylko niektóre z naszych sukcesów 🏆",
        cards: [
          {
            title: "YOUNG E-NNOVATOR PITCH @ E-NNOVATE 2024",
            description:
              "Young E-NNOVATOR Pitch to konkurs stworzony z myślą o młodych innowatorach, wynalazcach i przedsiębiorcach, umożliwiający im zaprezentowanie swoich pomysłów przed branżą i zdobycie cennego feedbacku, mentoringu oraz finansowania.",
            imageURL:
              "/images/achievements/E-NNOVATE Young Innovator Pitch.jpeg",
            place: "1. miejsce",
            range: "międzynarodowy",
          },
          {
            title: "IPITEx 2025",
            description:
              "IPITEx to coroczna, międzynarodowa wystawa w Tajlandii, promująca wynalazki i innowacje. Seeable zostało nagrodzone złotym medalem w międzynarodowej kategorii.",
            imageURL: "/images/achievements/IPITEx.jpeg",
            place: "złoty medal",
            range: "międzynarodowy",
          },
          {
            title:
              "OLIMPIADA INNOWACJI TECHNICZNYCH W ELEKTRONICE I MECHATRONICE",
            description:
              "Ogólnopolski konkurs na najlepsze innowacje techniczne w dziedzinie elektroniki i mechatroniki, wpisany na oficjalną listę konkursów Ministerstwa Edukacji. Seeable zajęło 2. miejsce w finale krajowym po wcześniejszym przejściu etapów szkolnego i regionalnego.",
            imageURL: "/images/achievements/Olimpiada.jpg",
            place: "2. miejsce",
            range: "ogólnopolski",
          },
          {
            title: "E-NNOVATE 2024",
            description:
              "E-NNOVATE INNOVATION SHOW to wydarzenie łączące innowatorów z całego świata. Nasz projekt zdobył srebrny medal w konkurencji z najlepszymi z najlepszych.",
            imageURL: "/images/achievements/E-NNOVATE.jpeg",
            place: "srebrny medal",
            range: "międzynarodowy",
          },
          {
            title:
              "Międzynarodowa Nagroda Specjalna od Uniwersytetu 'Stefan cel Mare' w Rumunii",
            description:
              "Przyznana podczas E-NNOVATE 2024 za nowatorskie podejście do problemu nawigacji dla osób niewidomych i słabowidzących.",
            imageURL: "/images/achievements/Suceava Romania University.jpeg",
            place: "nagroda specjalna",
            range: "międzynarodowy",
          },
        ],
      },

      adventages: {
        title: "A to wszystko jest...",
        cards: [
          {
            title: "Bezkosztowe",
            description:
              "Nie wymaga ingerencji w budynek - brak potrzeby dodatkowych sensorów",
          },
          {
            title: "Dostosowywane",
            description: "Każdy tworzy swoje własne Seeable",
          },
          {
            title: "Dostępne",
            description:
              "Seeable zostało stworzone z myślą o osobach z niepełnosprawnościami",
          },
          {
            title: "Przystępne cenowo",
            description: "Bez konieczności zakupu drogiego sprzętu",
          },
          {
            title: "Dyskretne",
            description: "Tak, jak prosiły osoby niewidome",
          },
        ],
      },

      cards: [
        {
          videoUrl: "/videos/Seeable_0_mapping.mp4",
          description:
            "Stwórz dokładną i szczegółową mapę otoczenia, aby zawsze wiedzieć, co jest wokół Ciebie.",
          title: "Mapowanie",
          slug: "Twoje własne otoczenie",
          badgeBackground:
            "bg-gradient-to-r from-rose-400 to-pink-400 text-pink-950",
          cardBackground: "bg-rose-100",
          Icon: "IconMap",
        },
        {
          videoUrl: "/videos/Seeable_1_free_mode.mp4",
          description:
            "Odkrywaj świat z pewnością i spokojem! Tryb swobodny to jak wierny towarzysz, który prowadzi Cię przez codzienne wyzwania.",
          title: "Tryb swobodny",
          slug: "Twój zaufany przewodnik",
          badgeBackground:
            "bg-gradient-to-r from-blue-400 to-cyan-200 text-blue-950",
          cardBackground: "bg-blue-100",
          Icon: "IconShield",
        },
        {
          videoUrl: "/videos/Seeable_2_map_load.mp4",
          description:
            "System stworzony dla osób z dysfunkcją wzroku musi być prosty jak nigdy dotąd. Bez kodów QR, bez wpisywania adresu - wystarczy uruchomić aplikację!",
          title: "Ładowanie mapy przez GPS",
          slug: "Twój inteligentny system",
          badgeBackground:
            "bg-gradient-to-r from-green-400 to-emerald-400 text-green-950",
          cardBackground: "bg-green-100",
          Icon: "IconGps",
        },
        {
          videoUrl: "/videos/Seeable_3_navigation.mp4",
          description:
            "Niezawodny przewodnik na każdej trasie! Tryb nawigacji poprowadzi Cię krok po kroku - bezpiecznie i skutecznie.",
          title: "Nawigacja",
          slug: "Twoja własna nawigacja",
          badgeBackground:
            "bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-950",
          cardBackground: "bg-yellow-100",
          Icon: "IconNavigation",
        },
        {
          videoUrl: "/videos/Seeable_4_dynamic_path_planning.mp4",
          description:
            "Nic nie jest stałe - Seeable dopasowuje trasę do warunków otoczenia i Twoich preferencji, aby zapewnić Ci najlepszą drogę do celu.",
          title: "Dynamiczne planowanie trasy",
          slug: "Twój asystent na żywo",
          badgeBackground:
            "bg-gradient-to-r from-red-400 to-rose-400 text-red-950",
          cardBackground: "bg-red-100",
          Icon: "IconRoad",
        },
        {
          videoUrl: "/videos/Seeable_5_get_bearings.mp4",
          description:
            "Szybko zorientuj się w otoczeniu! Ruch telefonu w danym kierunku pozwala w trybie 'Zorientuj się' błyskawicznie poznać układ przestrzeni wokół Ciebie.",
          title: "Zorientuj się",
          slug: "Twój wewnętrzny kompas",
          badgeBackground:
            "bg-gradient-to-r from-purple-400 to-violet-400 text-purple-950",
          cardBackground: "bg-purple-100",
          Icon: "IconBrain",
        },
      ],

      footer: {
        madeWithLove: "Stworzone z ❤️ przez",
      },

      header: {
        portfolio: {
          goBack: "Powrót do",
          checkPortfolio: "Zobacz moje",
        },
        navLinks: {
          features: "Funkcje",
          video: "Wideo",
          achievements: "Osiągnięcia",
          aboutUs: "O nas",
          contact: "Kontakt",
        },
        getStarted: "Rozpocznij",
      },

      hero: {
        title: "Każdy zasługuje, by widzieć.",
        description:
          "Poznaj Seeable - niezawodnego towarzysza bezpiecznej i bezproblemowej nawigacji. Stworzony z myślą o użytkownikach wózków inwalidzkich z dysfunkcją wzroku i nie tylko! Seeable łączy nowoczesną technologię z intuicyjną obsługą, a dzięki stałej współpracy z osobami niewidomymi - ciągle się rozwija. Odkrywaj świat z odwagą - przeszkoda po przeszkodzie, z Seeable u boku!",
        getStarted: "Zacznij już teraz",
        features: [
          {
            title: "Nowatorskie podejście",
            description:
              "Seeable to przełomowe rozwiązanie, które łączy zaawansowaną technologię z prostotą obsługi, by zapewnić komfortową i bezpieczną podróż - zwiększając mobilność i niezależność.",
          },
          {
            title: "Tworzone razem z użytkownikami",
            description:
              "Seeable słucha potrzeb osób niewidomych, angażując je na każdym etapie tworzenia. To ich głos kształtuje nasze decyzje i inspiruje do innowacji.",
          },
          {
            title: "Rozwiązanie, nie produkt",
            description:
              "Nie tworzymy kolejnego gadżetu do sprzedaży. Tworzymy realne rozwiązanie - promyk nadziei dla tych, którzy najbardziej go potrzebują.",
          },
        ],
      },

      initialAnimation: {
        logo: {
          title: "Seeable",
          subtitle:
            "System Nawigacji i Ostrzegania dla Osób na Wózku z Dysfunkcją Wzroku",
          skipButton: "Pomiń",
        },
        imagineYourself: {
          line1: "Wyobraź sobie,",
          line2: "że nie widzisz",
          line3: "nic",
        },
        feelsHard: {
          line1: "To trudne uczucie,",
          line2: "prawda?",
        },
      },

      watchVideo: {
        title: "Wideo wyraża więcej niż",
        highlight: "tysiąc słów",
        videoUrl:
          "https://www.youtube.com/embed/MpXjCVghOMQ?si=PWbmjj5-k44_S3eO",
      },

      contact: {
        title: "Skontaktuj się z nami",
        sendDirectEmail: "Wyślij e-mail bezpośrednio",
        form: {
          email: "Twój e-mail",
          message: "Twoja wiadomość",
          send: "Wyślij wiadomość",
          placeholder: "Napisz swoją wiadomość tutaj...",
          successMessage:
            "Dziękujemy za wiadomość! Skontaktujemy się z Tobą jak najszybciej.",
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
