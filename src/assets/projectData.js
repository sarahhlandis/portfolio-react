import moonswell from '../assets/images/moonswell.png'
import scribble from '../assets/images/scribble.png'
import portfolio from '../assets/images/portfolio.png'
import viper from '../assets/images/viper.png'
import ff from '../assets/images/ff.png'

const projects = [
    { id: 1, title: "Portfolio v.1",
    date: "November 2022",
    image: `${portfolio}`,
    abstract: "Vanilla Version of My Dev Portfolio",
    description: "As a newly enrolled student at Coder Academy, our first major assignment was to build a static portfolio site from scratch using only HTML and CSS. With a passion for clean designs and seamless UX, it ended up turning out well. Learnt some valuable skills such as always design mobile first (!!), the beauty of figma, deployment, and the fundamentals of CSS.",
    repo: "https://github.com/sarahhlandis/Portfolio-Site",
    demo: "https://sarahlandis.netlify.app/index.html",
    },
    { id: 2, 
    title: "Viper",
    date: "December 2022",
    image: `${viper}`,
    abstract: "Learning Application from the Command Line",
    description: "This robust application was built with Python and is fully functional from the terminal. My goal of this project was to aid and enable a user to learn any language of their choosing whilst making it fun. The application features an internal continuous menu, a threaded timer, a full translation mode supporting 126 languages (calls to googleTrans pkg), readable permissions of CSV files, along with a quiz mode that output a quiz metrics .txt file for review.",
    repo: "https://github.com/sarahhlandis/Viper-Learning-App",
    demo: "",
    },
    { id: 3, 
    title: "FitnessFinder",
    date: "March 2023",
    image: `${ff}`,
    abstract: "A RESTful API Built With Flask",
    description: "FitnessFinder is an API web server built with PostgreSQL, Flask and Python following MVC architecture. It allows for full CRUD functionality and is bolstered with JWT authenication, backed by PostgreSQL as the relational database. Normalized data to 3NF. Tried and tested using Insomnia.",
    repo: "https://github.com/sarahhlandis/FitnessFinder-REST-API",
    demo: "",
    },
    { id: 4, 
        title: "Scribble",
        date: "April 2023",
        image: `${scribble}`,
        abstract: "Take Notes on Your Desktop",
        description: "This small, side application was built as a play-around with React. It's similar in its usage to Stickies (macOS) and is meant to resemble sticky notes. My aim in this app was to try to get the data persist which was achieved by using localStorage. Also allows for users to modify an existing note, delete, or create a new one. Not responsive for different media screens. Future versions may support functionality to change the note color so stay tuned!",
        repo: "https://github.com/sarahhlandis/practice-react-project",
        demo: "https://scribblenotetaking.netlify.app/",
        },
    { id: 5, 
    title: "Moonswell",
    date: "May 2023",
    image: `${moonswell}`,
    abstract: "Soft competitor to WillyWeather",
    description: "A dynamic site built with React as part of a collaborative Hackathon with CoderAcademy. Working with a team of 3 others, we created this fully functional SPA application in a week. The aim was to dig into some fun with React and learn along the way. Our team utilized Vite and Tailwind and put out a fair few git branching fires. My contributions to the site included the homepage, header & footer, and reusable navbar components.",
    repo: "https://github.com/reactronauts/untitled-tide-app",
    demo: "https://moonswell.netlify.app/",
    },
];

// most recent shown first
projects.reverse()

export default projects;