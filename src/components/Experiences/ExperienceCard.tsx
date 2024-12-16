import { Experience } from "../../../type";
import { ExperienceItem } from "./ExperienceItem";
import { useState } from "react";

interface ExperienceCardProps {
    data : Experience[];
}

export function ExperienceCard({ data }: ExperienceCardProps) {
    
    const [showMore, setShowMore] = useState(false);
    
    const handleShowMore = () => {
        setShowMore(!showMore);
    };
    
    return (
        <div className="bg-white dark:bg-gray-800 p-6 mb-16 rounded-xl  shadow-lg hover:shadow-2xl transition-shadow">
            <div className="flex gap-3 pl-5 pr-5 mb-4 justify-center">
                <img src="/src/public/images/briefcase.png"  alt="study image" className="w-10 h-10"/>
                <h3 className="text-2xl font-bold dark:text-white ">Experiences</h3>
            </div>
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
            <div className="flex justify-center">
                <button onClick={handleShowMore} className="mt-4 text-blue-500 hover:text-blue-600">
                    {showMore ? 'Show Less' : 'Show More'}
                </button>
            </div>
            
            
            
            
        </div>

    );
    }   