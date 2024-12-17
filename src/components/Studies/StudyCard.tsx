import { Study } from "../../../type";
import { StudyItem } from "./StudyItem";
import studyImage from "/src/public/images/graduation-hat.png";

interface StudyCardProps {
    data: Study[];
}



export function StudyCard({ data }: StudyCardProps) {
    return (
        <div  className="bg-white dark:bg-gray-800 p-6 rounded-xl  shadow-lg hover:shadow-2xl transition-shadow mb-14">
            <div  className="flex gap-3 pl-5 pr-5 mb-4 justify-center">
                
                <img src={studyImage}  alt="study-image" className="w-10 h-10 dark:invert"/>
                <h3 className="text-2xl font-bold dark:text-white ">Studies</h3>
            </div>
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

    