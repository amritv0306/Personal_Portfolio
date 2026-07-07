/* ============================================
   PORTFOLIO DATA
   ============================================ */

export interface Portfolio {
  personal: PersonalInfo;
  experience: Experience[];
  conferences: Conference[];
  projects: Project[];
  certifications: Certification[];
  skills: Skills;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  bio: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  skills: string[];
  /** Logo image in public/logos/ (falls back to monogram if missing) */
  logo: string;
  monogram: string;
}

export interface Conference {
  name: string;
  organizer: string;
  period: string;
  location: string;
  highlights: string[];
  logo: string;
  monogram: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  period: string;
  type: string;
  highlights: string[];
  skills: string[];
  github: string;
  link: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  tagline: string;
  period: string;
  type: string;
  overview: string[];
  features: string[];
  howItWorks: string[];
  skills: string[];
  github: string;
  demo: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  file: string;
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
    title: 'AI Engineer',
    email: 'amritishoney@gmail.com',
    github: 'https://github.com/amritv0306',
    linkedin: 'https://linkedin.com/in/amrit-v306',
    location: 'Bengaluru, India',
    bio: 'AI Engineer · B.Tech from NIT Warangal · Building AI-driven solutions for real-world industry problems',
  },
  experience: [
    {
      title: 'AI Implementation Engineer',
      company: 'UptimeAI Inc.',
      period: 'Jun 2026 - Present',
      location: 'Bengaluru, Karnataka, India',
      type: 'Full-time',
      highlights: [
        'Deploying and configuring AI-driven predictive maintenance and operational intelligence solutions for heavy industries such as power, oil & gas, and manufacturing',
        'Supporting model setup, sensor data validation, and onboarding of plant data',
        'Helping deliver accurate fault diagnosis and prescriptive insights for operations teams',
      ],
      skills: ['Machine Learning', 'Prompt Engineering', 'Data Validation', 'Predictive Maintenance'],
      logo: 'uptimeai.png',
      monogram: 'UA',
    },
    {
      title: 'AI Implementation Engineer — Intern',
      company: 'UptimeAI Inc.',
      period: 'Mar 2026 - Jun 2026',
      location: 'Bengaluru, Karnataka, India',
      type: 'Internship',
      highlights: [
        'Contributed to the deployment and configuration of AI-driven predictive maintenance solutions',
        'Worked on model setup, sensor data validation, and onboarding plant data',
        'Supported fault diagnosis and prescriptive insights for operations teams',
      ],
      skills: ['Machine Learning', 'Prompt Engineering', 'Sensor Data', 'AI Solutions'],
      logo: 'uptimeai.png',
      monogram: 'UA',
    },
    {
      title: 'Campus Delegate',
      company: 'WeMakeScholars',
      period: 'Dec 2025 - Feb 2026',
      location: 'Remote',
      type: 'Internship',
      highlights: [
        'Represented WeMakeScholars — the world\'s largest scholarship discovery platform (25,000+ scholarships), funded & supported by the Ministry of IT, Govt. of India under the Digital India campaign',
        'Responsible for spreading awareness about the HEST 2025 test on campus',
      ],
      skills: ['Team Leadership', 'Agile Project Management'],
      logo: 'wemakescholars.png',
      monogram: 'WS',
    },
    {
      title: 'Executive',
      company: 'Robotics Club, NIT Warangal',
      period: 'Feb 2023 - Jan 2025',
      location: 'Warangal, India',
      type: 'Full-time',
      highlights: [
        'Actively contributed to robotics projects, developing skills in both hardware and software integration',
        'Collaborated with team members to design, build, and program robots for club activities and competitions',
      ],
      skills: ['ROS2', 'Git', 'OpenCV', 'Robotics', 'Embedded Systems'],
      logo: 'robotics-club.png',
      monogram: 'RC',
    },
    {
      title: 'Internship Trainee',
      company: 'Indian Oil Corporation Limited (IOCL)',
      period: 'May 2024 - Jun 2024',
      location: 'Mathura, Uttar Pradesh, India',
      type: 'Internship',
      highlights: [
        'Gained knowledge about unit processes including AVU, VBU, FCCU and CCRU units used in manufacturing different petroleum products from raw crude oil',
        'Hands-on exposure to large-scale industrial operations at a leading national corporation',
      ],
      skills: ['Mass & Energy Balance', 'Process Flow Diagram (PFD)', 'Industrial Operations'],
      logo: 'iocl.png',
      monogram: 'IO',
    },
    {
      title: 'Lead Member',
      company: 'e-Yantra, IIT Bombay',
      period: 'Sep 2023 - Dec 2023',
      location: 'Mumbai, India · Remote',
      type: 'Part-time',
      highlights: [
        'Led a team of 4 in the national eYRC robotics competition on the "Cosmo Logistic" theme',
        'Built an autonomous warehouse logistics simulation using OpenCV with ROS2 in Gazebo',
        'Worked with Nav2, SLAM, MoveIt, AMCL & EKF for navigation and localization',
      ],
      skills: ['ROS2', 'Computer Vision', 'OpenCV', 'Nav2', 'SLAM', 'MoveIt'],
      logo: 'eyantra.png',
      monogram: 'eY',
    },
  ],
  conferences: [
    {
      name: 'HPAIR Asia Conference 2025 (ACONF\'25)',
      organizer: 'Harvard Project for Asian and International Relations',
      period: 'August 2025',
      location: 'The University of Tokyo, Japan',
      highlights: [
        'Secured a delegate position at the HPAIR 2025 Asia Conference to analyze the role of emerging technologies and AI in shaping international development and policy',
        'Recognized for leadership potential and a keen interest in applying technology to solve global-scale challenges',
        'Selected for a second time at the HPAIR conference — HCONF\'26, Boston, Massachusetts, USA',
      ],
      logo: 'hpair.png',
      monogram: 'HP',
    },
    {
      name: 'Research and Innovation Symposium in Computing (RISC) 2025',
      organizer: 'Department of Computer Science, IIT Bombay',
      period: 'March 2025',
      location: 'IIT Bombay, Mumbai, India',
      highlights: [
        'Selected to attend a prestigious national symposium focused on advanced computing research',
        'Interacted with leading researchers including Varsha Apte (HoD, CSE IIT Bombay), Vrunda Dave (Intel), and Nagarajan Natarajan (Microsoft Research)',
        'Participated in panel discussions and student research presentations, including topics like "Planar Graphs in Real Life — The Problem of Land Records"',
      ],
      logo: 'iitb.png',
      monogram: 'IB',
    },
  ],
  projects: [
    {
      id: 'content-pipeline',
      title: 'Automated Content & Monetization Pipeline',
      description:
        'End-to-end ETL pipeline using Python and GCP with Generative AI integration for content strategy optimization. Automates data ingestion from REST APIs and turns raw performance data into actionable, AI-generated insights',
      period: 'June 2025',
      type: 'Data Engineering · GenAI',
      highlights: [
        'Developed ETL pipeline using Python and GCP',
        'Leveraged GenAI to summarize performance trends',
        'Grew viewership to 1000+ in 30 days',
      ],
      skills: ['Python', 'REST APIs', 'GenAI', 'GCP', 'ETL', 'Data Engineering'],
      github: 'https://github.com/amritv0306/Automate-Youtube',
      link: '',
    },
    {
      id: 'invisible-magic',
      title: 'Invisible Magic',
      description:
        'Real-time "invisible cloak" effect built with OpenCV — detects a target colour in the webcam feed and seamlessly replaces it with a background image',
      period: '2024',
      type: 'Computer Vision Project',
      highlights: [
        'Real-time colour detection using HSV colour space',
        'Precise area selection using contour detection',
        'Dynamic background replacement with configurable colour ranges',
      ],
      skills: ['Python', 'OpenCV', 'NumPy', 'Computer Vision', 'Image Processing'],
      github: 'https://github.com/amritv0306/Invisible-Magic',
      link: '',
    },
  ],
  certifications: [
    { name: 'Campus Delegate Internship — HEST Campaign', issuer: 'WeMakeScholars', date: 'Feb 2026', file: '15_wemakescholars_internship.pdf' },
    { name: 'HPAIR Asia Conference 2025 — Certificate of Completion', issuer: 'Harvard College Project for Asian and International Relations', date: 'Aug 2025', file: '14_hpair.pdf' },
    { name: '500 Difficulty Rating — Practice Problems', issuer: 'CodeChef', date: 'Jun 2025', file: '13_codechef.pdf' },
    { name: 'Gen AI Academy — Completion Certificate', issuer: 'Google Cloud × Hack2Skill', date: 'Jun 2025', file: '12_google_cloud.pdf' },
    { name: 'Naukri Campus AI NCAT', issuer: 'Naukri Campus', date: '2025', file: '11_naukri_ncat.pdf' },
    { name: 'Problem Solving (Basic)', issuer: 'HackerRank', date: 'Jun 2025', file: '10_problem_solving_basic.pdf' },
    { name: 'SQL (Basic)', issuer: 'HackerRank', date: 'May 2025', file: '9_sql_basic.pdf' },
    { name: 'Python (Basic)', issuer: 'HackerRank', date: 'May 2025', file: '8_python_basic.pdf' },
    { name: 'Software Engineer Intern — Role Certification', issuer: 'HackerRank', date: 'May 2025', file: '7_hackerrank_sei.pdf' },
    { name: 'RISC 2025 — Certificate of Participation', issuer: 'IIT Bombay', date: 'Apr 2025', file: '6_risc_iitb.pdf' },
    { name: 'HackWithIndia Hackathon — Top 20%', issuer: 'HackWithIndia', date: 'Mar 2025', file: '5_hackwithindia.pdf' },
    { name: 'Ninja Slayground 2.0 — Level 1 Conqueror', issuer: 'Coding Ninjas', date: '2025', file: '4_coding_ninjas.pdf' },
    { name: 'Flipkart GRiD 6.0 — Software Development Track (Level 1)', issuer: 'Flipkart · Unstop', date: 'Aug 2024', file: '3_flipkart_grid.pdf' },
    { name: 'Internship Certificate — Mathura Refinery', issuer: 'Indian Oil Corporation Limited', date: 'Jun 2024', file: '2_iocl.pdf' },
    { name: 'Industrial Training — Artificial Intelligence', issuer: 'Intrainz', date: 'Sep 2023', file: '1_intrainz.pdf' },
  ],
  skills: {
    languages: ['C++', 'Python', 'TypeScript', 'JavaScript', 'SQL'],
    frontend: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
    backend: ['Flask', 'REST APIs', 'SQLite', 'Data Pipelines'],
    ml_ai: ['Machine Learning', 'Computer Vision', 'OpenCV', 'NLP', 'Generative AI', 'Scikit-learn'],
    cloud: ['Google Cloud Platform', 'Microsoft Azure', 'ETL Pipelines', 'Data Engineering'],
    tools: ['Git', 'GitHub', 'Docker', 'Linux', 'VS Code', 'Jupyter Notebooks'],
  },
};

