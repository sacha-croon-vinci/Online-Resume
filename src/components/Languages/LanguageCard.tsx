import { Languages } from "../../../type"

interface LanguageCardProps {
    data: Languages[];
}

export function LanguageCard({ data }: LanguageCardProps) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300
                      border border-gray-100 dark:border-gray-700 select-none">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                {data.map((item) => (
                    <div
                        key={item.title}
                        className="group flex flex-col items-center p-4 rounded-xl
                                 hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors duration-300"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200
                                     group-hover:text-blue-600 dark:group-hover:text-blue-400
                                     transition-colors duration-300">
                            {item.title}
                        </h2>
                        <span className="mt-2 px-4 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium
                                      text-gray-700 dark:text-gray-300
                                      border border-gray-200 dark:border-gray-600
                                      transition-colors duration-300
                                      group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30
                                      group-hover:text-blue-600 dark:group-hover:text-blue-400
                                      group-hover:border-blue-200 dark:group-hover:border-blue-800">
                            {item.level}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}