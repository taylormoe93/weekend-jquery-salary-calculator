console.log('client.js loaded'); // connected with JS

$(document).ready(handleReady); // DOM has been loaded

let totalMonthly = 0; // declare totalMonthly variable in global scope

// handleReady function holds the submit button click listener
// and the delete button click listener
function handleReady() {
    console.log('Document ready');
    //click handlers go here
    $( '#submitButton' ).on( 'click', infoSubmit ) // Submit button
    $( '#tableContainer' ).on( 'click', '.deleteButton', removeInfo ) // Delete button
} // end handleReady function

// infoSubmit function declares variables for the inputs, 
// captures the inputted info,
// appends it to the table,
// empties the inputs,
// and then calculates the monthly cost

function infoSubmit() {
    console.log( 'in infoSubmit' );
    // target the input element by ID
    // get the value of the text input
    let firstName = $( '#firstNameInput' ).val();
    let lastName = $( '#lastNameInput' ).val();
    let idNum = $( '#idInput' ).val();
    let jobTitle = $( '#titleInput' ).val();
    let salary = Number( $( '#salaryInput' ).val() ); 
    
    //Append the entered info into the table
    $( '#tableContainer' ).append(`
    <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${idNum}</td>
    <td>${jobTitle}</td>
    <td>${salary}</td>
    <td><button class="deleteButton">Delete</button></td>
    </tr>
    `)

    //empty inputs
    $( '#firstNameInput' ).val( '' );
    $( '#lastNameInput' ).val( '' );
    $( '#idInput' ).val( '' );
    $( '#titleInput' ).val( '' );
    $( '#salaryInput' ).val( '' );

    //Monthly cost calculator
        totalMonthly =  totalMonthly + (salary / 12);
        $('#monthlyCounter').empty();
        $('#monthlyCounter').append(Math.round(totalMonthly));
        console.log(totalMonthly);
        // if totalMonthly is over 20000 then make the counter red
        if(totalMonthly > 20000) {
            $('#totalMonthlyCounter').css({"background-color": "red"});
        }

} // end infoSubmit function

// removeInfo function deletes a row from the table when the Delete button is clicked
function removeInfo() {
    console.log( 'User info deleted' );
    $(this).closest('tr').remove();
}