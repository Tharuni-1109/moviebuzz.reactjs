import React from 'react';

const Movies =(props) => {
    return (
        <div>
        <h2>HeroName:{props.heroName} and villanName:{props.villanName}</h2>
        
            {props.children}
        </div>
    );
};

export default Movies;