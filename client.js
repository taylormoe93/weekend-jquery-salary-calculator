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
    $( '#firstNameCell' ).append( '<tr><td>' + firstName + '</tr></td>' ); 
    $( '#lastNameCell' ).append( '<tr><td>' + lastName + '</tr></td>' );
    $( '#idCell' ).append( '<tr><td>' + idNum + '</tr></td>' );
    $( '#titleCell' ).append( '<tr><td>' + jobTitle + '</tr></td>' );
    $( '#salaryCell' ).append( '<tr><td>' + salary + '</tr></td>' );



    //empty inputs
    $( '#firstNameInput' ).val( '' );
    $( '#lastNameInput' ).val( '' );
    $( '#idInput' ).val( '' );
    $( '#titleInput' ).val( '' );
    $( '#salaryInput' ).val( '' );

} // end infoSubmit function

