import { Code2, Terminal } from 'lucide-react';

interface SkillCardProps {
  title: string;
  items: string[];
  icon?: 'code' | 'terminal' | undefined;
}

export function SkillCard({ title, items, icon = 'code' }: SkillCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        {icon === 'code' ? (
          <Code2 className="w-6 h-6 text-blue-500" />
        ) : (
          <Terminal className="w-6 h-6 text-green-500" />
        )}
        <h3 className="text-xl font-bold dark:text-white ">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm
                     dark:text-gray-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}