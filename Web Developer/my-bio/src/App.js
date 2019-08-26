import React, { Component } from 'react';

class App extends Component{
    constructor() {
        super();
        this.state = { displayBio: false };
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }

    toggleDisplayBio() {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return(
            <div>
                <h1>Tad Mur</h1>
                <h2>Bio</h2>
                <p>My name is Tatsuya Tad Murao. I am a freelance web disigner and Japanese language teacher</p>
                <p>I completed KU Data Analytics Bootcamp.</p>
                {
                    this.state.displayBio ? (
                    <div>
                            <p>I live in Kansas city, MO. I currently learning React.js.
                            I graduated KU Data Analytics Bootcamp about a month ago.
                            I have learned so many computer languages within a short period of time.
                            Every day I am striving to become a full-stack web developer</p>
                            <button onClick={this.toggleDisplayBio}>SHOW LESS</button>
                    </div>) : (
                        <div><button onClick={this.toggleDisplayBio}>READ MORE</button></div>
                    )
                }
                <div>
                    <h2>Skills</h2>
                    <p>React.js, JS, Python(pd, plt, sns, scit-learn), HTML, CSS</p>
                </div>
            </div>
        )
    }
}

export default App;