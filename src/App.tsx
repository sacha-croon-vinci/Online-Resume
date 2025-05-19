import { useTheme } from './hooks/useTheme';
import { Hero } from './components/Hero';
import { SkillCard } from './components/SkillCard';
import { StudyCard } from './components/Studies/StudyCard';
import { ExperienceCard } from './components/Experiences/ExperienceCard';
import ScrollToTopButton from './components/Scroll/ScrollToTopButton';
import { Navbar } from './components/Navbar/Navbar';
import { LanguageCard } from './components/Languages/LanguageCard';
import { Analytics } from "@vercel/analytics/react"

function App() {
  const { theme, toggleTheme } = useTheme();

  const programmingLanguages = ['Python', 'Java', 'TypeScript', 'JavaScript', 'C','Dart', 'HTML', 'CSS','SQL'];
  const technologies = ['React', 'Node.js', 'Git', 'Vanilla JS','Tailwind','Bootstrap','Express.js','Junit','Next.js','REST','JWT','Vite','Virtual Machine'];
  const tools = ['VS Code', 'Github','Gitlab', 'Figma', 'Lucidchart','DataGrip','Intelij','PyCharm','VMware','Docker','Azure','Linux','Make','CI/CD'];
  const DataBase = ['MongoDB', 'MySQL', 'PostgreSQL','Supabase', 'SQLite','UML','SQL'];

  const studies = [
    {
      title: 'Bachelor degree in Computer Science',
      school: 'University College Léonard de Vinci (Institut Paul Lambin)',
      date: '2023 - present',
      link: 'https://www.vinci.be/en/',
      option: ['Software development','Cybersecurity'],
    },
    {
      title: 'CESS (High School Diploma)',
      school: 'Collège Saint-Michel (Etterbeek)',
      date: '2016 - 2022',
      link: 'https://college-st-michel.info/wp/',
      option: ['Sciences','Economics','English', 'Dutch'],
    },
  ]
  const experiences = [
    {
      title: 'Junior Software Engineer',
      it: true,
      location: 'Brussels, Belgium',
      company: 'Self-employed',
      date: '2024 - present',
      description: 'As a junior Software Engineer, I have designed and developed a website for a client. I managed all stages of the project, from initial planning to launch, including graphic design, development, and search engine optimization. My role also involved ongoing site management, performance analysis, and implementing regular updates to ensure an optimal user experience.',
      option: ['Webmaster', 'SEO'],
      language: ['French', 'English'],
    },
    {
      title: 'Internship',
      it: true,
      location: 'Brussels, Belgium',
      company: 'Federal Public Service Finance',
      date: 'FEB 2025',
      description: 'Assisted in managing identity and access protocols across 500+ applications for 20,000+ federal employees. ' +
        'Analyzed account creation and access workflows. ' +
        'Learned about data protection systems and protocols safeguarding Belgian citizens and public digital infrastructure.',
      option: ['IT Infrastructure', 'Identity and Access Management', 'Data Protection'],
      language: ['French', 'English', 'Dutch'],
    },
    {
      title: 'Junior Teacher',
      it: true,
      location: 'Brussels, Belgium',
      company: 'Self-employed',
      date: '2023 - present',
      description: 'I am a dedicated instructor providing comprehensive private computer science lessons to non CS students, with particular focus on programming techniques and essential algorithmic principles to build strong foundational skills.',
      option: ['Python', 'JavaScript', 'Algorithms', 'Data Structures', 'SQL'],
      language: ['French', 'English'],
    },
    {
      title: 'Student Job',
      it: false,
      location: 'Brussels, Belgium',
      company: 'Delitraiteur WSL',
      date: '2022 - present',
      description: 'I interact with customers face-to-face, over the phone, and via email, providing personalized and attentive service. I manage orders and handle customer complaints with empathy, ensuring their issues are resolved efficiently and satisfactorily. Additionally, I am responsible for inventory management, ensuring that stock is well-organized and up-to-date to meet customer needs.',
      option: ['Order Management', 'Customer Service', 'Cash Register', 'Inventory Management'],
      language: ['French', 'English', 'Dutch'],
    },
    {
      title: 'Sales Assistant',
      it: false,
      location: 'Brussels, Belgium',
      company: 'WE Fashion',
      date: 'OCT 2021 - FEB 2022',
      description: 'As a sales assistant at WE Fashion, I assisted customers by providing personalized advice and addressing their needs. I was also responsible for the layout of the shelves, ensuring that products were displayed in an attractive and organized manner. Additionally, I wore the brand\'s clothing to promote it, thereby contributing to increased sales and enhancing the company\'s image.',
      option: ['Promotion', 'Sales', 'Inventory Management'],
      language: ['French', 'Dutch'],
    },
    {
      title: 'Rental Agent',
      it: false,
      location: 'Coxyde, Belgium',
      company: 'Rodeo',
      date: 'JUN 2020 - SEPT 2022',
      description: 'During the summer holidays, I was responsible for renting out pedal cars and bicycles, primarily communicating with customers in Dutch. My duties included maintaining the bicycles to ensure they were in good working condition, as well as selling these items. My role required constant interaction with customers to meet their needs and ensure their satisfaction.',
      option: ['Sales', 'Customer Service'],
      language: ['Dutch', 'English'],
    },
  ]

  const languages = [
    {
      title: 'French',
      level: 'Native',
      flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1920px-Flag_of_France.svg.png',
    },
    {
      title: 'English',
      level: 'Fluent',
      flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png',
    },
    {
      title: 'Dutch',
      level: 'Professional - C1',
      flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1920px-Flag_of_the_Netherlands.svg.png',
    },
    {
      title: 'Swedish',
      level: 'Beginner',
      flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1920px-Flag_of_Sweden.svg.png',
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Analytics />
      <ScrollToTopButton />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="container mx-auto px-4 py-16">
        <Hero />
        

        <div id='skills' className="relative my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <h2 className="relative dark:text-white px-8 py-3 rounded-full bg-gradient-to-r from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 
                           shadow-lg text-2xl font-bold tracking-wide
                           border border-gray-100 dark:border-gray-700
                           before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-blue-500/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
                           after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-r after:from-transparent after:to-blue-500/10 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300">
              Skills
            </h2>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
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
        
        <div id="studies" className="relative my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <h2 className="relative dark:text-white px-8 py-3 rounded-full bg-gradient-to-r from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 
                           shadow-lg text-2xl font-bold tracking-wide
                           border border-gray-100 dark:border-gray-700
                           before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-blue-500/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
                           after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-r after:from-transparent after:to-blue-500/10 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300">
              Studies
            </h2>
          </div>
        </div>

        <StudyCard data={studies}/>
        
        <div id="experiences" className="relative my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <h2 className="relative dark:text-white px-8 py-3 rounded-full bg-gradient-to-r from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 
                           shadow-lg text-2xl font-bold tracking-wide
                           border border-gray-100 dark:border-gray-700
                           before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-blue-500/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
                           after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-r after:from-transparent after:to-blue-500/10 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300">
              Experiences
            </h2>
          </div>
        </div>

        <ExperienceCard data={experiences} />

        <div id='langages' className="relative my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <h2 className="relative dark:text-white px-8 py-3 rounded-full bg-gradient-to-r from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 
                           shadow-lg text-2xl font-bold tracking-wide
                           border border-gray-100 dark:border-gray-700
                           before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-blue-500/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
                           after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-r after:from-transparent after:to-blue-500/10 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300">
              Languages
            </h2>
          </div>
        </div>

        <LanguageCard data={languages}/>
      </main>
    </div>
  );
}

export default App;