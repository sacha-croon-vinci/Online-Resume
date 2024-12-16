
interface ExperienceItemProps {
    title: string;
    it: boolean;
    location: string;
    company: string;
    date: string;
    description: string;
    option?: string[];
    language: string[];
}


export function ExperienceItem({ title,it, location, company, date, description,option, language}: ExperienceItemProps) {
    return (
        <div className="mb-4">
            <div className="flex justify-between">
                <h4 className="text-2xl font-bold dark:text-white">{title}</h4>
                {it && (
                    <span
                    className="px-3 py-1 bg-yellow-300 dark:bg-yellow-400 rounded-full text-sm select-none
                    dark:text-black transform transition-transform duration-200 hover:scale-110 hover:bg-green-500 dark:hover:bg-red-500 hover:text-white"
                >
                    IT
                </span>
                )}
            </div>
            <div className="text-l text-gray-500 dark:text-gray-400">
                <p>{location}</p>
                <p>Company : {company}</p>
                <p>{date}</p>
                <p >{description}</p>
                {option && (
                    <ul className="list-disc list-inside">
                        {option.map((item) => (
                            <li key={item} className="text-sm text-gray-500 dark:text-gray-400">{item}</li>
                        ))}
                    </ul>
                )}
            </div>
            
            <div className="border-t border-gray-300 dark:border-gray-700 my-8 "></div> {/* Line of separation */}

        </div>
    );
}   