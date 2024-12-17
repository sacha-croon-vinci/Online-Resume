
import { Languages } from "../../../type"
import { useState , useRef} from "react";   

interface LanguageCardProps {
    data: Languages[];
}

export function LanguageCard({ data }: LanguageCardProps) {

    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseOver = (title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredItem(title);
  };

  const handleMouseOut = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 1000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-5 mb-20 rounded-xl shadow-lg hover:shadow-2xl transition-shadow select-none">
        <div className="flex flex-wrap items-center justify-between  text-gray-800 dark:text-white">
            {data.map((item) => (
          <div
            className="relative gap-5 mb-8 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
            key={item.title}
            
          >
            <div className="flex flex-col items-center" 
            onMouseOver={() => handleMouseOver(item.title)}
            onMouseOut={handleMouseOut}>
                <h2 className="font-semibold text-xl ">{item.title}</h2>
                <span className="px-3 py-1 mt-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm
                        dark:text-gray-300">{item.level}</span>
                
                {hoveredItem === item.title && (
                
                <img
                    src={item.flagUrl}
                    alt={item.title}
                    className="absolute mt-16 w-10 h-10 rounded-lg shadow-lg"
                />
              
            )}
            </div>
          </div>
        ))}
        </div>
    </div>
  );
}