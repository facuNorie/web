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
        title: 'Trivia game',
        desc: 'One question, four options, will you get it right?',
        img: '/images/trivia.png',
        link: 'https://trivia-game-zeta.vercel.app/',
    },
    {
        id: '2',
        title: 'Contact book',
        desc: 'Contact book with logn and log out',
        img: '/images/contact.png',
        link: 'https://fb-firestore-9a351.web.app/',
    },
    {
        id: '3',
        title: 'Superhero database',
        desc: 'You can create your own team of superheroes',
        img: '/images/hero.png',
        link: 'https://super-hero-eta.vercel.app/',
    },
];
