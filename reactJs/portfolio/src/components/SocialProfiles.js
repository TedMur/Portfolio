import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = props => {
    const { link, image } = props.socialProfile;

    return (
        <div style={{ display: 'inline-block' }}>
            <a href={link}>
                <img src={image} 
                alt='social-profile' 
                style={{width: 35, height: 35, margin: 7}}/>
            </a>
        </div>
    )
}



const SocialProfiles = () => (
    <div>
        <div>
            {
                SOCIAL_PROFILES.map( SOCIAL_PROFILE => {
                    return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />;
                })
            }
        </div>
    </div>
)

export default SocialProfiles;