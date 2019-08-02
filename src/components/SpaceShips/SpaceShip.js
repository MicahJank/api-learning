import React from 'react';

import styled from 'styled-components'; // YOU MUST INSTALL STYLED COMPONENTS BEFORE IMPORTING - use the command 'npm install --save styled-components' to install

// remember styled component syntax uses the back ticks `` - more info on the https://www.styled-components.com/ site
// VehicleCard is the name of the styled component i am creating. Whatever comes after 'styled.' is the ELEMENT i am creating (i.e right now it is a div but it could be button, p or whatever other element i want)
const VehicleCard = styled.div`
width: 50%;
background-color: #FF4136;
border-radius: 15px;
color: #111111;
padding: 10px;
margin: 20px auto;

`;
                    // Props is coming from SpaceShips.js
const SpaceShip = (props) => {

    return (
        // How it would be done without a styled component
            // <div>
            //     <h2>{props.name}</h2>

            //     <h4>Class: {props.class}</h4>
            // </div>

            // How it would be done WITH a styled component
        // Rememeber VehicleCard is the name i chose for my styled component on line 7. THEY MUST MATCH!    
        <VehicleCard>
            <h2>{props.name}</h2> 

            <h4>Class: {props.class}</h4>
        </VehicleCard>
    );

    // ABOUT PROPS
    // Remember in SpaceShips.js on line 74? THAT <SpaceShip /> component is what holds our 'props' When we say props here we are able to access ANY of those properties that we have
    // defined. In this case there are 2 properties on the <SpaceShip />: 'name' and 'class' so if we want to access those properties inside of our SpaceShip function here we will need to
    // use props. Notice on line 30 here that inside the <h2> i am grabbing {props.name} and inside the <h4> i am grabbing {props.class} these are our properties! So whatever i have
    // defined them (remember the properties are actually being defined in the <SpaceShip /> component in the SpaceShips.js file NOT HERE!) as will be shown inside of the h2 and h4 that i have here.
    // SO IN CONCLUSION. If you want to know what props.name, props.class or props.whatever is...YOU HAVE TO GO TO THE FILE WHERE THE COMPONENT IS and SEE what you have defined there.
};

export default SpaceShip; // DONT FORGET TO EXPORT!