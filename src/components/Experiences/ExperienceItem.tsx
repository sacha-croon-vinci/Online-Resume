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

export function ExperienceItem({ title, it, location, company, date, description, option, language}: ExperienceItemProps) {
    return (
        <div className="group relative p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                {/* Left section with main info */}
                <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <h4 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 
                                         bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-blue-400 
                                         dark:group-hover:from-blue-400 dark:group-hover:to-blue-200 transition-all duration-300">
                                {title}
                            </h4>
                            {it && (
                                <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 dark:from-yellow-500 dark:to-yellow-600 
                                               rounded-full text-sm font-medium text-gray-900 dark:text-gray-900
                                               transform transition-all duration-300 ease-in-out
                                               hover:scale-105 hover:from-green-500 hover:to-green-600
                                               dark:hover:from-green-600 dark:hover:to-green-700 hover:text-white
                                               shadow-sm hover:shadow-md">
                                    IT
                                </span>
                            )}
                        </div>
                        
                        <div className="flex flex-col gap-1 text-gray-600 dark:text-gray-300">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>{location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <span>{company}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>{date}</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>

                    {/* Skills and Languages section */}
                    <div className="flex flex-col md:flex-row gap-6 mt-6">
                        {option && (
                            <div className="flex flex-wrap gap-2">
                                {option.map((item) => (
                                    <span
                                        key={item}
                                        className="inline-flex items-center justify-center h-8 px-3
                                                 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium
                                                 text-gray-700 dark:text-gray-300 select-none
                                                 transform transition-all duration-300 ease-in-out
                                                 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600
                                                 dark:hover:from-blue-600 dark:hover:to-blue-700 hover:text-white
                                                 shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-600
                                                 hover:border-transparent whitespace-nowrap"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        )}
                        <div className="flex flex-wrap gap-2">
                            {language.map((lang) => (
                                <span
                                    key={lang}
                                    className="inline-flex items-center justify-center h-8 px-3
                                             bg-blue-50 dark:bg-blue-900/30 rounded-full text-sm font-medium
                                             text-blue-700 dark:text-blue-300 select-none
                                             transform transition-all duration-300 ease-in-out
                                             hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600
                                             dark:hover:from-blue-600 dark:hover:to-blue-700 hover:text-white
                                             shadow-sm hover:shadow-md border border-blue-200 dark:border-blue-800
                                             hover:border-transparent whitespace-nowrap"
                                >
                                    {lang}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>
        </div>
    );
}   