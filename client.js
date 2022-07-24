console.log('client.js loaded');

$(document).ready(handleReady);

let totalMonthly = 0;

function handleReady() {
    console.log('Document ready');
    //click handlers go here
    $( '#submitButton' ).on( 'click', infoSubmit )
    $( '#tableContainer' ).on( 'click', '.deleteButton', removeInfo )
} // end handleReady function

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
    // let monthlyCosts =
    // Take the inputted info and put it into a variable that displays on bottom of screen as a heading.
    // Link to the heading with an id and use jquery to update the heading with the number.
    



} // end infoSubmit function


function removeInfo() {
    console.log( 'User info deleted' );
    $(this).closest('tr').remove();
}