interface Heading2ClickableProps {
    heading: string;
    href?: string; // Optional href prop
  }
  
  export default function Heading2Clickable({ heading, href }: Heading2ClickableProps) {
    const HeadingTag = href ? 'a' : 'h2'; // Use <a> if href is provided
  
    return (
      <HeadingTag
        className="text-2xl font-bold text-gray-900 mb-4 text-red-700"
        href={href}
        target={href ? "_blank" : undefined}
        rel={href ? "noopener noreferrer" : undefined}
      >
        {heading}
      </HeadingTag>
    );
  }
  