	$(document).ready(function(){
		var K = jQuery.noConflict();
				
		
		K(".randomizeRow1").html(K(".randomizeRow1 .randomizedBlock").sort(function(){
		    return Math.random()-0.5;
		}));
		K(".randomizeRow2").html(K(".randomizeRow2 .randomizedBlock").sort(function(){
		    return Math.random()-0.5;
		}));
		K(".randomizeRow3").html(K(".randomizeRow3 .randomizedBlock").sort(function(){
		    return Math.random()-0.5;
		}));
		K(".randomizeRow4").html(K(".randomizeRow4 .randomizedBlock").sort(function(){
		    return Math.random()-0.5;
		}));
		K(".randomizeRow5").html(K(".randomizeRow5 .randomizedBlock").sort(function(){
		    return Math.random()-0.5;
		}));
		K(".randomizeRow6").html(K(".randomizeRow6 .randomizedBlock").sort(function(){
		    return Math.random()-0.5;
		}));
		
		K(".block").hover(function(){
		   K(this).addClass("hover");
		},
		function(){
		  var self = this;
		  setTimeout(function() {
		         K(self).removeClass('hover');
		  },500);
		});
		
		K("#hi").typed({
		strings: ["Hi,"],
		typeSpeed: 30
      	});
      	K( ".typed-cursor" ).replaceWith( "" );

      	K("#im").typed({
		strings: ["^200I'm"],
		typeSpeed: 30
      	});
      	K( ".typed-cursor" ).replaceWith( "" );

      	K("#Asaph").typed({
		strings: ["^400Asaph"],
		typeSpeed: 30
      	});
      	K( ".typed-cursor" ).replaceWith( "" );
      	
      	
      	
      	K("#i").typed({
		strings: ["^1000I"],
		typeSpeed: 30
      	});
      	K( ".typed-cursor" ).replaceWith( "" );

      	K("#make").typed({
		strings: ["^1200make "],
		typeSpeed: 30
      	});
      	K( ".typed-cursor" ).replaceWith( "" );

	    K("#stuff").typed({
	    strings: ["^1500websites", "apps", "music", "stuff :)"],
	        typeSpeed: 30, // typing speed
	        backDelay: 300, // pause before backspacing
	        loop: false, // loop on or off (true or false)
	        loopCount: false, // number of loops, false = infinite
	    });
      	K( ".typed-cursor" ).replaceWith( "" );
      	
/*
      	K("#i2").typed({
		strings: ["^5200Check"],
		typeSpeed: 30
      	});
      	K( ".typed-cursor" ).replaceWith( "" );
*/

      	K("#love").typed({
		strings: ["^5500Enjoy!"],
		typeSpeed: 30
      	});
      	K( ".typed-cursor" ).replaceWith( "" );
      	
/*
      	K("#God").typed({
		strings: ["^5700out!"],
		typeSpeed: 30
      	});
      	K( ".typed-cursor" ).replaceWith( "" );
*/

		
/*
		K('#hi').addClass('animated bounceInLeft');
		K('#Asaph').addClass('animated flipInX');
		K('#im').addClass('animated fadeIn');
		K('#i').addClass('animated fadeIn');
		K('#make').addClass('animated rotateInDownLeft');
		K('#stuff').addClass('animated fadeInDown');
		K('#i2').addClass('animated fadeIn');
		K('#love').addClass('animated rotateInDownLeft');
		K('#God').addClass('animated zoomInDown'); 
*/
	});
	
			
		
	function checkHome(){ 
		var K = jQuery.noConflict();
		K('#st-panel-1').attr('checked',true);
		var L = jQuery.noConflict();
		L('.st-scroll').css({"-webkit-transform": "translateY(0%)"});
		L('.st-scroll').css({"-moz-transform": "translateY(0%)"});
		L('.st-scroll').css({"-o-transform": "translateY(0%)"});
		L('.st-scroll').css({"-ms-transform": "translateY(0%)"});
		L('.st-scroll').css({"transform": "translateY(0%)"});
		
		var M = jQuery.noConflict();
		M('#st-control-1').css("left", "-100%");
		M('#st-control-1link').css("left", "-100%");
		
		M('#st-control-2').css("left", "-114%");
		M('#st-control-2link').css("left", "-114%");
	
		M('#st-control-3').css("left", "-128%");
		M('#st-control-3link').css("left", "-128%");
		
		M('#st-control-4').css("left", "-142%");
		M('#st-control-4link').css("left", "-142%");
		
		M('#st-control-5').css("left", "-156%");
		M('#st-control-5link').css("left", "-156%");
		
		M('#st-control-6').css("left", "-170%");
		M('#st-control-6link').css("left", "-170%");
		
		M('#st-control-7').css("left", "-185%");
		M('#st-control-7link').css("left", "-185%");
	}	
	
	
	function checkAbout(){ 
		var K = jQuery.noConflict();
		K('#st-panel-2').attr('checked',true);
		var L = jQuery.noConflict();
		L('.st-scroll').css({"-webkit-transform": "translateY(-100%)"});
		L('.st-scroll').css({"-moz-transform": "translateY(-100%)"});
		L('.st-scroll').css({"-o-transform": "translateY(-100%)"});
		L('.st-scroll').css({"-ms-transform": "translateY(-100%)"});
		L('.st-scroll').css({"transform": "translateY(-100%)"});

		var M = jQuery.noConflict();
		M('#st-control-1').css("left", "0%");
		M('#st-control-1link').css("left", "0%");
		
		M('#st-control-2').css("left", "14%");
		M('#st-control-2link').css("left", "14%");
		M('#st-control-2link').css("color", "#4FD5D6");
	
		M('#st-control-3').css("left", "28%");
		M('#st-control-3link').css("left", "28%");
		M('#st-control-3link').css("color", "#FFF");
		
		M('#st-control-4').css("left", "42%");
		M('#st-control-4link').css("left", "42%");
		M('#st-control-4link').css("color", "#FFF");
		
		M('#st-control-5').css("left", "56%");
		M('#st-control-5link').css("left", "56%");
		M('#st-control-5link').css("color", "#FFF");
		
		M('#st-control-6').css("left", "70%");
		M('#st-control-6link').css("left", "70%");
		M('#st-control-6link').css("color", "#FFF");
		
		M('#st-control-7').css("left", "85%");
		M('#st-control-7link').css("left", "85%");
		M('#st-control-7link').css("color", "#FFF");
	}

	
	function checkProjects(){ 
		var K = jQuery.noConflict();
		K('#st-panel-3').attr('checked',true);
		var L = jQuery.noConflict();
		L('.st-scroll').css({"-webkit-transform": "translateY(-200%)"});
		L('.st-scroll').css({"-moz-transform": "translateY(-200%)"});
		L('.st-scroll').css({"-o-transform": "translateY(-200%)"});
		L('.st-scroll').css({"-ms-transform": "translateY(-200%)"});
		L('.st-scroll').css({"transform": "translateY(-200%)"});
				
		var M = jQuery.noConflict();
		M('#st-control-1').css("left", "0%");
		M('#st-control-1link').css("left", "0%");
		
		M('#st-control-2').css("left", "14%");
		M('#st-control-2link').css("left", "14%");
		M('#st-control-2link').css("color", "#FFF");
	
		M('#st-control-3').css("left", "28%");
		M('#st-control-3link').css("left", "28%");
		M('#st-control-3link').css("color", "#4FD5D6");
		
		M('#st-control-4').css("left", "42%");
		M('#st-control-4link').css("left", "42%");
		M('#st-control-4link').css("color", "#FFF");
		
		M('#st-control-5').css("left", "56%");
		M('#st-control-5link').css("left", "56%");
		M('#st-control-5link').css("color", "#FFF");
		
		M('#st-control-6').css("left", "70%");
		M('#st-control-6link').css("left", "70%");
		M('#st-control-6link').css("color", "#FFF");
		
		M('#st-control-7').css("left", "85%");
		M('#st-control-7link').css("left", "85%");
		M('#st-control-7link').css("color", "#FFF");
	}
	
	function checkBlog(){ 
		var K = jQuery.noConflict();
		K('#st-panel-4').attr('checked',true);
		var L = jQuery.noConflict();
		L('.st-scroll').css({"-webkit-transform": "translateY(-300%)"});
		L('.st-scroll').css({"-moz-transform": "translateY(-300%)"});
		L('.st-scroll').css({"-o-transform": "translateY(-300%)"});
		L('.st-scroll').css({"-ms-transform": "translateY(-300%)"});
		L('.st-scroll').css({"transform": "translateY(-300%)"});
		
		var M = jQuery.noConflict();
		M('#st-control-1').css("left", "0%");
		M('#st-control-1link').css("left", "0%");
		
		M('#st-control-2').css("left", "14%");
		M('#st-control-2link').css("left", "14%");
		M('#st-control-2link').css("color", "#FFF");
	
		M('#st-control-3').css("left", "28%");
		M('#st-control-3link').css("left", "28%");
		M('#st-control-3link').css("color", "#FFF");
		
		M('#st-control-4').css("left", "42%");
		M('#st-control-4link').css("left", "42%");
		M('#st-control-4link').css("color", "#4FD5D6");
		
		M('#st-control-5').css("left", "56%");
		M('#st-control-5link').css("left", "56%");
		M('#st-control-5link').css("color", "#FFF");
		
		M('#st-control-6').css("left", "70%");
		M('#st-control-6link').css("left", "70%");
		M('#st-control-6link').css("color", "#FFF");
		
		M('#st-control-7').css("left", "85%");
		M('#st-control-7link').css("left", "85%");
		M('#st-control-7link').css("color", "#FFF");
	}
	
	function checkMusic(){ 
		var K = jQuery.noConflict();
		K('#st-panel-5').attr('checked',true);
		var L = jQuery.noConflict();
		L('.st-scroll').css({"-webkit-transform": "translateY(-400%)"});
		L('.st-scroll').css({"-moz-transform": "translateY(-400%)"});
		L('.st-scroll').css({"-o-transform": "translateY(-400%)"});
		L('.st-scroll').css({"-ms-transform": "translateY(-400%)"});
		L('.st-scroll').css({"transform": "translateY(-400%)"});
				
		var M = jQuery.noConflict();
		M('#st-control-1').css("left", "0%");
		M('#st-control-1link').css("left", "0%");
		
		M('#st-control-2').css("left", "14%");
		M('#st-control-2link').css("left", "14%");
		M('#st-control-2link').css("color", "#FFF");
	
		M('#st-control-3').css("left", "28%");
		M('#st-control-3link').css("left", "28%");
		M('#st-control-3link').css("color", "#FFF");
		
		M('#st-control-4').css("left", "42%");
		M('#st-control-4link').css("left", "42%");
		M('#st-control-4link').css("color", "#FFF");
		
		M('#st-control-5').css("left", "56%");
		M('#st-control-5link').css("left", "56%");
		M('#st-control-5link').css("color", "#4FD5D6");
		
		M('#st-control-6').css("left", "70%");
		M('#st-control-6link').css("left", "70%");
		M('#st-control-6link').css("color", "#FFF");
		
		M('#st-control-7').css("left", "85%");
		M('#st-control-7link').css("left", "85%");
		M('#st-control-7link').css("color", "#FFF");
	}
	
	function checkPhotography(){ 
		var K = jQuery.noConflict();
		K('#st-panel-6').attr('checked',true);
		var L = jQuery.noConflict();
		L('.st-scroll').css({"-webkit-transform": "translateY(-500%)"});
		L('.st-scroll').css({"-moz-transform": "translateY(-500%)"});
		L('.st-scroll').css({"-o-transform": "translateY(-500%)"});
		L('.st-scroll').css({"-ms-transform": "translateY(-500%)"});
		L('.st-scroll').css({"transform": "translateY(-500%)"});
				
		var M = jQuery.noConflict();
		M('#st-control-1').css("left", "0%");
		M('#st-control-1link').css("left", "0%");
		
		M('#st-control-2').css("left", "14%");
		M('#st-control-2link').css("left", "14%");
		M('#st-control-2link').css("color", "#FFF");
	
		M('#st-control-3').css("left", "28%");
		M('#st-control-3link').css("left", "28%");
		M('#st-control-3link').css("color", "#FFF");
		
		M('#st-control-4').css("left", "42%");
		M('#st-control-4link').css("left", "42%");
		M('#st-control-4link').css("color", "#FFF");
		
		M('#st-control-5').css("left", "56%");
		M('#st-control-5link').css("left", "56%");
		M('#st-control-5link').css("color", "#FFF");
		
		M('#st-control-6').css("left", "70%");
		M('#st-control-6link').css("left", "70%");
		M('#st-control-6link').css("color", "#4FD5D6");
		
		M('#st-control-7').css("left", "85%");
		M('#st-control-7link').css("left", "85%");
		M('#st-control-7link').css("color", "#FFF");
	}
	
	function checkFood(){ 
		var K = jQuery.noConflict();
		K('#st-panel-7').attr('checked',true);
		var L = jQuery.noConflict();
		L('.st-scroll').css({"-webkit-transform": "translateY(-600%)"});
		L('.st-scroll').css({"-moz-transform": "translateY(-600%)"});
		L('.st-scroll').css({"-o-transform": "translateY(-600%)"});
		L('.st-scroll').css({"-ms-transform": "translateY(-600%)"});
		L('.st-scroll').css({"transform": "translateY(-600%)"});
				
		var M = jQuery.noConflict();
		M('#st-control-1').css("left", "0%");
		M('#st-control-1link').css("left", "0%");
		
		M('#st-control-2').css("left", "14%");
		M('#st-control-2link').css("left", "14%");
		M('#st-control-2link').css("color", "#FFF");
	
		M('#st-control-3').css("left", "28%");
		M('#st-control-3link').css("left", "28%");
		M('#st-control-3link').css("color", "#FFF");
		
		M('#st-control-4').css("left", "42%");
		M('#st-control-4link').css("left", "42%");
		M('#st-control-4link').css("color", "#FFF");
		
		M('#st-control-5').css("left", "56%");
		M('#st-control-5link').css("left", "56%");
		M('#st-control-5link').css("color", "#FFF");
		
		M('#st-control-6').css("left", "70%");
		M('#st-control-6link').css("left", "70%");
		M('#st-control-6link').css("color", "#FFF");
		
		M('#st-control-7').css("left", "85%");
		M('#st-control-7link').css("left", "85%");
		M('#st-control-7link').css("color", "#4FD5D6");
	}
