'use strict'

function askName(){
    var userName = prompt('BARK TWICE IF YOURE IN MILWAUKEE');
    return userName;
}

function askDogs(){
    var askDogs = prompt(userName + 'Do you like dogs?') .toLowerCase();
    return askDogs;
}


var welcomeMessage = greeting1 + userName + '!!';



document.write(welcomeMessage);

function salutation (){
    var today = new Date();
    var hourNow = today.getHours(); 
    var salutation;
  
    if (hourNow > 18) {
      salutation = 'Good evening, Class!';
    }   else if (hourNow > 12) {
      salutation = 'Good afternoon, Class!';
    }   else if (hourNow >= 0) {
      salutation = 'Good morning!';
    }   else {
      salutation = 'Welcome!';
    }
  
    document.write('<h3>' + salutation + '</h3>');
}



