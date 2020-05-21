'use strict'

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

