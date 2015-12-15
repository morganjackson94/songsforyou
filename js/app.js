$(document).ready(function() {
		playSong();

	$(function() {
    	$( "#draggable" ).draggable();
  	});

  	function blink(selector){
		$(selector).fadeOut(2000, function(){
		    $(this).fadeIn(2000, function(){
		        blink(this);
		    });
		});
		}
		    
	blink('.nowplaying');
	
});

function playSong() {
	$('#song')[0].volume = 0.5;
	$('#song')[0].load();
	$('#song')[0].play();


};