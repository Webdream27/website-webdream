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



	function austauschen(id, quelle) { 
		document.getElementById(id).src = quelle; 
		}
		
		
		
  function pruefen() {
    var nachname = document.getElementById("nachname");
    var email = document.getElementById("email");
    if (nachname.value == "") {
      alert("Bitte geben Sie Ihren Nachnamen an!");
      nachname.focus();
      return false;
    }
    
    if (email.value == "") {
      alert("Bitte geben Sie Ihre E-Mail an!");
      email.focus();
      return false;
    }
  }
  
  