// Detailed project pages (rendered on project.html)
export const projectDetails: ProjectDetail[] = [
  {
    id: 'invisible-magic',
    title: 'Invisible Magic',
    tagline: 'A real-time "invisible cloak" effect powered by OpenCV.',
    period: '2024',
    type: 'Computer Vision Project',
    overview: [
      'Invisible Magic uses OpenCV to detect a specific colour in a live webcam feed and replaces the detected regions with a pre-defined background image — producing a seamless "invisible cloak" illusion, just like magic.',
      'The project demonstrates practical, real-time computer vision: colour-space transformations, masking, contour detection, and frame compositing, all running live at webcam frame rates.',
    ],
    features: [
      'Real-time colour detection using OpenCV',
      'Precise area selection using contour detection',
      'Dynamic background replacement',
      'Easily configurable target colour via adjustable HSV ranges',
    ],
    howItWorks: [
      'Capture live video from the webcam',
      'Convert each frame from BGR to HSV colour space',
      'Create a mask to isolate the target colour',
      'Find contours of the detected colour regions',
      'Replace those regions with a custom background image',
      'Display the composited result live',
    ],
    skills: ['Python', 'OpenCV', 'NumPy', 'Computer Vision', 'Image Processing'],
    github: 'https://github.com/amritv0306/Invisible-Magic',
    demo: 'https://www.youtube.com/watch?v=xbSCOdEDxlI',
  },
  {
    id: 'content-pipeline',
    title: 'Automated Content & Monetization Pipeline',
    tagline: 'An end-to-end ETL + GenAI pipeline on Google Cloud.',
    period: 'June 2025',
    type: 'Data Engineering · GenAI',
    overview: [
      'An end-to-end ETL (Extract, Transform, Load) pipeline built with Python on Google Cloud Platform that automates data ingestion from REST APIs and turns raw performance data into actionable content strategy.',
      'Generative AI is used to summarize performance trends, informing a content strategy that grew viewership past 1,000+ in the first 30 days — demonstrating full project ownership from concept to launch and performance tracking.',
    ],
    features: [
      'Automated data ingestion from REST APIs',
      'Python-based ETL orchestration on GCP',
      'GenAI-generated summaries of performance trends',
      'Data-driven content strategy loop with measurable growth',
    ],
    howItWorks: [
      'Extract raw performance data from REST APIs on a schedule',
      'Transform and clean the data with Python',
      'Load structured results into GCP for storage and analysis',
      'Feed trends to a Generative AI model for summarization',
      'Apply AI-generated insights to optimize content strategy',
    ],
    skills: ['Python', 'REST APIs', 'GenAI', 'GCP', 'ETL', 'Data Engineering'],
    github: 'https://github.com/amritv0306/Automate-Youtube',
    demo: '',
  },
];

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

// Skills by category — order matters (frontend 5th, backend 6th)
export const SKILL_CATEGORIES = [
  {
    name: 'Languages',
    key: 'languages',
    color: '#4a9eff',
  },
  {
    name: 'AI/ML',
    key: 'ml_ai',
    color: '#4a9eff',
  },
  {
    name: 'Cloud',
    key: 'cloud',
    color: '#4a9eff',
  },
  {
    name: 'Tools',
    key: 'tools',
    color: '#4a9eff',
  },
  {
    name: 'Frontend',
    key: 'frontend',
    color: '#4a9eff',
  },
  {
    name: 'Backend',
    key: 'backend',
    color: '#4a9eff',
  },
];
