import { FaCode, FaDatabase, FaFigma, FaServer, FaTools, FaUsers } from 'react-icons/fa'

export const skills = [
  {
    category: 'Frontend',
    icon: FaCode,
    items: ['React 19', 'JavaScript ES6+', 'HTML5', 'CSS Modules', 'Responsive UI', 'Accessibility'],
  },
  {
    category: 'Backend',
    icon: FaServer,
    items: ['Node.js Basics', 'REST APIs', 'Authentication Flow', 'Form Handling', 'API Integration'],
  },
  {
    category: 'Database',
    icon: FaDatabase,
    items: ['MySQL', 'MongoDB Basics', 'Schema Design', 'Data Validation'],
  },
  {
    category: 'Tools',
    icon: FaTools,
    items: ['Git', 'GitHub', 'VS Code', 'Vite', 'Chrome DevTools', 'Netlify'],
  },
  {
    category: 'Design',
    icon: FaFigma,
    items: ['Wireframes', 'UI Systems', 'Glassmorphism', 'Design Handoff', 'Microinteractions'],
  },
  {
    category: 'Soft Skills',
    icon: FaUsers,
    items: ['Communication', 'Problem Solving', 'Ownership', 'Teamwork', 'Fast Learning'],
  },
]
