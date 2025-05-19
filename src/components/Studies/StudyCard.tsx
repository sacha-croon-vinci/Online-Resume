import { Study } from "../../../type";
import { StudyItem } from "./StudyItem";


interface StudyCardProps {
    data: Study[];
}



export function StudyCard({ data }: StudyCardProps) {
    return (
        <div  className="bg-white dark:bg-gray-800 p-6 rounded-xl  shadow-lg hover:shadow-2xl transition-shadow mb-14">
            
            {data.map((study) => (
                <StudyItem
                    key={study.title}
                    title={study.title}
                    school={study.school}
                    date={study.date}
                    link={study.link}
                    option={study.option}
                />
            ))}
            
            
            
        </div>

    );
    }

    