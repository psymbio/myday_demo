import Image from "next/image";

export default function HeaderImageFnD() {
  return (
    <header className="flex justify-center w-full px-4">
      <div className="relative h-48 md:h-64 lg:h-80 w-full max-w-2xl -translate-y-6">
        {" "}
        {/* Use responsive heights */}
        <Image
          src="/Food-Drink.jpg"
          alt="Food and Drink"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
    </header>
  );
}
