$(document).ready(function() {
		playSong();

	$(function() {
    	$( "#draggable" ).draggable();
  	});
	
});

function playSong() {
	$('#song')[0].volume = 0.5;
	$('#song')[0].load();
	$('#song')[0].play();


};