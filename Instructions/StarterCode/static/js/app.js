//from data.js
var tableData = data;
// get table references
var tbody = d3.select("tbody");
// YOUR CODE HERE!
data.forEach((input)=> {
    
     // Append a row to the table body
     var row = tbody.append("tr");
     // Loop through each field in the dataRow and add
     // each value as a table cell (td)
     Object.values(input).forEach((val) => {
       var cell = row.append("td");
         cell.text(val);
       }
     );
});
function handleFilter (){
    var filteredData = data
    var captureInput = d3.select('#datetime').property('value')
    console.log(captureInput)
    tbody.html("");
    filteredData = filteredData.filter(row => row.datetime == captureInput);
    console.log(filteredData)
    filteredData.forEach((input)=> {
    
        // Append a row to the table body
        var row = tbody.append("tr");
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(input).forEach((val) => {
          var cell = row.append("td");
            cell.text(val);
          }
        );
   });
}
d3.select("#filter-btn").on("click", handleFilter);
