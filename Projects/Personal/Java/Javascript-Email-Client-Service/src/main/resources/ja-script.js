/*
	author: joseph appeah
	date: 07/08/2016
*/

/*
This Script Requires jquery.
*/

/*Append all required libraries to head*/
window.onload = function(){
	//get jquery
	var jquery = document.createElement('script');
	jquery.src='https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js';
	document.getElementsByTagName('head')[0].appendChild(jquery);
	
	//get animate.css
	$('head').append('<link href="https://github.com/daneden/animate.css/blob/master/animate.css" />')
} 
 
 /*Font Resize on Window Resize*/
 function resizeFontById(div_id){
	$(document).ready(function(){
		var initialFontSize = getFontSize(div_id);
		resizeFont(initialFontSize ,div_id);
		$(window).resize(function(){
			resizeFont(initialFontSize ,div_id);
		});
		function getFontSize(id){        
			var initialFontSize = parseInt($("#" + id).css("font-size".replace("px","")));
			return initialFontSize;
		}
		function resizeFont(fontSize,id){
			var currentWindowSize = parseInt(Math.sqrt(Math.pow($(window).height(),2) + Math.pow($(window).width(),2)));
			var newFontSize = (fontSize*(currentWindowSize/1000));
			if(newFontSize >fontSize){newFontSize = newFontSize - (newFontSize-fontSize);}
			$("#" + id).css("font-size",newFontSize);
		}
	});
}

/*Perform action when div is reached on scrolling*/
function actionWhenReached(div_id, action){
	$(window).scroll(function(){
		var divPosition = $('#' + div_id).offset().top,
			divHeight = $('#' + div_id).outerHeight(),
			windowHeight = $(window).height(),
			currentHeight = $(this).scrollTop();
		if (currentHeight > ( ( divPosition + divHeight ) - (windowHeight)) ){
			action();
		}
	});
}

/*Animate by id. Using animations from animate.css*/
function animateById(id, animation){
	$("#" + id).addClass('animated ' + animation);
		window.setTimeout(function(){	
	$("#" + id).removeClass('animated '+ animation);
	},2000);
}