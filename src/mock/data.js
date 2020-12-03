import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Chetan Pawar | Cloud Professional', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Chetan Pawar',
  subtitle:
    'I am a Senior Cloud Professional with experience in Cloud Architecture and Site Reliability.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'chetan.jpg',
  paragraphOne:
    'Driven and motivated to build great things in Cloud to get awesome results. Leveraging the cloud to create cost efficienct architecture and improve revenue for organizations.',
  paragraphTwo:
    'Helping organizations to adapt to SRE model and automating every required step in the way.',
  paragraphThree:
    'Technologies that I have worked with can be found at - https://techradar.chetanpawar.cloud',
  resume: 'https://github.com/pawarrchetan/resume/blob/main/ChetanPawarResume.pdf', // 'https://techradar.chetanpawar.cloud', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cologne.jpg',
    title: 'Automated Observability Solution using AWS',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pune.jpg',
    title: 'Serverless Centralized Logging',
    info:
      'The combination of the 2 functions deployed by this repository allow centralised logging of serverless components in Elasticsearch.',
    info2: '',
    url: 'https://github.com/pawarrchetan/serverless-logging',
    repo: 'https://github.com/pawarrchetan/serverless-logging', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bangalore.jpg',
    title: 'Serverless API using Aurora Serverless RDS',
    info:
      'Creates an app to use Aurora Serverless Postgres RDS with a custom Cloudformation resource to create a new database.',
    info2: 'The cloudformation resource can be bootstrapped to a Serverless API',
    url: 'https://github.com/pawarrchetan/serverless/tree/master/aurora-serverless',
    repo: 'https://github.com/pawarrchetan/serverless/tree/master/aurora-serverless', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'pawarrchetan@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/icrp08',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/chetanpawar/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/pawarrchetan',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
