import Image from "next/image";

export default function HeaderImageFnD() {
  return (
    <header className="w-full">
      <div className="relative h-24 md:h-40 lg:h-56 w-screen -translate-y-7">
        {" "}
        {/* Use responsive heights */}
        <Image
          src="/Food-Drink.png"
          alt="Food and Drink"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
    </header>
  );
}
