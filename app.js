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
data.forEach(function(tableData) {
    console.log(tableData);
    var row = tbody.append("tr");
});

//Use a date form in your HTML document and write JavaScript code that will listen for events and search through
//the date/time column to find rows that match user input.
