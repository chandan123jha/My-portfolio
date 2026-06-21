import restaurantImage from '../assets/images/restaurant-homepage.svg'
import brewHavenImage from '../assets/images/brew-haven-hero.svg'

export const projects = [
  {
    title: 'Heart Disease Prediction',
    description: 'A Machine Learning web application that predicts the possibility of heart disease using patient health data. The application includes user authentication, responsive UI, prediction results, and is deployed online.',
    stack: ['Python', 'Flask', 'Machine Learning', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/chandan123jha',
    demo: 'https://cardiovascular-disease-prediction-hvjm.onrender.com',
    status: 'Live Project',
    imageLabel: 'ML Health App',
    accent: 'blue',
  },
  {
    title: 'Digital Menu System',
    description: 'A QR-based restaurant menu management system built using React, Node.js, Express.js, and MongoDB. Customers can scan a QR code to view the menu and place orders while administrators can manage menu items and orders.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/chandan123jha',
    status: 'Deployment Coming Soon',
    imageLabel: 'QR Menu Platform',
    accent: 'cyan',
  },
  {
    title: 'Restaurant Website',
    description: 'A modern, fully responsive Restaurant Website built using WordPress, Elementor, and Astra Theme. The site includes an elegant homepage, menu section, gallery, reservation page, contact page, responsive navigation, and premium UI/UX.',
    stack: ['WordPress', 'Elementor', 'Astra', 'Responsive', 'UI/UX'],
    builtWith: 'WordPress',
    demoPlaceholder: true,
    status: 'WordPress Project',
    imageLabel: 'Restaurant Homepage',
    image: restaurantImage,
    accent: 'teal',
  },
  {
    title: 'Brew Haven Coffee',
    description: 'A modern, premium, fully responsive coffee shop website featuring an elegant hero section, interactive menu, gallery, testimonials, contact section, and smooth animations. Built using modern frontend practices with a focus on responsive UI and user experience.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    github: 'https://github.com/chandan123jha/coffee-shop-website',
    demo: 'https://coffee-shop-eight-pied.vercel.app/',
    status: 'Live Project',
    imageLabel: 'Coffee Shop Hero',
    image: brewHavenImage,
    accent: 'amber',
  },
]