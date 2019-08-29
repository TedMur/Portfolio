// Import Libraries 1
import React, { Component } from 'react';
import PROJECTS from './data/projects';

// 3 by using props, create objects that shows all properties on PROJECT
// 4 then do the styling
class Project extends Component {
    render() {
        const {title, image, description, link} = this.props.project;
        return(
            <div style={{display: 'inline-block', width: 500, margin: 20}}>
                <h3 className='project-each-title'>{title}</h3>
                <img src={image} alt='profile' style={{width: 200, height: 120}}></img>
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>
        )
    }
}

class Projects extends Component {
    render() {
        return(
            <div className='projects'>
                <h2 className='project-title'>Highlighted Projects</h2>
                <div>
                    {
                        PROJECTS.map(PROJECT => {
                            return(
                                <Project key={PROJECT.id} project={PROJECT}>{PROJECT}</Project>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}













// 2 Create project component with extension 






















export default Projects;


// class Project extends Component {
//     render() {
//             const { title, image, description, link } = this.props.project;
//             return(
//                 <div style={{display: 'inline-block', margin: 15}}>
//                     <h3>{title}</h3>
//                     <img src={image} alt='profile' style={{height: 120, width: 200}}/>
//                     <p>{description}</p>
//                     <a href={link}>{link}</a>
//                 </div>
//             )
//     }
// }
// ================================================================
// 2 Create project component with extension 
// class Projects extends Component {
//     render () {
//         return(
//             <div>
//                 <h2>Highlighted</h2>
//                 <div>
//                     { PROJECTS.map( PROJECT => {
//                         return(
//                             <Project key={PROJECT.id} project={PROJECT}/>
//                         );
//                     })}
//                 </div>
//             </div>
//         )
//     }
// }



































// // Import libraries
// import React, { Component } from 'react';
// import PROJECTS from './data/projects';

// // Make project component with extension
// class Projects extends Component {
//     render() {
//         return(
//             <div>
//                 <h2>Highlighted Projects</h2>
//                 <div>
//                     {
//                         PROJECTS.map( PROJECT => {
//                             return (
//                                 <div key={PROJECT.id}>
//                                     {PROJECT.title}
//                                 </div>
//                             );
//                         })
//                     }
//                 </div>
//             </div>
//         )
//     }
// }

// export default Projects;