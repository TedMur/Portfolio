import React from 'react';
import { connect } from 'react-redux';
import { expandInstructions, collapseInstructions } from '../action/settings';

const Instructions = props => {
    const { instructionsExpanded, expandInstructions, collapseInstructions } = props;

    if (instructionsExpanded) {
        return (
            <div>
                <h3>Instructions</h3>
                <p>Welcome to evens or odds. The game goes like this</p>
                <p>The deck is shuffled. Then choose: will the next card be even or odd?</p>
                <p>Make a choice on every draw, and see how many you get right!</p>
                <p>(Face cards don't count)</p>
                <button onClick={collapseInstructions}>Show Less</button>
            </div>
        );
    }

    return (
        <div>
            <h3>Instructions</h3>
            <p>Welcome to evens or odds. The game goes like this...</p>
            <button onClick={expandInstructions}>Read More</button>
        </div>
    )
}

export default connect(
    state => ({ instructionsExpanded: state.settings.instructionsExpanded }), 
    { expandInstructions, collapseInstructions }
)(Instructions);