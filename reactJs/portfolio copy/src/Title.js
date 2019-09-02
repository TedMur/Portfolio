import React, { Component } from 'react';

// Define various titles that we want to appear in the animation.
const TITLES = [
    'a software engineer',
    'an enthusiastic learner',
    'an adventure seeker'
];

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true };

    // This lines attaches "TITLE" elements to App.js page
    componentDidMount() {
        console.log('Title component has mounted');

        this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        this.animateTitles();
    };

    // This lines dettaches "TITLE" elements from App.js page
    componentWillUnmount() {
        console.log('Title component will be unmounted');
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex, fadeIn: true });
            this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        }, 4000);
         
        console.log('this.titleInterval', this.titleInterval);
    }

    render() {
        const { fadeIn, titleIndex } = this.state;
        
        //Provides a title constant to work within code
        const title = TITLES[this.state.titleIndex];

        return(
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
        )
    }
}

export default Title;