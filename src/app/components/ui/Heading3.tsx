interface Heading3Props {
  heading: string;
}

export default function Heading3({ heading }: Heading3Props) {
  return (
    <h3 className="text-base sm:text-xl lg:text-2xl font-bold mb-1">
      {heading}
    </h3>
  );
}
