import './homePageStyles.css'
import Profile_Pic  from '../Images/HomePage/Profile_Pic.jpg'
import { technicalSkills, projects } from './homeVariables'

// Make nav bar look professional

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
            <div className='coolProject' key={key} onClick=''>
                {/* Always add rel with target blank to prevent tabnabbing */}
                <a href={project.link} target='_blank' rel='noopener noreferrer'>
                    <div className='projectImage'>
                        <img src={project.image} alt='project img' />
                        <div>
                            <h2>Technical Super Powers Used</h2>
                            {project.skills.map(item => {
                            return <span>{item}</span>
                        })}</div>
                    </div>
                    <h3>{project.title}</h3>
                </a>
            </div>
        )
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
        </main>
    )
}