import CodingLife from '../Images/HomePage/Coding-Life.jpg'
import DoNotDisturb from '../Images/HomePage/doNotDisturb.jpg'


const technicalSkills = [
    'HTML', 'CSS', 'Less', 'JavaScript', 'React', 'Context API', 
    'Express.JS', 'Node.JS', 'Responsive Design', 'Jest', 'Cypress', 
    'SQL', 'Postgres', 'Asynchronous JavaScript', 'Axios', 'RESTful Architecture', 
    'Authentication','Single Page Applications', 'React Hooks', 'git', 'Github', 'Heroku', 
    'Computer Architecture', 'Automated Unit Testing', 'End-To-End Testing', 'Integration Testing', 
    'Deployment', 'Knex', 'Relation DataBases', 'Debugging', 'Algorithms', 'Agile Project Management',
    'Teamwork & Collaboration', 'Time Management Techniques'  
]

const projects = [
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
    skills: ['React', 'Node'],
    role: 'Full Stack Developer',
    link: 'https://github.com/Magical-Keyshawn-Jones/React-Router-Movies.git',
    description: [
        'Built a HTML website customized with CSS  that shows all movies from an API',
        'Created a feature that allows users to see the movie information after they click on the movie card'
    ]
}]

export {
    technicalSkills, 
    projects
}