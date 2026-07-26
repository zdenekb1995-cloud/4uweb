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
          title: "Cleanflow",
          path: "/thumb1.jpg",
          link: "https://www.cleanflow.cz",
        },
        {
          title: "4u Centre Apartments",
          path: "/thumb2.jpg",
          link: "https://www.4ucentreapartments.cz",
        },
        {
          title: "Svatební světy",
          path: "/thumb3.jpg",
          link: "https://www.svatebnisvety.cz",
        },
        {
          title: "Cold Air",
          path: "/thumb4.jpg",
          link: "https://www.coldair.cz",
        },
      ],
    },
    {
      images: [
        {
          title: "Restorax",
          path: "/thumb1.jpg",
          link: "https://www.restorax.cz",
        },
        {
          title: "FlyshopX",
          path: "/thumb2.jpg",
          link: "https://www.flyshopx.cz",
        },
        {
          title: "Nalepkar",
          path: "/thumb3.jpg",
          link: "https://www.nalepkar.cz",
        },
        {
          title: "Cloudnito",
          path: "/thumb4.jpg",
          link: "https://www.cloudnito.cz",
        },
      ],
    },
    {
      images: [
        {
          title: "Port květiny",
          path: "/thumb1.jpg",
          link: "https://www.port-kvetiny.cz",
        },
        {
          title: "Perníčkova Vesna",
          path: "/thumb2.jpg",
          link: "https://www.pernickova-vesna.cz",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
      loop={false}
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div
            className={`grid gap-4 h-full ${
              slide.images.length === 2
                ? "grid-cols-2 grid-rows-1"
                : "grid-cols-2 grid-rows-2"
            }`}
          >
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 50vw, 400px"
                    loading="lazy"
                  />

                  {/* název projektu vždy viditelný */}
                  <div className="absolute top-3 left-3 z-10 bg-black/55 backdrop-blur-sm px-3 py-1 rounded text-xs tracking-wide font-medium">
                    {image.title}
                  </div>

                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                    aria-hidden
                  />

                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 z-10">
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                    >
                      <div className="delay-100">{image.title}</div>
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        ŽIVĚ
                      </div>
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                        <BsArrowRight aria-hidden />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
