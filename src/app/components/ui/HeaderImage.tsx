import Image from "next/image";

export default function HeaderImage() {
  return (
    <header className="w-full">
      <div className="relative w-full" style={{ height: "20rem" }}> {/* Set height using rem */}
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
