import Image from "next/image";

export default function HeaderImageFnD() {
  return (
    <header className="flex justify-center w-full px-4">
      <div className="relative h-36  md:h-64 lg:h-80 w-full max-w-2xl -translate-y-4">
        {" "}
        {/* Use responsive heights */}
        <Image
          src="/food_drink.png"
          alt="PSP"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
    </header>
  );
}
