// Remember to import useState and useEffect if you are going to be needing to use them!
// Here i am going to be making an API call on line 14, API calls should always be inside of a useEffect!
import React, {useState, useEffect} from 'react';

// DONT FORGET AXIOS! before importing axios from 'axios' remember you need to install it first!
// for npm use the command - 'npm install axios'
// for yarn use the command - 'yarn add axios'
// MORE INFO ABOUT AXIOS HERE - https://github.com/axios/axios -
import axios from 'axios'; 

// On line 40 we are creating the SpaceShip component, remember we have to import the components we want to use, so this step is important! Without this 
// import here the program would have no idea what 'SpaceShip' is on line 40 and would throw an error!
import SpaceShip from './SpaceShip.js';

const SpaceShips = () => {

    // Line 23 is our state! Since what i am trying to get out of the API is a list of vehicles i have chose the variables 'vehicles' and 'setVehicles'
                                  // useState sets the INITIAL value of 'vehicles'. Whatever is inside of the useState ( ) will be set as the default value.
                                  // So in this case the default value of 'vehicles' is and empty array []
    //REMEMBER that 'setVehicles' is a FUNCTION. Whenever you call this function (i.e. setVehicles(someValue) ) you will CHANGE the state of the 'vehicles' variable!
    // If i called the setVehicles function like so: setVehicles("Lalala"). That will change the value of 'vehicles' from the initial value (the empty array []) to the NEW value 
    // that i specified, in this case "Lalala".  
    const [vehicles, setVehicles] = useState([]);

    // useEffect is where you will want to put your axios api call. Make sure to follow the same syntax!
    useEffect(() => {

        // LINE 31 IS THE API CALL. Here i am using axios.get to request the DATA from the link i specify.
        // In this case i want to grab the 'vehicles' data from the swapi api. IF YOU WANT TO SEE ALL THE DATA THAT YOU CAN GRAB then change the link to just 'https://swapi.co/api' and console
        // log the data like i did  below. You will see all the Data that you can grab.
        axios.get('https://swapi.co/api/vehicles')

            // apiObject is the data that you will be getting back from the api call above. If you dont know what it is...CONSOLE LOG it and find out!
            .then(apiObject => {
                console.log('apiObject', apiObject);
                // console.log('apiObject.data', apiObject.data);
                // console.log('apiObject.data.results', apiObject.data.results);
                // console.log('apiObject.data.results[0]', apiObject.data.results[0]);


                // remember on line 23 where our state is? I want my vehicle variable to be set to a list of vehicle data from the api. Above you can see i
                // console logged the api data at different levels to get a better idea of what i was working with. 
                // REMEMBER: in order to change the 'vehicles' state i MUST USE the 'setVehicles' function!
                setVehicles(apiObject.data.results); 
                // Above i am calling the setVehicles function and setting the state of 'vehicles' to (apiObject.data.results).
                // What is apiObject.data.results? CONSOLE LOG IT IF YOU DONT KNOW. 
                
                // You will see that it is an ARRAY of objects. Each object in that array is a different vehicle with different information. This means that i can use
                // the 'vehicles' now to start creating my information that i want to display.
            })

            .catch(err => {
                alert(err);
            });
    }, []); // DONT FORGET, you need an empty array here!!


    // Now we get to the return statement of the SpaceShips function we created on line 15.
    // This is what will be exported out of here when we use the 'export default SpaceShips;' below.

    // REMEMBER that 'vehicles' now contains an ARRAY of OBJECTS. Because it is an array we can use the .map function on it.
    // Depending on how many items are in the array we are going to return a new component '<SpaceShip />'. In this case there are 10 items inside of the 'vehicles' array.
    // SO that means we will be creating 10 <SpaceShip /> components. For each component we will be setting some property values (i.e the name and the class of each vehicle).
    // We are setting each property = the vehicle.name and the vehicle.vehicle_class. 
    // THIS IS EXTREMELY IMPORTANT! The vehicle.name and vehicle.vehicle_class are NOT COMING FROM NOWHERE.
    // If you console log 'vehicles' and look inside of each OBJECT in the array. You will see that every object has a property called 'name' and 'vehicle_class'!
    // THAT IS WHERE THE PROPERTIES ARE COMING FROM. 'vehicle' in the map function is the OBJECT in the ARRAY. AND EVERY on of those OBJECTS has the 'name' property and the 'vehicle_class' property!
    // This is what lets each SpaceShip component display DIFFERENT information from eachother. REMEMBER that all this information is then being passed down into the 'SpaceShip.js' file as
    // 'props' and we are then accessing this data and putting it into our h2 and h4!
   return (
  <div>
    {vehicles.map(vehicle => {
                       //{               THIS IS ALL PROPS                 }  
        return <SpaceShip name={vehicle.name} class={vehicle.vehicle_class} />           
        })}
  </div>
       
    
   );
};

export default SpaceShips; // just like in 'SpaceShip.js' we need to export SpaceShips here because we want to IMPORT it into App.js