import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profilePhoto.jpg';
import Title from './Title';

class App extends Component {
    // constructor() {
    //     super();
    //     this.state = {displayBio: false};
    //     this.state = {displaySkills: false};
    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    //     this.toggleDisplaySkills = this.toggleDisplaySkills.bind(this);
    // }

    // Giving expand and collapse function to a button

    // toggleDisplayBio() {
    //     this.setState({ displayBio: ! this.state.displayBio });
    // }

    // toggleDisplaySkills() {
    //     this.setState ({ displaySkills: ! this.state.displaySkills });
    // }

    // Cleaner way of writing 
    state = { displayBio: false };
    state = { displaySkills: false }; 

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    toggleDisplaySkills = () => {
        this.setState({ displaySkills: !this.state.displaySkills });
    }

    render() {
        return (
            <div>
                <div className='top'>
                    <img src={profile} alt='profile' className="profile"></img>
                    <h1 className='Name'>Tatsuya Tad Murao</h1>
                    { this.state.displayBio ? <Title />: null }
                    <p className='Summary'>I am a freelance web designer/developer with experience primarily in HTML5, CSS3, Bootstrap, JavaScript and Python, and becoming familiar with React.js.
                        I am passionate and enjoy learning new technologies which have helped me to complete 22 weeks at KU Data Analytics Bootcamp. 
                　  </p>
                    {
                        this.state.displayBio ? (
                        <div>
                            <p>
                                Through coursework and group projects at the Bootcamp, I developed practical skills for web development languages and software, like Python libraries, database management software, and data visualization tools. I am currently working as a web designer for a client’s website by adding functions and reorganizing the appearance. I am also working on my React.js project to improve my skillsets.
                                Not only have I developed technological skills, but I am also improving interpersonal skills, flexibility, and proactiveness by working as a retail sales associate, volunteering as a translator and interpreter and teaching Japanese language and culture.
                            </p>
                            <button onClick={this.toggleDisplayBio} className='button'>Read Less</button>

                        </div>
                        
                        ) : (
                            <div>
                                <button onClick={this.toggleDisplayBio} className='button'>Show More</button>
                            </div>
                        )
                    }
                </div>
                <div>
                <hr />
                    <h2>Skills</h2>
                    <ul>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>MySQL</li>
                    </ul>
                    <ul>
                        {this.state.displaySkills ? (
                            <div>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>GitHub</li>
                                <button onClick={this.toggleDisplaySkills} className='button'>Show Less</button>
                            </div>
                        ) : (
                            <div>
                                <button onClick={this.toggleDisplaySkills} className='button'>Show More</button>
                            </div>
                            )
                        }
                    </ul>
                </div>
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;

// constructor() {
    //     super();
    //     this.state = { displayBio: false };
    //     this.state = { displaySkills: false };
    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    //     this.toggleDisplaySkills = this.toggleDisplaySkills.bind(this);
    // }

    // // Giving expand and collapse function to a button

    // // Giving expand and collapse function to a button by flipping state but less coding
    // toggleDisplayBio() {
    //     this.setState({ displayBio: !this.state.displayBio });
    // }

    // toggleDisplaySkills() {
    //     this.setState({ displaySkills: !this.state.displaySkills });
    // }
// ==============================================================================

//     <div>
//     <h1>Tatsuya Tad Murao</h1>
//     <p>I am a freelance web designer/developer with experience primarily in HTML5, CSS3, Bootstrap, JavaScript and Python, and becoming familiar with React.js.
//        I am passionate and enjoy learning new technologies which have helped me to complete 22 weeks at KU Data Analytics Bootcamp. 
//     </p>
//     {
//         this.state.displayBio ? (
//         <div>
//             <p>
//                 Through coursework and group projects at the Bootcamp, I developed practical skills for web development languages and software, like Python libraries, database management software, and data visualization tools. I am currently working as a web designer for a client’s website by adding functions and reorganizing the appearance. I am also working on my React.js project to improve my skillsets.
//                 Not only have I developed technological skills, but I am also improving interpersonal skills, flexibility, and proactiveness by working as a retail sales associate, volunteering as a translator and interpreter and teaching Japanese language and culture.
//             </p>
//             <button onClick={this.toggleDisplayBio}>Show Less</button>
//         </div> 
//         ) : (
//         <div>
//             <button onClick={this.toggleDisplayBio}>Read More</button>
//         </div>
//         )
//     }<hr />
//     <div>
//         <h2>Skills</h2>
//         <ul>
//             <li>JavaScript</li>
//             <li>Python</li>
//             <li>MySQL</li>
//         </ul>
//         <ul>
//             {this.state.displaySkills ? (
//             <div>
//                 <li>HTML5</li>
//                 <li>CSS3</li>
//                 <li>GitHub</li>
//                 <button onClick={this.toggleDisplaySkills}>Show Less</button>
//             </div>
//             ) : (
//                 <div>
//                     <button onClick={this.toggleDisplaySkills}>Show More</button>
//                 </div>
//             )
            
//             }
//         </ul>
//     </div>
// </div>
// )