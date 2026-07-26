import Image from "next/image";

const Avatar = () => {
  return (
    <div className="flex w-full max-w-none pointer-events-none select-none">
      <Image
        src="/avatar.png"
        alt="4uweb – vývojář webových stránek a SaaS aplikací"
        width={737}
        height={678}
        className="translate-z-0 w-full h-auto object-contain"
        priority
        sizes="(max-width: 1280px) 200px, 737px"
      />
    </div>
  );
};

export default Avatar;
