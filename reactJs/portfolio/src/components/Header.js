import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
    const style = {
        display: 'inline-block',
        margin: 10,
        marginBotton: 30,
    }

    return (
        <div>
            <div className='Header'>
                <h3 style={style}><Link to='/'>HOME</Link></h3>
                <h3 style={style}><Link to='/jokes'>JOKES</Link></h3>
                <h3 style={style}><Link to='/music-master'>MUSIC API</Link></h3>
                <h3 style={style}><Link to='/evens-or-odds'>CARD GAME API</Link></h3>
                <h3 style={style}><Link to='/evens-or-odds'>WROK</Link></h3>
                <h3 style={style}><Link to='/evens-or-odds'>ABOUT</Link></h3>
                <h3 style={style}><Link to='/evens-or-odds'>CONTACT</Link></h3>
            </div>
            { children }
        </div>
    )
}
export default Header;