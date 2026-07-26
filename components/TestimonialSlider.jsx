import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Ondřej",
    position: "Nalepkar.cz",
    message:
      "Web Nalepkar.cz je přesně podle našich představ – rychlý, přehledný a skvěle funguje na mobilu. Spolupráce byla hladká a termíny se dodržely. Doporučuji.",
  },
  {
    image: "/t-avt-2.png",
    name: "David",
    position: "Cloudnito.cz",
    message:
      "Cloudnito.cz nám posunulo online prezentaci o úroveň výš. Moderní vzhled, rychlé načítání a jednoduchá správa obsahu. Profesionální přístup od začátku do konce.",
  },
  {
    image: "/t-avt-3.png",
    name: "Jana",
    position: "Port-kvetiny.cz",
    message:
      "E-shop Port-kvetiny.cz vypadá krásně a zákazníci se v něm snadno orientují. Objednávky rostou a správa produktů je intuitivní. Jsme maximálně spokojení.",
  },
  {
    image: "/t-avt-1.png",
    name: "Pernickova A.",
    position: "Pernickova-vesna.cz",
    message:
      "Web Pernickova-vesna.cz přesně vystihuje naši značku. Design je teplý a přívětivý, na mobilu funguje výborně. Komunikace byla příjemná a výsledek nad očekávání.",
  },
  {
    image: "/t-avt-2.png",
    name: "Jana V.",
    position: "4u Centre Apartments",
    message:
      "Web pro naše apartmány vypadá profesionálně a hosté si ho pochvalují. Rezervace i prezentace pokojů jsou přehledné. Komunikace byla rychlá a výsledek přesně podle našich představ.",
  },
  {
    image: "/t-avt-3.png",
    name: "Tomáš H.",
    position: "Cold Air",
    message:
      "Potřebovali jsme moderní prezentaci firmy a dostali jsme víc – rychlý web, jasnou strukturu a podporu i po spuštění. Spolupráce byla férová a termíny se dodržely.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
      loop={false}
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                  />
                </div>
                <div className="text-lg">{person.name}</div>
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-hidden
                />
              </div>
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
