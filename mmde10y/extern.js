var datum = new Date();

var std = datum.getHours();
var min = datum.getMinutes();
var sec = datum.getSeconds();

var tag = datum.getDate();
var mon = datum.getMonth() + 1;
var jar = datum.getFullYear();

if( tag < 10 ) { tag = "0" + tag }
if( mon < 10 ) { mon = "0" + mon }

if( std < 10 ) { std = "0" + std }  
if( min < 10 ) { min = "0" + min } 

document.getElementById('datum').innerHTML = tag +  '.' + mon + '.' + jar; 


function pruefen() {
    var bestellung = document.getElementById("bestellung");
    var vorname = document.getElementById("vorname");
    var nachname = document.getElementById("nachname");
    var adresse = document.getElementById("adresse");
    var email = document.getElementById("email");

    if (bestellung.value == "") {
        alert("Bitte geben Sie Ihre Bestellung an!");
        bestellung.focus();
        return false;
      }

      if (vorname.value == "") {
        alert("Bitte geben Sie Ihren Vornamen an!");
        vorname.focus();
        return false;
      }

    if (nachname.value == "") {
      alert("Bitte geben Sie Ihren Nachnamen an!");
      nachname.focus();                  
      return false;
    }
    
    if (adresse.value == "") {
        alert("Bitte geben Sie Ihre Adresse an!");
        adresse.focus();
        return false;
      }

    if (email.value == "") {
      alert("Bitte geben Sie Ihre E-Mail an!");
      email.focus();
      return false;
    }
  }
  