import moonswell from '../assets/images/moonswell.png'
import scribble from '../assets/images/scribble.png'
import portfolio from '../assets/images/portfolio.png'
import viper from '../assets/images/viper.png'
import ff from '../assets/images/ff.png'
import hhhome from '../assets/images/hhhome.png'
import replika from '../assets/images/replika.png'

const projects = [
    { id: 1, 
        title: "Scribble",
        date: "April 2023",
        image: `${scribble}`,
        abstract: "Quick Notes from Your Desktop",
        description: "This small, side application was built as a play-around with React. It's similar in its usage to Stickies (macOS) and is meant to resemble sticky notes. My aim in this app was to try to get the data persist which was achieved by using localStorage. Also allows for users to modify an existing note, delete, or create a new one. Not responsive for different media screens. Future versions may support functionality to change the note color so stay tuned!",
        repo: "https://github.com/sarahhlandis/practice-react-project",
        demo: "https://scribblenotetaking.netlify.app/",
    },
    { id: 2, title: "Portfolio v1",
    date: "November 2022",
    image: `${portfolio}`,
    abstract: "Vanilla Version of My Dev Portfolio",
    description: "As a newly enrolled student at Coder Academy, our first major assignment was to build a static portfolio site from scratch using only HTML and CSS. With a passion for clean designs and seamless UX, it ended up turning out well. Learnt some valuable skills such as always design mobile first (!!), the beauty of figma, deployment, and the fundamentals of CSS.",
    repo: "https://github.com/sarahhlandis/Portfolio-Site",
    demo: "https://sarahlandis.netlify.app/index.html",
    },
    { id: 3, 
    title: "Viper",
    date: "December 2022",
    image: `${viper}`,
    abstract: "Learn a Language from the Command Line",
    description: "This robust application was built with Python and is fully functional from the terminal. My goal of this project was to aid and enable a user to learn any language of their choosing whilst making it fun. The application features an internal continuous menu, a threaded timer, a full translation mode supporting 126 languages (calls to googleTrans pkg), readable permissions of CSV files, along with a quiz mode that output a quiz metrics .txt file for review.",
    repo: "https://github.com/sarahhlandis/Viper-Learning-App",
    demo: "",
    },
    { id: 4, 
        title: "FitnessFinder",
        date: "March 2023",
        image: `${ff}`,
        abstract: "A RESTful API Built with Flask",
        description: "FitnessFinder is an API web server built with PostgreSQL, Flask and Python following MVC architecture. It allows for full CRUD functionality and is bolstered with JWT authenication, backed by PostgreSQL as the relational database. Normalized data to 3NF. Tried and tested using Insomnia.",
        repo: "https://github.com/sarahhlandis/FitnessFinder-REST-API",
        demo: "",
        },
    { id: 5, 
    title: "Moonswell",
    date: "May 2023",
    image: `${moonswell}`,
    abstract: "Soft Competitor to WillyWeather",
    description: "A dynamic site built with React as part of a collaborative Hackathon with CoderAcademy. Working with a team of 3 others, we created this fully functional SPA application in a week. The aim was to dig into some fun with React and learn along the way. Our team utilized Vite and Tailwind and put out a fair few git branching fires. My contributions to the site included the homepage, header & footer, and reusable navbar components.",
    repo: "https://github.com/reactronauts/untitled-tide-app",
    demo: "https://moonswell.netlify.app/",
    },
    { id: 6, 
        title: "Hope Helpers",
        date: "August 2023",
        image: `${hhhome}`,
        abstract: "Aggregate Missing Persons Site",
        description: "A full stack MERN application built using MongoDB, Express, React, and Node. This collaborative project features a site which intends to serve as a missing persons database for the public to use. The corresponding backend database is fully functional and stores data securely. The application supports user signup/sign in with email verification, JWT authentication, functionality to update missing person records, and direct sharing of reports to social media, etc. I developed, designed, and built the frontend however some stylistic choices were deliberated on as a team.",
        repo: "https://github.com/Sarah-Connie",
        demo: "https://hope-helpers.netlify.app/",
    },
    { id: 7, 
        title: "Replika",
        date: "October 2023",
        image: `${replika}`,
        abstract: "Remote Website Rebuild",
        description: "This purpose of this project was to revamp and rebrand Replika, a visual studio with realtime visualisation expertise. My colleague and I were tasked with having a polished and deployed site live in 3 weeks time for a national expo. I researched, conceptualized and proposed the website design, color scheme, and branding in the initial design stage. I also headed the transference of wireframe to code in terms of design, copy, and layout. Project timelines were adhered to both daily and weekly, in which I assisted in delegating priority tasks and took on the role of merge master.",
        repo: "",
        demo: "https://replikaxplore.com",
    },
    
];

// most recent shown first
projects.reverse()

export default projects;