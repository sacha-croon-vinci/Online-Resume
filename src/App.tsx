import { useTheme } from './hooks/useTheme';
import { ThemeToggle } from './components/Header/ThemeToggle';
import { Hero } from './components/Hero';
import { SkillCard } from './components/SkillCard';
import { InteractiveWidget } from './components/InteractiveWidget';
import { StudyCard } from './components/Studies/StudyCard';

function App() {
  const { theme, toggleTheme } = useTheme();

  const programmingLanguages = ['Python', 'Java', 'TypeScript', 'JavaScript', 'C', 'HTML', 'CSS','SQL'];
  const technologies = ['React', 'Node.js', 'Git', 'Vanilla JS','Tailwind','Bootstrap','Express.js','Junit','Next.js','REST','JWT','Vite'];
  const tools = ['VS Code', 'Github', 'Figma', 'Lucidchart','DataGrip','Intelij','PyCharm'];
  const DataBase = ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite','UML','SQL'];

  const studies = [
    {
      title: 'Bachelor degree in Computer Science',
      school: 'Davinci School (Institut Paul Lambin)',
      date: '2023 - present',
      link: 'https://www.vinci.be/en/',
      option: ['Software development','Cybersecurity'],
    },
    {
      title: 'Bachelor degree in Computer Science',
      school: 'ULB (Université Libre de Bruxelles)',
      date: '2022 - 2023',
      link: 'https://www.ulb.be/',
      option: ['Astrophysics'],

    },
    {
      title: 'CESS (High School Diploma)',
      school: 'Collège Saint-Michel (Etterbeek)',
      date: '2021 - 2022',
      link: 'https://college-st-michel.info/wp/',
      option: ['Sciences','economics','English', 'Dutch'],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      
      <main className="container mx-auto px-4 py-16">
        <Hero />

        <div className="grid md:grid-cols-2 gap-8 mb-16 ">
          <SkillCard 
            title="Programming Languages" 
            items={programmingLanguages}
            icon="code"
          />
          <SkillCard 
            title="Technologies" 
            items={technologies}
            icon="terminal"
          />
          <SkillCard 
            title="Tools" 
            items={tools}
            
          />
          <SkillCard 
            title="DataBase" 
            items={DataBase}
            icon='database'
            
          />
        </div>
        
        <div className="border-t border-gray-300 dark:border-gray-700 my-8"></div> {/* Line of separation */}

        <StudyCard data={studies}
        
        />
        <div className=''></div>
        
        <div className="border-t border-gray-300 dark:border-gray-700 my-8"></div> {/* Line of separation */}

        <InteractiveWidget />
      </main>
    </div>
  );
}

export default App;