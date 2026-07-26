import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/avatar.png"
        alt="4uweb – vývojář webových stránek a SaaS aplikací"
        width={737}
        height={678}
        className="translate-z-0 w-full h-full"
        priority
        sizes="(max-width: 1280px) 0px, 737px"
      />
    </div>
  );
};

export default Avatar;
