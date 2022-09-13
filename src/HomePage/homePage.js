import './homePageStyles.css'
import Profile_Pic  from '../Images/HomePage/Profile_Pic.jpg'
import GithubLogo from '../Images/HomePage/GithubLogo.png'
import LinkedInLogo from '../Images/HomePage/LinkedInLogo.png'
import { technicalSkills, projects, jobs, education } from './homeVariables'

// Make nav bar look professional
// Make *everything* look smaller. Not shoved in my face

export default function HomePage () {

    /* 
        Key: 
        tc-technicalSkills
    */

    // Renders skills to the website
    function tcFactory (skill, number) {
        return (
            <p key={number}>{skill}</p>
        )
    }

    function projectFactory (project, key) {
        return (
            <div className='coolProject' key={key}>
                {/* Always add rel with target blank to prevent tabnabbing */}
                <a href={project.link} target='_blank' rel='noopener noreferrer'>
                    <div className='projectImage'>
                        <img src={project.image} alt='project img' />
                        <div>
                            {/* <h4>Technical Super Powers Used</h4> */}
                            {project.skills.map(item => {
                            return <span>{item}</span>
                        })}</div>
                    </div>
                    <h3>{project.title}</h3>
                </a>
            </div>
        )
    }

    function jobFactory (job, key) {
        return (
            <div className='job' key={key}>
                <div>
                    <p>{job.title}</p>
                    <ul>
                        {job.description.map(item => {
                            return <li>{item}</li>
                        })}
                    </ul>
                </div>
                <p>{job.year}</p>
            </div>
        )
    }

    function educationFactory (school, key) {

        if (school.link === false) {
            return (
                <div className='school' key={key}>
                    <div>
                        <h2>{school.title}</h2>
                        {school.details.map(item => {
                            return item
                        })}
                    </div>
                    <p>{school.year}</p>
                </div>
            )
        } else {
            return (
                <a href={school.link} target='_blank' rel='noopener noreferrer' className='schoolLink' key={key}>
                    <div className='schoolLinkDiv'>
                        <div>
                            <h2>{school.title}</h2>
                            {school.details.map(item => {
                                return item
                            })}
                        </div>
                        <p>{school.year}</p>
                    </div>
                </a>
            )
        }
    }

    return (
        <main className='homePage'>
            <header className='homeHeader'>
                <h1 className='header1'> Keyshawn Jones </h1>
                <section>
                    <div className='profilePic'>
                        <img src={Profile_Pic} alt='Profile Pic'/>
                    </div>
                    <div className='aboutMe'>
                        <h1 className='header2'>About Me</h1>
                        <p>
                            <span className='bold'> How I got into coding? </span> It started in high school when I downloaded Mimo,
                            an app that teaches you how to code, from there I had a growing interest and love for anything code.
                        </p>

                        <p>
                            <span className='bold'> Why I code? </span> I simply just love creating. It just fascinates me that 
                            I can just type a few lines or a page worth of code and create something fun or useful for a business or a friend of mine 
                            and actually see the results of what I typed. 
                        </p>

                        <p>
                            <span className='bold'> Personality</span>- I have a growth mindset and a mission to be the best. I get along with anybody and teamwork makes the dream work.
                            Give me a task and you can expect it done with 100% effort, quickly, efficiently, and with attention to detail
                        </p>
                    </div>
                </section>
                <h1 className='jobTitle'> Full Stack Web Developer </h1>
            </header>
            <section className='technicalSkills'>
                <div className='skills'>
                    {technicalSkills.map((item, index) => {
                        return tcFactory(item, index)
                    })}
                </div>
                <h1>Technical Skills</h1>
            </section>
            <section className='project'>
                <h1>Projects</h1>
                <h2>Click on a project to follow Github link</h2>
                <div className='projectGrid'>
                    {projects.map((item, index) => {
                        return projectFactory(item, index)
                    })}
                </div>
            </section>
            <section className='experience'>
                <h1>Experience</h1>
                {jobs.map((item, index) => {
                    return jobFactory(item, index)
                })}
            </section>
            <section className='education'>
                <h3>Education</h3>
                <div className='schoolHelper'>
                    {education.map((item, index) => {
                        return educationFactory(item, index)
                    })}
                </div>
            </section>
            <section className='contact'>
                <h1>Contact Me!</h1>
                <div className='contactInfo'>
                    <p>Email: KeyshawnJones@gmail.com</p>
                    <p>Phone#: (573)-722-2850</p>
                    <div className='linkContainer'>
                        <div className='githubLink'>
                            <a href='https://github.com/Magical-Keyshawn-Jones' target='_blank' rel='noopener noreferrer' >
                                <img src={GithubLogo} alt='githubLogo'/>
                            </a>
                        </div>
                        <div className='linkedInLink'>
                            <a href='https://www.linkedin.com/in/keyshawn-jones-a399a122a' target='_blank' rel='noopener noreferrer' >
                                <img src={LinkedInLogo} alt='linkedInLogo'/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}