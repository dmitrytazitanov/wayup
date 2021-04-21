var btn = document.getElementById('btn');

btn.onclick = function (e) {
	e.preventDefault();
	document.querySelector('.intro p').classList.add('red');
	document.querySelector('.dre').style.display = "none";	
}

$(function () {
	$(window).scroll(function() {
	    $('.future').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.container_form').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("flash");
	        }
	    });
	});
})