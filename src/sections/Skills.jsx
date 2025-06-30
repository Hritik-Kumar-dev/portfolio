import React from 'react'
import Cards from '../components/Cards'
import '../App.css'
const Skills = () => {


    const skills = [
        { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg", title: "HTML" },
        { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg", title: "CSS" },
        { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", title: "JavaScript" },
        // { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", title: "Python" },
        // { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg", title: "C" },
        // { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", title: "C++" },
        // { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg", title: "Java" },
        { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg", title: "React" },
        { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg", title: "Bootstrap" },
        { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", title: "Tailwind CSS" },
        { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg", title: "Node.js" },
        { image: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/ExpressJS-Dark.svg", title: "Express.js" },
        { image: "https://raw.githubusercontent.com/get-icon/geticon/master/icons/gsap.svg", title: "GSAP" },
        { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg", title: "MongoDB" },
        { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg", title: "PostgreSQL" },
        // { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg", title: "MySQL" },
        { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", title: "Git" },
        { image: "https://cdn1.iconfinder.com/data/icons/unicons-line-vol-3/24/github-512.png", title: "GitHub" },
        { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", title: "VS Code" },
    ];
    return (
        <div className=' p-4 pr-6.5  h-auto w-full justify-center    bg-blue-100 font-bold '>
            <h1 className=' rounded-3xl text-4xl   '>Tech stack I use </h1>

            <div className='flex gap-6 w-20 h-full flex-row  space-between mt-4 '>
                {skills.map((skill, index) => (
                    <Cards key={index} image={skill.image} title={skill.title} />
                ))}
            </div>


        </div>
    )
}

export default Skills
