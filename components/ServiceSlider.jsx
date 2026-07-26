import {
  RxDesktop,
  RxRocket,
  RxPencil2,
  RxReader,
  RxLayers,
  RxComponent1,
  RxGlobe,
  RxArrowTopRight,
} from "react-icons/rx";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxDesktop,
    title: "Webové stránky",
    description:
      "Moderní a rychlé weby na míru – od firemní prezentace po e-shop. Responzivní design, přehledná správa a optimalizace pro vyhledávače.",
  },
  {
    Icon: RxRocket,
    title: "SaaS aplikace",
    description:
      "Komplexní webové aplikace a automatizace pro vaše podnikání. Od návrhu přes vývoj až po nasazení a dlouhodobou podporu.",
  },
  {
    Icon: RxComponent1,
    title: "Ubytovací systémy",
    description:
      "Systémy pro apartmány, hotely a Airbnb – rezervace, správa hostů, propojení s Bookingem a automatizace úklidů.",
  },
  {
    Icon: RxLayers,
    title: "E-shopy",
    description:
      "E-shopy na míru s jednoduchou správou produktů, platebními branami a optimalizací pro prodej a SEO.",
  },
  {
    Icon: RxGlobe,
    title: "Restaurační systémy",
    description:
      "Systémy pro restaurace a gastro – objednávky, jídelní lístky, rezervace stolů a propojení s rozvozem.",
  },
  {
    Icon: RxPencil2,
    title: "Design",
    description:
      "UI/UX návrh rozhraní, které je přehledné a příjemné na používání. Od wireframů po finální vizuál webu nebo aplikace.",
  },
  {
    Icon: RxReader,
    title: "Konzultace",
    description:
      "Pomohu zvolit správnou technologii, navrhnout architekturu a naplánovat digitální řešení, které dává smysl vašemu byznysu.",
  },
  {
    Icon: RxRocket,
    title: "SEO",
    description:
      "Technická i obsahová optimalizace pro vyhledávače. Lepší viditelnost, více organické návštěvnosti a měřitelné výsledky.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[300px] sm:h-[360px]"
      loop={false}
      watchOverflow
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-full min-h-[280px] rounded-lg px-6 py-8 flex flex-col group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>
            <div className="mb-6 flex-1">
              <div className="mb-2 text-lg font-medium">{item.title}</div>
              <p className="max-w-[350px] leading-normal text-white/60 text-sm">
                {item.description}
              </p>
            </div>
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
