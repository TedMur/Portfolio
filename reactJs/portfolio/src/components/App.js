import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import Contacts from './Contacts';

class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return (
            <div>
                <div className='Profile'>
                    <h1 className='Name'>Tatsuya Tad Murao</h1>
                    <Title />
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
                <Projects />
                <SocialProfiles />
            </div>
        )
    }
}


export default App;

