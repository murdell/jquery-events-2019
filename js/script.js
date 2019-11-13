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

/*Make the first button hide when clicked
    $("#button-effects1").click(function()
        {   $('#button-effects1').hide('fast'); }
    );
*/


/*When the button is clicked, the paragraph above vanishes. When the button is clicked again, the paragraph reappears	
	$("#button-effects1").click(function() {
		$("#para1").toggle(1000);
	}
    );
    	$("#button-effects2").click(function() {
		$("#para2").toggle(1000);
	}
    );
	$("#button-effects3").click(function() {
		$("#para3").toggle(1000);
	}
    );
	$("#button-effects4").click(function() {
		$("#para4").toggle(1000);
	}
    );
	$("#button-effects5").click(function() {
		$("#para5").toggle(1000);
	}
    );
	$("#button-effects6").click(function() {
		$("#para6").toggle(1000);
	}
    );

*/


//slideToggle instead of toggle (as above) to show or hide the paragraph		
	    $("#button-effects1").click(function() {
		$("#para1").slideToggle(1000);
	}
    );
    	$("#button-effects2").click(function() {
		$("#para2").slideToggle(1000);
	}
    );
	$("#button-effects3").click(function() {
		$("#para3").slideToggle(1000);
	}
    );
	$("#button-effects4").click(function() {
		$("#para4").slideToggle(1000);
	}
    );
	$("#button-effects5").click(function() {
		$("#para5").slideToggle(1000);
	}
    );
	$("#button-effects6").click(function() {
		$("#para6").slideToggle(1000);
	}
    );



//fadeTo in conjunction with mouseenter and mouseleave to modify the button. Fade to 50% opacity on mouseenter and fade back to 100% on mouseleave 
/* sample code
$(".jquery .bottom_button").mouseenter(function() {
	$(".jquery .bottom_button").fadeTo("slow",0.5);
	}	)
		$(".jquery .bottom_button").mouseleave(function() {
	$(".jquery .bottom_button").fadeTo("slow",1);
	}	);
*/	
	$("#button-effects1").mouseenter(function() {
	    $("#button-effects1").fadeTo("slow",0.5);
    }	)
        $("#button-effects1").mouseleave(function() {
	        $("#button-effects1").fadeTo("slow",1);
	}	);
	$("#button-effects2").mouseenter(function() {
	    $("#button-effects2").fadeTo("slow",0.5);
    }	)
        $("#button-effects2").mouseleave(function() {
	        $("#button-effects2").fadeTo("slow",1);
	}	);
	$("#button-effects3").mouseenter(function() {
	    $("#button-effects3").fadeTo("slow",0.5);
    }	)
        $("#button-effects3").mouseleave(function() {
	        $("#button-effects3").fadeTo("slow",1);
	}	);
	$("#button-effects4").mouseenter(function() {
	    $("#button-effects4").fadeTo("slow",0.5);
    }	)
        $("#button-effects4").mouseleave(function() {
	        $("#button-effects4").fadeTo("slow",1);
	}	);
	$("#button-effects5").mouseenter(function() {
	    $("#button-effects5").fadeTo("slow",0.5);
    }	)
        $("#button-effects5").mouseleave(function() {
	        $("#button-effects5").fadeTo("slow",1);
	}	);
	$("#button-effects6").mouseenter(function() {
	    $("#button-effects6").fadeTo("slow",0.5);
    }	)
        $("#button-effects6").mouseleave(function() {
	        $("#button-effects6").fadeTo("slow",1);
	}	);

    





}); 