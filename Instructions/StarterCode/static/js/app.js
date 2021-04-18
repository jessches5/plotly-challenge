// Create a function for the dropdown menu
function chooseID(chosenID){

    // Print ID in dropdown
    console.log(chosenID);
 
    // Load the json data
    d3.json("./samples.json").then((data) => {

    // Print the json data
    console.log(data);
 
    // Clear the dropdown menu
    d3.select("#selDataset").html("");   
    
    })}; 