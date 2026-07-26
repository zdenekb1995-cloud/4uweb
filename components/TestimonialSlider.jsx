import Image from "next/image";
import Link from "next/link";
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
    link: "https://www.nalepkar.cz",
    message:
      "Web je přesně podle představ – rychlý, přehledný a skvěle funguje na mobilu. Spolupráce byla hladká a termíny se dodržely.",
  },
  {
    image: "/t-avt-2.png",
    name: "David",
    position: "Cloudnito.cz",
    link: "https://www.cloudnito.cz",
    message:
      "Cloudnito nám posunulo online prezentaci o úroveň výš. Moderní vzhled, rychlé načítání a jednoduchá správa obsahu.",
  },
  {
    image: "/t-avt-3.png",
    name: "Jana",
    position: "Port-kvetiny.cz",
    link: "https://www.port-kvetiny.cz",
    message:
      "E-shop vypadá skvěle a zákazníci se v něm snadno orientují. Objednávky rostou a správa produktů je intuitivní.",
  },
  {
    image: "/t-avt-1.png",
    name: "Pernickova A.",
    position: "Vesna-Pernickova.cz",
    link: "https://www.vesna-pernickova.cz",
    message:
      "Web přesně vystihuje naši značku. Design je teplý a přívětivý, na mobilu funguje výborně. Výsledek nad očekávání.",
  },
  {
    image: "/t-avt-2.png",
    name: "Jana V.",
    position: "4u Centre Apartments",
    link: "https://www.4ucentreapartments.cz",
    message:
      "Web pro apartmány vypadá profesionálně. Rezervace i prezentace pokojů jsou přehledné. Komunikace byla rychlá.",
  },
  {
    image: "/t-avt-3.png",
    name: "Tomáš H.",
    position: "Cold Air",
    link: "https://www.coldair.cz",
    message:
      "Dostali jsme rychlý web, jasnou strukturu a podporu i po spuštění. Spolupráce byla férová a termíny se dodržely.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-auto min-h-[320px] sm:h-[400px]"
      loop={false}
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-4 sm:px-8 md:px-16 py-4">
            <div className="w-full max-w-[280px] flex flex-col items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={80}
                    height={80}
                    alt={person.name}
                    className="rounded-full"
                  />
                </div>
                <div className="text-lg">{person.name}</div>
                <Link
                  href={person.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[12px] uppercase font-extralight tracking-widest text-accent hover:underline"
                >
                  {person.position}
                </Link>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 mt-4 md:mt-0">
              <div className="mb-3">
                <FaQuoteLeft
                  className="text-3xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-hidden
                />
              </div>
              <div className="text-sm sm:text-base xl:text-lg text-center md:text-left text-white/80">
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
