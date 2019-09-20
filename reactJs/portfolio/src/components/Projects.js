
import React from 'react';
import PROJECTS from '../data/projects';

const Project = props => {
    const {title, image, description, link} = props.project;

    return(
        <div style={{display: 'inline-block', width: 500, margin: 20}}>
            <h3 className='project-each-title'>{title}</h3>
            <img src={image} alt='profile' style={{width: 200, height: 120}}></img>
            <p>{description}</p>
            <a href={link}See Work className='button'>See Work</a>
        </div>
    )
}

const Projects = () => (
    <div className='projects'>
        <h2 className='project-title'>Highlighted Projects</h2>
        <div>
            {
                PROJECTS.map(PROJECT => (
                    <Project key={PROJECT.id} project={PROJECT}>{PROJECT}</Project>
                ))
            }
        </div>
    </div>
)

export default Projects;
