// Create a function for the dropdown menu
function chooseID(chosenID) {
    console.log(chosenID);

    d3.json("./samples.json").then((data) => {
        console.log(data);
    });

    // Promise Pending
    const dataPromise = d3.json("./samples.json");
    console.log("Data Promise: ", dataPromise);};
