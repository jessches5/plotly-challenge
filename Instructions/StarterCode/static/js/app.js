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
    
    // Append IDs to the metadata array
    data.metadata.forEach(mData => {
        console.log(mData.id);
        d3.select("#selDataset").append("option").attr("value", mData.id).text(mData.id);
        });
        
    
    d3.select("#selDataset").value = chosenID;

    // Filter Metadata for chosen ID from dropdown
    mID = data.metadata.filter(data=> (data.id === chosenID));
       
    // Print the metadata ID
    console.log(mID);

    demoDisplay = d3.select("#sample-metadata");

    // Clear Display
    demoDisplay.html("");
    Object.entries(mID[0]).forEach(data=> 
       {
          demoDisplay.append("p").text(`${data[0]}: ${data[1]}`)
       });

       
    // BAR CHART
 
    // Filter sample data for chosenID
    sampleID = data.samples.filter(data => +(data.id) == chosenID); 
      
       
    })}; 