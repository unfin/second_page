document.getElementById('slider-left').onclick= sliderLeft;
var left = -580;
function sliderLeft () {
var polosa = document.getElementById('polosa');
left = left - 180;
if (left < -1160) {
left = -580;
}
polosa.style.left = left +'px' ;
}

document.getElementById('slider-right').onclick= sliderRight;
var right = -580;
function sliderRight () {
var polosa = document.getElementById('polosa');
right = right + 180;
if (right > 80) {
right = -580;
}
polosa.style.left = right +'px' ;
}


window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));