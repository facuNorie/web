interface Project {
    id: string;
    title: string;
    desc: string;
    img: string;
    link: string;
}

export const projects: Project[] = [
    {
        id: '1',
        title: 'Contact list',
        desc: 'A responsive contact list app with user authentication, built using React.js, Material-UI, and Firebase.',
        img: '/images/contact.png',
        link: 'https://fb-firestore-9a351.web.app/',
    },
    {
        id: '2',
        title: 'Trivia game',
        desc: 'Engaging trivia game in React.js, featuring a points system and diverse questions from an external API for interactive user experiences.',
        img: '/images/trivia.png',
        link: 'https://trivia-game-zeta.vercel.app/',
    },
    {
        id: '3',
        title: 'Superhero team',
        desc: 'Interactive Superhero Searcher with React.js, external API integration, and secure cookie storage for saving favorites.',
        img: '/images/hero.png',
        link: 'https://super-hero-eta.vercel.app/',
    },
];
