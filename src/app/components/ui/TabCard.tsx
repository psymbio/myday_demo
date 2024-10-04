interface TabCardProps {
  title: string;
  content: string;
  buttonText?: string; // Optional button text
  buttonLink?: string; // Optional button link
}

export default function TabCard({
  title,
  content,
  buttonText,
  buttonLink,
}: TabCardProps) {
  return (
    <div className="mt-4 p-4 border rounded-lg shadow bg-white h-[12rem] overflow-scroll">
      <h3 className="text-lg font-medium">{title}</h3>
      <p>{content}</p>
      <br />
      {buttonText &&
        buttonLink && ( // Render button if both props are provided
          <a
            className={`bg-red-600 hover:brightness-110 text-white rounded-md px-5 py-2.5 text-sm font-medium shadow mt-4`}
            href={buttonLink}
          >
            {buttonText}
          </a>
        )}
    </div>
  );
}
