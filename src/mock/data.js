import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'JavaScript Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Profile Page', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, I am ',
  name: 'Jeff Jessie',
  subtitle: 'I am a JavaScript Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a passionate JavaScript Developer with a love for helping others.  I am a Veteran, and as such I hold my self to a very high standard of TeamWork, Communication, and Hard Work. I enjoy every aspect of Development and building an idea into reality.',
  paragraphTwo: 'I am currently working on a Veteran assistance web application for finding a "buddy" to communicate with when they need someone who has been in their shoes to help them clear their minds.  I am also working with my mentor Michael(@muddybootscode) on a self-help style pomodoro web application to assist in time management and mental health awareness.',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio',  //if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want To Talk? Great!',
  btn: 'Contact Me',
  email: 'j3ffjessie@protonmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://www.twitter.com/j3ffjessie',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://www.github.com/j3ffjessie',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
