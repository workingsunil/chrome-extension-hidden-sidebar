/*
 * author: Sunil Venkatesh 
 */

function refresh(f) {
  if( /in/.test(document.readyState) ) {
    setTimeout('refresh(' + f + ')', 10);
  } else {
    f();
  }
}

var more_callback = function(){
  var sidebar = document.getElementsByClassName("nH oy8Mbf nn aeN bhZ");
  sidebar[0].classList.toggle("sun");
}

var main = function(){
  var more_btn = document.getElementById(":dz");

  if ( more_btn == undefined ) {
    more_btn = document.getElementById(":e0");
  }

  if ( more_btn == undefined ) {
    alert("couldn't register callback");
  } 

  more_btn.addEventListener("click", more_callback);
}

refresh(main);