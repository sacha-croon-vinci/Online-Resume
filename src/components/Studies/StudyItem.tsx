interface ItemProps {
    title: string;
    school: string;
    date: string;
    link: string;
    option: string[]|undefined;
}

export function StudyItem({title, school, date, link, option}: ItemProps) {

    return (
        <div className="flex flex-wrap gap-2 pb-6 pt-6 pl-5 pr-5 border-b border-gray-300 dark:border-gray-700">
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold dark:text-white">{title}</h3>
                <p className="text-sm dark:text-gray-300">{school}</p>
                <p className="text-sm dark:text-gray-300">{date}</p>
                <a href={link} target="_blank" rel="noreferrer" className="text-sm dark:text-gray-300 hover:underline">More info</a>
            </div>
            <div className="flex-wrap sm:w-1/2 ">
                {option?.map((item) => (
                    <span
                        key={item}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs select-none
                        dark:text-gray-300 transform transition-transform duration-200 hover:scale-110 hover:bg-green-500 dark:hover:bg-red-500 hover:text-white"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
)}