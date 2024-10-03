interface Heading2Props {
  heading: string;
}

export default function Heading2({ heading }: Heading2Props) {
  return (
    <h2 className="text-xl font-bold text-gray-900 mb-4 text-black">
      {heading}
    </h2>
  );
}
