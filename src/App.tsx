import { useTheme } from './hooks/useTheme';
import { ThemeToggle } from './components/Header/ThemeToggle';
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

  const programmingLanguages = ['Python', 'Java', 'TypeScript', 'JavaScript', 'C', 'HTML', 'CSS','SQL'];
  const technologies = ['React', 'Node.js', 'Git', 'Vanilla JS','Tailwind','Bootstrap','Express.js','Junit','Next.js','REST','JWT','Vite','Virtual Machine'];
  const tools = ['VS Code', 'Github', 'Figma', 'Lucidchart','DataGrip','Intelij','PyCharm','VMware'];
  const DataBase = ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite','UML','SQL'];

  const studies = [
    {
      title: 'Bachelor degree in Computer Science',
      school: 'University College Léonard de Vinci (Institut Paul Lambin)',
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
      date: '2016 - 2022',
      link: 'https://college-st-michel.info/wp/',
      option: ['Sciences','Economics','English', 'Dutch'],
    },
  ]
  const experiences = [
    {
      title: 'Junior Developer',
      it: true,
      location: 'Brussels, Belgium',
      company: 'Self-employed',
      date: '2024 - present',
      description: 'As a junior webmaster, I have designed and developed the website for a client. I managed all stages of the project, from initial planning to launch, including graphic design, development, and search engine optimisation. My role also involved ongoing site management, performance analysis, and implementing regular updates to ensure an optimal user experience.',
      option: ['Webmaster', 'SEO', 'Wordpress',],
      language: ['French', 'English'],
    },
    {
      title: 'Junior Teacher',
      it: true,
      location: 'Brussels, Belgium',
      company: 'self-employed',
      date: '2023   - present',
      description: 'I am teaching private lessons in computer science for students. ',
      option: ['Python', 'JavaScript', 'HTML', 'CSS', 'Algorithmic', 'Data structure', 'SQL'],
      language: ['French', 'English'],
    },
    {
      title: 'Student Job',
      it: false,
      location: 'Brussels, Belgium',
      company: 'Delitraiteur WSL',
      date: '2022 - present',
      description: 'I interact with customers face-to-face, over the phone, and via email, providing personalised and attentive service. I manage orders and handle customer complaints with empathy, ensuring their issues are resolved efficiently and satisfactorily. Additionally, I am responsible for inventory management, ensuring that stock is well-organised and up-to-date to meet customer needs.' ,
      option: ['Manage orders', 'Client services', 'cash register', 'inventory management'],
      language: ['French', 'English', 'Dutch'],
    },
    {
      title: 'Sales Assistant',
      it: false,
      location: 'Brussels, Belgium',
      company: 'WE Fashion',
      date: 'OCT 2021 - FEB 2022',
      description: 'As a sales assistant at WE Fashion, I assisted customers by providing personalised advice and addressing their needs. I was also responsible for the layout of the shelves, ensuring that products were displayed in an attractive and organised manner. Additionally, I wore the brand’s clothing to promote it, thereby contributing to increased sales and enhancing the company’s image.',
      option: ['Promote', 'Sale', 'inventory management'],
      language: ['French', 'Dutch'],
    },
    {
      title: 'Rental Agent',
      it: false,
      location: 'Coxyde, Belgium',
      company: 'Rodeo',
      date: 'JUN 2020 - SEPT 2022',
      description: 'During the summer holidays, I was responsible for renting out pedal cars and bicycles, primarily communicating with customers in Dutch. My duties included maintaining the bicycles to ensure they were in good working condition, as well as selling these items. My role required constant interaction with customers to meet their needs and ensure their satisfaction.',
      option: [ 'Sale', 'Client services'],
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
      level: 'Fluent - C1',
      flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png',
    },
    {
      title: 'Dutch',
      level: 'Intermediate - B2',
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
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <ScrollToTopButton />
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <Hero />
        

        <div id='skills' className="border-t border-gray-300 dark:border-gray-700 my-16 pt-8 "></div> 

        <div className='flex justify-center py-1 mb-10 select-none'>
          <h2 className=' dark:text-white px-5 py-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-2xl font-semibold'>Skills</h2>
        </div>
        
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
        
        <div id="studies" className="border-t border-gray-300 dark:border-gray-700 my-8 pt-8 pb-8"></div> 

        <StudyCard data={studies}/>
        
        
        <div id="experiences" className="border-t border-gray-300 dark:border-gray-700 my-8 pt-8 pb-8"></div>

        <ExperienceCard data={experiences} />

        <div id='langages' className="border-t border-gray-300 dark:border-gray-700 my-8 pt-8 pb-8"></div> 

        <div className='flex justify-center   py-1 mb-10 select-none'>
          <h2 className=' dark:text-white px-5 py-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-2xl font-semibold'>Languages</h2>
        </div>

        <LanguageCard data={languages}/>
      </main>
    </div>
  );
}

export default App;