console.log('client.js loaded');

$(document).ready(handleReady);

function handleReady() {
    console.log('Document ready');
    //click handlers go here. The two buttons. 
    $( '#submitButton' ).on('click', infoSubmit )
} // end handleReady function

function infoSubmit() {
    // target the input element by ID
    // get the value of the text input
    let firstName = $( '#firstNameInput' ).val();

    console.log( 'in infoSubmit' );
    //empty input
    $( '#firstNameInput' ).val( '' );
} // end infoSubmit function

