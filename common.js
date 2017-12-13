window.addEventListener('scroll', function (e) {
	//console.log(document.body.scrollTop);
  
  var $parallax = document.getElementById('parallax');

  var posY = document.documentElement.scrollTop * 0.3;
  $parallax.style.backgroundPosition = '0px -'+ (posY+250)+'px';
})