import { Experience } from "../../../type";
import { ExperienceItem } from "./ExperienceItem";
import { useState } from "react";

interface ExperienceCardProps {
    data: Experience[];
}

export function ExperienceCard({ data }: ExperienceCardProps) {
    const [showMore, setShowMore] = useState(false);
    
    const handleShowMore = () => {
        setShowMore(!showMore);
    };
    
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300
                      border border-gray-100 dark:border-gray-700">
            {data.slice(0, showMore ? data.length : 2).map((experience) => (
                <ExperienceItem
                    key={experience.title}
                    title={experience.title}
                    it={experience.it}
                    location={experience.location}
                    company={experience.company}
                    date={experience.date}
                    description={experience.description}
                    option={experience.option}
                    language={experience.language}
                />
            ))}
            
            {data.length > 2 && (
                <div className="flex justify-center p-6">
                    <button 
                        onClick={handleShowMore} 
                        className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-50 to-white dark:from-gray-800 dark:to-gray-900
                                 text-blue-600 dark:text-blue-400 font-medium
                                 border border-blue-200 dark:border-blue-800
                                 hover:from-blue-500 hover:to-blue-600 hover:text-white
                                 dark:hover:from-blue-600 dark:hover:to-blue-700
                                 transform transition-all duration-300 ease-in-out
                                 hover:scale-105 hover:shadow-md"
                    >
                        {showMore ? 'Show Less' : 'Show More'}
                    </button>
                </div>
            )}
        </div>
    );
}   