'use strict'

function askName(){
    var userName = prompt('Howdy! Whats your name?');
    return userName;
}

function askDogs(userName){
    var askDogs = prompt(userName + ', do you like dogs?') .toLowerCase();
    while((askDogs != 'yes') || (askDogs == 'no')){
        askDogs = alert('I HOPE YOU BURN IN HELL       .... just kidding !!!') 
        askDogs = prompt(userName + ', TRY AGAIN ya dingus! do you like dogs?')
    }
    return askDogs;
}

function likeDogs(askDogs){
    if (askDogsFromFunction === 'yes'){
        alert ('BELLY RUBS & TREATS FOR ALL THE DOGGOS!!!!!');    
    } else if (askDogsFromFunction === 'no'){
        alert ('I HOPE YOU BURN IN HELL       ....just kidding!!!');

    }  
}

var userNameFromFunction = askName();
var askDogsFromFunction = askDogs(userNameFromFunction);
likeDogs(askDogsFromFunction)

var today = new Date();
    var hourNow = today.getHours(); 
    var salutation;
  
    if (hourNow > 18) {
      salutation = 'Good evening ';
    }   else if (hourNow > 12) {
      salutation = 'Good afternoon ';
    }   else if (hourNow >= 0) {
      salutation = 'Good morning ';
    }   else {
      salutation = 'Welcome!';
    }
  
document.write('<h3>' + salutation + userNameFromFunction + '!' + '</h3>');


var letterAnswer = 'beagles'
var guess = 3;
var letterGuess = prompt('Which Breed is the friendliest? Bulldogs, Terriers, or Beagles?').toLowerCase();
    
for (var i = 0; i < guess; i = i + 1){
    if (letterGuess === letterAnswer){
        alert('WINNER WINNER WINNER WINNER WINNER');
        break;
    } else {
        var left = guess - i;
        letterGuess = prompt('NOPE. NOPE. Bulldogs, Terriers, or Beagles?  ' + left + ' left.');
    }
}

