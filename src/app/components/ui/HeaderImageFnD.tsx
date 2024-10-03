import Image from "next/image";

export default function HeaderImage() {
  return (
    <header className="flex justify-center w-full px-4">
      <div className="relative h-48 md:h-64 lg:h-80 w-full max-w-2xl -translate-y-6">
        {" "}
        {/* Use responsive heights */}
        <Image
          src="/Food-Drink.jpg"
          alt="PSP"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
    </header>
  );
}
