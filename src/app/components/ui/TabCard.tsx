interface TabCardProps {
    title: string;
    content: string;
  }
  
  export default function TabCard({ title, content }: TabCardProps) {
    return (
      <div className="mt-4 p-4 border rounded-lg shadow">
        <h3 className="text-lg font-medium">{title}</h3>
        <p>{content}</p>
      </div>
    );
  }
  