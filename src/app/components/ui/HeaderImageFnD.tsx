import Image from "next/image";

export default function HeaderImageFnD() {
  return (
    <header className="w-full">
      <div className="relative w-full" style={{ height: "20rem" }}> {/* Set height using rem */}
        <Image
          src="/Food-Drink.jpg"
          alt="Food_and_drink"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
    </header>
  );
}