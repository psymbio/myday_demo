import Image from "next/image";

export default function HeaderImage() {
  return (
    <header className="flex justify-center w-full px-4">
      <div className="relative h-48 md:h-64 lg:h-80 w-full max-w-2xl -translate-y-2"> {/* Use responsive heights */}
        <Image
          src="/panorama_st_pauls.jpeg"
          alt="PSP"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
    </header>
  );
}
