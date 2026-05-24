/* ============================================
   PORTFOLIO DATA
   ============================================ */

export interface Portfolio {
  personal: PersonalInfo;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: Skills;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
  bio: string;
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  gpa: string;
  period: string;
  highlights: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  period: string;
  type: string;
  highlights: string[];
  skills: string[];
  github: string;
  link: string;
}

export interface Skills {
  languages: string[];
  frontend: string[];
  backend: string[];
  ml_ai: string[];
  cloud: string[];
  tools: string[];
}

// Portfolio Data
export const portfolioData: Portfolio = {
  personal: {
    name: 'Amrit Verma',
    title: 'Full Stack Engineer | AI/ML Developer | Chemical Engineering Student',
    email: 'amritishoney@gmail.com',
    phone: '+91-9502510306',
    github: 'https://github.com/amritv0306',
    linkedin: 'https://linkedin.com/in/amritverma',
    location: 'Hyderabad, India',
    bio: 'BTech Chemical Engineering @ NIT Warangal | Building intelligent automation solutions | Passionate about AI/ML, Full Stack Development & Data Pipelines',
  },
  education: [
    {
      school: 'National Institute of Technology, Warangal',
      degree: 'Bachelor of Technology',
      field: 'Chemical Engineering',
      gpa: '7.12',
      period: '2022 - Present',
      highlights: [
        'CGPA: 7.12',
        'Top university in India',
        'Multidisciplinary engineering education',
      ],
    },
    {
      school: 'FIITJEE Jr College, Kukatpally, Hyderabad',
      degree: 'Intermediate',
      field: 'Telangana State Board',
      gpa: '9.45',
      period: '2019 - 2021',
      highlights: [
        'CGPA: 9.45',
        'Strong STEM foundation',
        'Preparation for IIT entrance',
      ],
    },
  ],
  experience: [
    {
      title: 'Python Developer Intern',
      company: 'Innovatecloud Solutions',
      period: 'May 2025 - June 2025',
      location: 'Remote, Bangalore',
      type: 'Internship',
      highlights: [
        'Built a job portal using Python (Flask) and SQLite',
        'Automated employer-job seeker interactions',
        'Managed complete product lifecycle from ideation to deployment',
        'Created user manuals and maintained issue logs',
      ],
      skills: ['Python', 'Flask', 'SQLite', 'REST APIs', 'Full Stack'],
    },
    {
      title: 'Intern, Technical Services',
      company: 'Indian Oil Corporation Limited',
      period: 'May 2024 - June 2024',
      location: 'Mathura, Uttar Pradesh',
      type: 'Internship',
      highlights: [
        'Industrial experience in refinery operations',
        'Exposure to process engineering at a national corporation',
        'Understanding of large-scale industrial systems',
      ],
      skills: ['Process Engineering', 'Industrial Operations', 'Safety'],
    },
  ],
  projects: [
    {
      title: 'Automated Content & Monetization Pipeline',
      description:
        'End-to-end ETL pipeline using Python and GCP with Generative AI integration for content strategy optimization',
      period: 'June 2025',
      type: 'Personal Project - Data Engineering',
      highlights: [
        'Developed ETL pipeline using Python and GCP',
        'Leveraged GenAI to summarize performance trends',
        'Grew viewership to 1000+ in 30 days',
        'Demonstrated end-to-end project ownership',
      ],
      skills: ['Python', 'REST APIs', 'GenAI', 'GCP', 'ETL', 'Data Engineering'],
      github: '',
      link: '',
    },
    {
      title: 'Spam News Detection System',
      description:
        'Machine learning text classification model for fake news detection with 90% accuracy using NLP techniques',
      period: 'September 2024',
      type: 'AI/ML Project - NLP',
      highlights: [
        'Text classification model with 90% accuracy',
        'Robust NLP pipeline using NLTK and spaCy',
        'Certified by IIT Bombay through Intrainz',
      ],
      skills: ['Python', 'NLP', 'Machine Learning', 'NLTK', 'spaCy', 'Scikit-learn'],
      github: '',
      link: '',
    },
  ],
  skills: {
    languages: ['Python', 'TypeScript', 'JavaScript', 'SQL'],
    frontend: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
    backend: ['Flask', 'REST APIs', 'SQLite', 'Data Pipelines'],
    ml_ai: ['Machine Learning', 'NLP', 'Generative AI', 'spaCy', 'NLTK', 'Scikit-learn'],
    cloud: ['Google Cloud Platform', 'ETL Pipelines', 'Data Engineering'],
    tools: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebooks', 'Google Colab'],
  },
};

// GitHub API Configuration
export const GITHUB_API = {
  baseURL: 'https://api.github.com',
  username: 'amritv0306',
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
};

// Animation timing
export const ANIMATION_TIMING = {
  fast: 150,
  normal: 300,
  slow: 600,
};

// Skills by category with colors
export const SKILL_CATEGORIES = [
  {
    name: 'Languages',
    key: 'languages',
    color: '#FF6B6B',
  },
  {
    name: 'Frontend',
    key: 'frontend',
    color: '#4ECDC4',
  },
  {
    name: 'Backend',
    key: 'backend',
    color: '#45B7D1',
  },
  {
    name: 'AI/ML',
    key: 'ml_ai',
    color: '#FFA07A',
  },
  {
    name: 'Cloud',
    key: 'cloud',
    color: '#98D8C8',
  },
  {
    name: 'Tools',
    key: 'tools',
    color: '#F7DC6F',
  },
];
