console.log('client.js loaded');

$(document).ready(handleReady);

function handleReady() {
    console.log('Document ready');
    //click handlers go here. The two buttons. 
    $( '#submitButton' ).on('click', infoSubmit )
} // end handleReady function

function infoSubmit() {
    console.log( 'in infoSubmit' );
    // target the input element by ID
    // get the value of the text input
    let firstName = $( '#firstNameInput' ).val();
    let lastName = $( '#lastNameInput' ).val();
    let idNum = $( '#idInput' ).val();
    let jobTitle = $( '#titleInput' ).val();
    let salary = $( '#salaryInput' ).val(); 
    
    //Append the entered info into the table
    $( '#firstNameCell' ).append('<tr><td>' + firstName + '</tr></td>'); // it goes into the first box. Now I need to incorporate appending a new cell.




    //empty inputs
    $( '#firstNameInput' ).val( '' );
    $( '#lastNameInput' ).val( '' );
    $( '#idInput' ).val( '' );
    $( '#titleInput' ).val( '' );
    $( '#salaryInput' ).val( '' );

} // end infoSubmit function

