import { Code2, Terminal } from 'lucide-react';
import { SiSqlite } from 'react-icons/si';

interface SkillCardProps {
  title: string;
  items: string[];
  icon?: 'code' | 'terminal' | 'database' | undefined;
}

export function SkillCard({ title, items, icon = 'code' }: SkillCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 select-none
                    border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800
                    bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="flex items-center gap-4 mb-6">
        {icon === 'database' ? (
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <SiSqlite className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
        ) : null}
        {icon === 'code' ? (
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
        ) : null}
        {icon === 'terminal' ? (
          <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
            <Terminal className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
        ) : null}
        <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium
                     dark:text-gray-300 transform transition-all duration-300 ease-in-out
                     hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600
                     dark:hover:from-blue-600 dark:hover:to-blue-700 hover:text-white
                     shadow-sm hover:shadow-md cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}