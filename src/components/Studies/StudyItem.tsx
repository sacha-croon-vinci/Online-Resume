interface ItemProps {
    title: string;
    school: string;
    date: string;
    link: string;
    option: string[]|undefined;
}

export function StudyItem({title, school, date, link, option}: ItemProps) {
    return (
        <div className="group relative flex flex-col md:flex-row gap-6 p-6 border-b border-gray-200 dark:border-gray-700 
                        hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300">
            {/* Left section with main info */}
            <div className="flex-1 space-y-3">
                <div className="space-y-1">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 
                                 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-blue-400 
                                 dark:group-hover:from-blue-400 dark:group-hover:to-blue-200 transition-all duration-300">
                        {title}
                    </h3>
                    <p className="text-base text-gray-600 dark:text-gray-300 font-medium">{school}</p>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{date}</span>
                </div>

                <a href={link} 
                   target="_blank" 
                   rel="noreferrer" 
                   className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 
                            dark:hover:text-blue-300 transition-colors duration-200">
                    <span>More info</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>

            {/* Right section with tags */}
            {option && option.length > 0 && (
                <div className="flex flex-wrap gap-2 md:w-1/3 lg:w-1/4">
                    <div className="flex flex-wrap gap-2 w-full">
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
                </div>
            )}
        </div>
    );
}