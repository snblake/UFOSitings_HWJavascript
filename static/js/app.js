
// Use D3 to select the table body
var tbody = d3.select("tbody");

// from data.js
var tableData = data;

function pop_table(arr){
    tbody.text("")
// Loop through array of objects then each object
arr.forEach((entry) => {
    // Append one table row per student/grade
    var row = tbody.append("tr");

 // append one cell for data item
    row.append("td").text(entry.datetime);
    row.append("td").text(entry.city);
    row.append("td").text(entry.state);
    row.append("td").text(entry.country);
    row.append("td").text(entry.shape);
    row.append("td").text(entry.durationMinutes);
    row.append("td").text(entry.comments);

  });
}

pop_table(tableData);

 // Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#filter-btn");

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("#datetime");

button.on("click", function(){
    var user_input = inputField.property("value");
    var filtered_table = tableData.filter(entry => entry.datetime === user_input);
    // console.log (filtered_table);
    pop_table(filtered_table)
})

