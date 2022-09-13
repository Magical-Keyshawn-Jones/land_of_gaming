import CodingLife from '../Images/HomePage/Coding-Life.jpg'
import DoNotDisturb from '../Images/HomePage/doNotDisturb.jpg'


const technicalSkills = [
    'HTML', 'CSS', 'Less', 'JavaScript', 'React', 'Context API', 
    'Express.JS', 'Node.JS', 'Responsive Design', 'Jest', 'Cypress', 
    'SQL', 'Postgres', 'Asynchronous JavaScript', 'Axios', 'RESTful Architecture', 
    'Authentication','Single Page Applications', 'React Hooks', 'git', 'Github', 'Heroku', 
    'Computer Architecture', 'Automated Unit Testing', 'End-To-End Testing', 'Integration Testing', 
    'Deployment', 'Knex', 'Relational DataBases', 'Debugging', 'Algorithms', 'Agile Project Management',
    'Teamwork & Collaboration', 'Time Management Techniques'  
]

const projects = [
{
    title: 'LittleFuzzy',
    image: CodingLife,
    skills: ["JavaScript", "React.js", "Redux", "Yup", "Jest", "Cypress", "Axios", "Responsive Design"],
    link: ['https://littlefuzzy.vercel.app/']
},
{
    title: 'Authenticating and Testing',
    image: CodingLife,
    skills: ['Node', 'SQLlite', 'Axios', 'Knex'],
    role: 'Full Stack Developer',
    link: 'https://github.com/Magical-Keyshawn-Jones/web-sprint-challenge-authentication-and-testing.git',
    description: [
        'Implemented a feature that stores encoded passwords and users in a relational database using SQLite',
        'Built an API that allowed users to securely register and log in using JavaScript',
        'Encoded registering passwords to ensure authorized user login capability by submitting password API to modify specific access'
    ]
 },
 {
    title: 'Advanced Web Application',
    image: DoNotDisturb,
    skills: ['Node', 'React', 'Yup', 'Redux'],
    role: 'Full Stack Developer',
    link: 'https://github.com/Magical-Keyshawn-Jones/web-sprint-challenge-advanced-web-applications.git',
    description: [
        'Created a website using  context API which logged articles and displayed relevant coding information',
        'Used hooks to incorporate functionality which allowed  users to create, delete, and edit articles'
    ]
},
{
    title: 'React Router Movies',
    image: CodingLife,
    skills: ['Node', 'React', 'API'],
    role: 'Full Stack Developer',
    link: 'https://github.com/Magical-Keyshawn-Jones/React-Router-Movies.git',
    description: [
        'Built a HTML website customized with CSS  that shows all movies from an API',
        'Created a feature that allows users to see the movie information after they click on the movie card'
    ]
}]

const jobs = [
    {
        title: 'Unilever, Sikeston, MO - Supplemental Handpacker',
        year: 'Aug 2021 - Dec 2021',
        description: [
            'Ensured top quality of ice cream by analyzing each product  and communicated findings to management',
            'Prepared and organized ice cream into boxes and set on a pallets to allow workers to have merchandise on time and   to ship out to vendors'
        ]
    },
    {
        title: 'Buffalo, Sikeston, MO - Cashier',
        year: 'Mar 2020 - Jun 2021',
        description: [
            'Communicated  with customers over the phone and in person to create orders',
            'Organized and prepared food bag orders to ensure customers received  everything  ordered',
            'Provided excellent customer by checking in on guests, ensuring proper seating and communicating with servers making sure guests had a great dining experience'
        ]
    }
]

const education = [
    {
        title: 'Sikeston Senior High School',
        year: '2019',
        link: false,
        details: [
            <p>
                <span>Degree:</span> High School Diploma
            </p>,
            <p>
                Graduate: Yes
            </p>
        ]
    },
    {
        title: 'BloomTech(Lambda School)',
        year: '2022 - 2022',
        link: 'https://www.bloomtech.com/courses/full-stack-web-development',
        details: [
            <p>
                <span>Degree:</span> Full Stack Development
            </p>,
            <p>
                <span>Program:</span> Full Time
            </p>,
            <p>
                <span>Graduate:</span> Yes
            </p>
        ]
    }
]

export {
    technicalSkills, 
    projects,
    jobs,
    education
}