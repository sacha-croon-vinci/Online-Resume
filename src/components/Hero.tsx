import { Github, Linkedin, Mail } from 'lucide-react';
import profile from '../public/images/profile.jpg';

export function Hero() {
  
  return (
    <div className="text-center mb-16">
      <img
        src={profile}
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500 hover:shadow-lg transition-shadow "
        
      />
      <h1 className="text-4xl font-bold mb-2 dark:text-white">Sacha Croon</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
        Passionate about building innovative solutions and learning new technologies.
        Currently focusing on web development and software engineering as a computer sciences student.
        Looking to pursue a master's degree in cybersecurity.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="https://github.com/sacha-croon-vinci"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 
                   dark:hover:bg-gray-700 transition-colors"
        >
          <Github className="w-6 h-6 dark:text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/sacha-croon-a73341259/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 
                   dark:hover:bg-gray-700 transition-colors"
        >
          <Linkedin className="w-6 h-6 dark:text-white" />
        </a>
        <a
          href="mailto:sacha.croon@student.vinci.be"
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 
                   dark:hover:bg-gray-700 transition-colors"
        >
          <Mail className="w-6 h-6 dark:text-white" />
        </a>
      </div>
    </div>
  );
}