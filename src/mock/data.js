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
  img: 'profile.png',
  paragraphOne:
    'I am a passionate JavaScript Developer with a love for helping others.  I am a Veteran, and as such I hold my self to a very high standard of TeamWork, Communication, and Hard Work. I enjoy every aspect of Development and building an idea into reality.',
  paragraphTwo:
    'I am currently working on a Veteran assistance web application for finding a "buddy" to communicate with when they need someone who has been in their shoes to help them clear their minds.  I am also working with my mentor Michael(@muddybootscode) on a self-help style pomodoro web application to assist in time management and mental health awareness.',
  paragraphThree: '',
  resume:
    'https://docs.google.com/document/d/1CiaQb3psNgWsS5BZ7UFA56cYQK4Ov2elDTQAg-rR-W8/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'BlogImage.jpg',
    title: 'J3 Dev Blog',
    info:
      'My Personal Blog that houses my written articles.  It is a holding ground for all of my published articles on Dev.to.',
    info2:
      'Built with Gatsby, React and utilizing the Dev.to API with GraphQL queries. I am able to automatically update my blog with my most recent Dev.to articles as soon as they are published to the Dev platform.',
    url: 'https://j3devblog.netlify.app/',
    repo: 'https://github.com/J3ffJessie/J3-Dev-Blog', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ToDo.jpg',
    title: 'To-Do List',
    info:
      'I wanted to utilize NodeJS and figured a ToDo List would be a fairly easy project to build out.  Utilizing NodeJS,  Express and MongoDB I was able to create a simple web application that my wife and I can use for around the house tasks. I deployed this using Heroku to understand how that was implemented and to go through that process for future knoweldge.',
    info2:
      'Unfortunately do to unforseen circumstances (Apple Notes/Family Sharing) my To-Do list became boring to use and more of a hassle for my wife.  So, now it gets minimal use when I am using it to track project progress or something of that sort.',
    url: 'https://j3-todo-app.herokuapp.com/',
    repo: 'https://github.com/J3ffJessie/To-Do-List', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Habit / Time Tracker',
    info:
      'I originally got this idea from utilizing an iOS shortcut for daily standup.  I wanted to be able to capture what I planned for the day as goals, but also keep track of how often I was successful versus when I was unable to complete a goal and why.',
    info2:
      'I began building this application using React, which after explaing my idea and brainstorming with my Mentor, we pulled functionality over and designed a new application BodyonBreak which we are collaborating on currently.',
    url: 'https://github.com/J3ffJessie/todo-time-tracker',
    repo: 'https://github.com/J3ffJessie/todo-time-tracker', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want To Talk? Great!',
  btn: 'Email Me',
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
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jeff-jessie-4b2323a9/',
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
