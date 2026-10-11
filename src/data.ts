export const profile = {
  name: 'Saurabh Kale', role: 'Full-Stack Developer', email: 'skale12@asu.edu', phone: '+1 (602) 723-8792',
  github: 'https://github.com/saurabh4073', linkedin: 'https://www.linkedin.com/in/saurabhjkale/',
  intro: "I'm a Software Engineer with a Master's in Information Technology from Arizona State University (GPA 4.0). I design and ship production systems across the stack — payment infrastructure, distributed microservices, real-time services, and AI-powered products.",
  current: "Currently at BLUSVN Technologies, I've architected Stripe checkout and Golang microservices for end-to-end order lifecycle automation, built real-time notification pipelines, and designed ranking algorithms serving 500+ drivers."
};
export const skills = [
  {name:'Languages', items:['JavaScript','TypeScript','Python','Java','Golang','SQL']},
  {name:'Frontend', items:['React','Next.js']},
  {name:'Backend', items:['Node.js','Django','FastAPI','Django REST Framework']},
  {name:'Databases', items:['PostgreSQL','MySQL','MongoDB','Firebase']},
  {name:'Cloud & DevOps', items:['AWS','Docker','Kubernetes','Jenkins','CI/CD','Redis']},
  {name:'Tools & AI', items:['Postman','Swagger','OpenAI','TensorFlow.js']}
];
export const education = [
  {school:'Arizona State University', degree:"Master's in Information Technology · GPA 4.0", date:'GRADUATED MAY 2024 · TEMPE, AZ', detail:'Focused on software engineering, distributed systems, and applied machine learning — combining coursework with hands-on research and full-stack projects.'},
  {school:'Vishwakarma Institute of Information Technology', degree:'Bachelor of Engineering · Computer Science', date:'GRADUATED MAY 2019 · PUNE, INDIA', detail:'Built a strong foundation in algorithms, data structures, operating systems, and software design that shaped my engineering approach.'}
];
export const experience = [
  {company:'BLUSVN Technologies', role:'Software Engineer', date:'2025 – Present', bullets:[
    'Architected Stripe payment infrastructure and Golang microservices for order lifecycle automation, including checkout, webhooks, reconciliation, refunds, expiration, cancellation, and reassignment.',
    'Engineered a real-time notification service using Firebase Cloud Messaging and Service Workers with deep-link navigation and cross-tab sync.',
    'Built a centralized content management platform backed by Amazon S3, enabling teams to manage 10+ app pages without code deployments.',
    'Designed a weighted Bayesian driver-ranking algorithm for statistically reliable leaderboards across 500+ drivers.'
  ], tags:['Next.js','Node.js','Golang','Redis','PostgreSQL','Docker','AWS','Jenkins','CI/CD']},
  {company:'Flow Global Software Technologies',role:'Backend Developer',date:'Jul 2024 – Feb 2025',bullets:[
    'Led a 5-person team building a LinkedIn scraper with master-worker architecture, extracting 1,000+ profiles daily at 98% accuracy and cutting processing time by 66%.',
    'Implemented WebSocket-based real-time communication for a chatbot handling data analysis and visualization queries.',
    'Developed deep-link email verification, expanded backend test coverage, and authored end-to-end documentation to streamline onboarding.'
  ],tags:['Django','FastAPI','Next.js','React','PostgreSQL','Redis','Docker','Electron']},
  {company:'Infinichains',role:'Software Engineer',date:'Oct 2020 – Jul 2022',bullets:[
    'Automated a web tool for farmers, reducing manual errors by 98% and lifting task completion rates by 42%.',
    'Designed the Credible Connect Android app for offline data collection with location tracking and image capture.',
    'Cut server costs by 24% via automated log and image deletion cron jobs.',
    'Designed relational schemas for subscription tracking, pagination, and billing workflows to improve query performance.'
  ],tags:['JavaScript','React','Node.js','Elixir','MySQL']},
  {company:'WhiteSnow',role:'Software Developer',date:'Aug 2019 – Sep 2020',bullets:[
    "Built customizable language controls in JavaScript for Johns Hopkins University's AIDS and STD research surveys — achieving 95% paperless forms.",
    'Built a custom scripting tool letting users define business logic and customize drag-and-drop form behavior.'
  ],tags:['Python','JavaScript','AngularJS','MySQL']}
];
export const projects = [
  {name:'SplitSmart – Group Expense Platform',year:'2026',art:'receipt',description:'Full-stack expense sharing platform supporting item-level bill splitting, receipt OCR, recurring expenses, and travel expense management with multi-currency support.',tags:['Node.js','PostgreSQL','JWT','REST APIs','Docker','OCR']},
  {name:'Pantry AI Assistant',year:'2025',art:'pantry',description:'Custom inventory management system using Gemini 2.5 and Model Context Protocol (MCP), enabling natural-language interaction with a local MySQL database.',tags:['Gemini 2.5','MCP','Node.js','MySQL','Docker']},
  {name:'Clinic Management Platform',year:'2024',art:'clinic',description:'Platform to manage clinics, doctors, patients, and their relationships, with authentication, CRUD operations, scheduling, and patient visit tracking.',tags:['Full-Stack','Auth','CRUD','Scheduling']},
  {name:'Car Game',year:'2023',art:'car',description:'Arcade-style driving game where you control a vehicle on a busy road, avoid other cars, and manage fuel to reach the end.',tags:['JavaScript','HTML5 Canvas','Game Loop']},
  {name:'Bookswap-Hub',year:'2023',art:'books',description:'Book swapping platform where registered users upload books, request swaps, and complete transactions once the owner accepts.',tags:['Full-Stack','Auth','REST APIs']},
  {name:'PDF Chatbot',year:'2023',art:'pdf',description:'Flask web application that lets users upload PDFs, ask questions about their content, and receive AI-generated answers.',tags:['Flask','OpenAI GPT-3.5','Python','Bootstrap']},
  {name:'Object Detection App',year:'2022',art:'detect',description:'Real-time object detection in the browser using a webcam and TensorFlow.js with the COCO-SSD model.',tags:['TensorFlow.js','COCO-SSD','JavaScript','HTML5']},
  {name:'Todo List App',year:'2022',art:'todo',description:'Task and shopping list app with shareable lists and an AI-assisted list creation feature.',tags:['Full-Stack','AI','Collaboration']},
  {name:'Opinion App',year:'2022',art:'opinion',description:'Decision-making tool that helps you pick between options, flip a virtual coin, or randomly select from any number of choices.',tags:['JavaScript','UI/UX','Web']}
];
// Add individual project URLs with github: 'https://github.com/...' to the objects above.
