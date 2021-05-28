// from data.js
var tableData = data;
var tbody = d3.select("tbody");

//collecting the data
//console.log(tableData);

//write code that appends a table to your web page and then adds new rows of data for each UFO sighting
//have a column for date/time, city, state, country, shape, and comment

//1. loop through data and console.log each UFO report
//data.forEach(function(tableData) {
 //   console.log(tableData);
//});

//2. d3 for appending table rows to HTML for each object in console
//data.forEach(function(tableData) {
  //  console.log(tableData);
  //  var row = tbody.append("tr");
//});

//3. use object.entries to console.log each object value
//data.forEach(function(tableData) {
  //  console.log(tableData);
  //  var row = tbody.append("tr");
  //  Object.entries(tableData).forEach(function([key, value]){
    //    console.log(key, value);
  //  });
    
//});

//4. use d3 to append each value (columns) to a cell in the table
data.forEach(function(tableData) {
    console.log(tableData);
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(function([key, value]){
        //console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
    
});

//Use a date form in your HTML document and write JavaScript code that will listen for events and search through
//the date/time column to find rows that match user input.

var button = d3.select("#button");
button.on("click", function() {
    tbody.html("");
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var output = tableData.filter(one => one.datetime === inputValue);
    console.log(output);
});

output.forEach((selection) => {
    var row = tbody.append("tr");
    Object.entries(selection).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});