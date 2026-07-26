import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "CleanFlow",
          desc: "SaaS pro Airbnb a Booking",
          path: "/project-cleanflow.webp",
          link: "https://www.cleanflow.cz",
        },
        {
          title: "4u Centre Apartments",
          desc: "Apartmány Olomouc",
          path: "/project-4uapartments.webp",
          link: "https://www.4ucentreapartments.cz",
        },
        {
          title: "Svatební světy",
          desc: "Tematické svatební weby",
          path: "/project-svatebni.webp",
          link: "https://www.svatebnisvety.cz",
        },
        {
          title: "Cold Air",
          desc: "Průmyslové chlazení",
          path: "/project-coldair.webp",
          link: "https://www.coldair.cz",
        },
      ],
    },
    {
      images: [
        {
          title: "Restora X",
          desc: "Web a rozvoz pro restaurace",
          path: "/project-restorax.webp",
          link: "https://www.restorax.cz",
        },
        {
          title: "FlyshopX",
          desc: "E-shop na míru",
          path: "/project-flyshopx.webp",
          link: "https://www.flyshopx.cz",
        },
        {
          title: "Nalepkař",
          desc: "Grafická dílna Brno",
          path: "/project-nalepkar.webp",
          link: "https://www.nalepkar.cz",
        },
        {
          title: "CloudniTo",
          desc: "Cloudové úložiště",
          path: "/project-cloudnito.webp",
          link: "https://www.cloudnito.cz",
        },
      ],
    },
    {
      images: [
        {
          title: "Poradna Vesna",
          desc: "Přírodní poradenství",
          path: "/project-vesna.webp",
          link: "https://www.vesna-pernickova.cz",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[260px] sm:h-[400px] xl:h-[480px]"
      loop={false}
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div
            className={`grid gap-3 sm:gap-4 h-full ${
              slide.images.length === 1
                ? "grid-cols-1 max-w-md mx-auto"
                : "grid-cols-2 grid-rows-2"
            }`}
          >
            {slide.images.map((image, imageI) => (
              <Link
                href={image.link}
                target="_blank"
                rel="noreferrer noopener"
                className="relative rounded-lg overflow-hidden flex items-center justify-center group bg-black/20"
                key={imageI}
              >
                <div className="relative overflow-hidden w-full h-full">
                  <Image
                    src={image.path}
                    alt={`${image.title} – ${image.desc}`}
                    width={500}
                    height={400}
                    className="object-cover object-top w-full h-full transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 400px"
                    loading="lazy"
                  />

                  <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-2 sm:p-3 pt-8">
                    <div className="text-[11px] sm:text-sm font-semibold leading-tight">
                      {image.title}
                    </div>
                    <div className="text-[10px] sm:text-xs text-white/70 mt-0.5">
                      {image.desc}
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    aria-hidden
                  >
                    <span className="flex items-center gap-2 text-xs tracking-widest bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      ŽIVĚ <BsArrowRight />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
