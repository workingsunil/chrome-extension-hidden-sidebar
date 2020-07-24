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
  var sidebar = document.getElementsByClassName("nH oy8Mbf nn aeN bhZ bym");
  sidebar[0].classList.toggle("sun");
}

var main = function() {
	var more_btn = document.getElementById(":dz");
	more_btn.addEventListener("click", more_callback);
}

refresh(main);