// Import the data from data.js.
const tableData = data;

// Reference the HTML table using d3.
var tbody = d3.select("tbody");

// Create a function that will build the table with the data from the data.js file.
function buildTable(data) {
    // Clear out any existing data.
    tbody.html("");
    // Loop through each object in the array.
    data.forEach((dataRow) => {
        // Append a row to the HTML table
        let row = tbody.append('tr');
        // Loop through each field in the dataRow and add each value as a table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td');
            // Add value from the object into each cell
            cell.text(val);
            }
        );

    })
}