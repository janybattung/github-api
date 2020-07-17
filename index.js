'use strict';

function getUser(username) {
    fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(responseJson =>
        displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    console.log("This is a message");
    console.log(responseJson[0]);

    if (responseJson.message == "error") {
        $('.results').append(`<h2>This username is not found. Please try again.</h2>`);
    }
    else {
        $('.results').append(`<h2>You requested for a : </h2>
        `); 
        for (let index=0; index<responseJson.length; index++) {
            console.log(index);
            $('.results').append(`
            <a class="" target="_blank"
            href=${responseJson[index].html_url}>${responseJson[index].name}</a>
            <br>`); 
        }  
    $('.results').removeClass('hidden');

    }
    
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let user = $('#jsuser').val();
        console.log(user);
        getUser(user);
    });
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
})
