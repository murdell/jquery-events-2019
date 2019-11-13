$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1-card").removeClass('highlight_stream');
		$(".stream2-card").removeClass('highlight_stream');
		$(".stream3-card").removeClass('highlight_stream');
	  	$(".stream1-card").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1-card").removeClass('highlight_stream');
		$(".stream2-card").removeClass('highlight_stream');
		$(".stream3-card").removeClass('highlight_stream');
	  	$(".stream2-card").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1-card").removeClass('highlight_stream');
		$(".stream2-card").removeClass('highlight_stream');
		$(".stream3-card").removeClass('highlight_stream');
	  	$(".stream3-card").addClass('highlight_stream');
	});
	$("p").click(function() {
		$("p").addClass('color-text'); }
	);
	
	$("p").dblclick(function() {
		$("p").removeClass('color-text');}
	);		
	
	$("h2").hover(function()
		{    $("h2").addClass('h2-background');   $(this).addClass('h2-font-size');    }, 
	    	function()
	    {    $("h2").removeClass('h2-background');   $(this).removeClass('h2-font-size'); 		}
	);	

	$(".bottom_button").hover(function()
		{    $("body").addClass('page-background-color');    }, 
	    	function()
	    {    $("body").removeClass('page-background-color');  	}
	);	

/*
//Make the first button hide when clicked
	$(".html .bottom_button").click(function() {
	$(".html .bottom_button").hide(1000);
	}
	);

//When the button is clicked, the paragraph above vanishes. When the button is clicked again, the paragraph reappears	
	$(".mysql .bottom_button").click(function() {
		$(".mysql p").toggle();
		$(".msql p").hide(1000);
	}
	);
	
//slideToggle instead of toggle (from the last Challenge) to show or hide the paragraph		
	$(".python .bottom_button").click(function() {
		$(".python p").slideToggle(800);

	}
	);

//fadeTo in conjunction with mouseenter and mouseleave to modify the button. Fade to 50% opacity on mouseenter and fade back to 100% on mouseleave 
	$(".jquery .bottom_button").mouseenter(function() {
	$(".jquery .bottom_button").fadeTo("slow",0.5);
	}	)
		$(".jquery .bottom_button").mouseleave(function() {
	$(".jquery .bottom_button").fadeTo("slow",1);
	}	);
	
	;
	
*/	
}); 