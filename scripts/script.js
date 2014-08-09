$(document).ready(function(){
		var K = jQuery.noConflict();

		K('#slidorion').slidorion({
			autoPlay: false
		});

		K('#whatidotab').hide(); //
		K('#whoiam').addClass("active_tab");
		K('#whatido').addClass("inactive_tab");
		K('#whatido').click(function(){
		   	K('#whoiamtab').hide(); //
		   	K('#whatidotab').show();
		   	K('#whatido').addClass("active_tab");
		   	K('#whoiam').removeClass("active_tab");
		});
		K('#whoiam').click(function(){
		   	K('#whatidotab').hide(); //
		   	K('#whoiamtab').show();
		   	K('#whoiam').addClass("active_tab");
		   	K('#whatido').removeClass("active_tab");
		});
		

		
		K(".col").hover(function(){
			K(this).addClass("hover");
			var self = this;
			setTimeout(function() {
		    K(self).removeClass('hover');
			K(self).addClass("hover2");
			}, 100);
			setTimeout(function() {
		    K(self).removeClass('hover2');
			K(self).addClass("hover3");
			}, 200);
			setTimeout(function() {
		    K(self).removeClass('hover3');
			K(self).addClass("hover4");
			}, 300);
			setTimeout(function() {
		    K(self).removeClass('hover4');
			K(self).addClass("hover5");
			}, 400);
			setTimeout(function() {
		    K(self).removeClass('hover5');
			}, 500);
		});

		
		K("#typed").typed({
		strings: ["Hi, I'm Asaph!"],
		typeSpeed: 30
      	});
      	
      	K("#typed2").typed({
		strings: ["^1500I make"],
		typeSpeed: 30
      	});


	    K("#stuff").typed({
	    strings: ["^1700websites", "apps", "music"],
	        typeSpeed: 30, // typing speed
	        backDelay: 500, // pause before backspacing
	        loop: false, // loop on or off (true or false)
	        loopCount: false, // number of loops, false = infinite
	    });
      	K( ".typed-cursor" ).replaceWith( "" );
	  	
		
		K( "#typed2" ).addClass('animated fadeOut');
		K( "#typed" ).addClass('animated fadeOut');
		K( "#stuff" ).addClass('animated fadeOut');
		
		setTimeout(function(){
		  K('#typed2').replaceWith("<p class='animated fadeIn' id='titles'>Developer  &#92; &#92;   Blogger  &#92; &#92;   Musician</p>"
);
		}, 6900);
		setTimeout(function(){
		  K('#typed').replaceWith("<p class='animated bounceInDown' id='asaphyuan'>Asaph Yuan</p>"
);
		}, 5500);
	});

	var K = jQuery.noConflict();
	K(window).ready(updateHeight);
	K(window).resize(updateHeight);
	
	function updateHeight()
	{
	    var div = K('#dynamicheight1');
	    var width = div.width();
	    
	    K( ".col" ).each(function() {
		    K( this ).css('height', width);
		});
	}	
	
	
	
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
		
		L( "#aboutmetitle" ).addClass('animated fadeInDownBig');

		setTimeout(function() {
		    	L( ".col2" ).addClass('visible animated bounceInLeft');
				L( ".col2-2" ).addClass('visible animated bounceInRight');
			}, 800);


		var M = jQuery.noConflict();
		M('#st-control-1link').css("background-image", "url('img/nav/ay.png')");
		M('#st-control-1').css("top", "0");
		M('#st-control-1link').css("top", "0");
		M('#st-control-1').css("left", "0");
		M('#st-control-1link').css("width", "50px");
		M('#st-control-1link').css("height", "50px");
		M('#st-control-1').css("width", "50px");
		M('#st-control-1').css("height", "50px");
		M('#st-control-1link').css("left", "0");
		
		M('#st-control-2').css("top", "50px");
		M('#st-control-2link').css("background-image", "url('img/nav/aboutmered.png')");
		M('#st-control-2link').css("top", "50px");
		M('#st-control-2').css("left", "0");
		M('#st-control-2link').css("width", "50px");
		M('#st-control-2link').css("height", "50px");
		M('#st-control-2').css("width", "50px");
		M('#st-control-2').css("height", "50px");
		M('#st-control-2link').css("left", "0");
	
		M('#st-control-3').css("top", "100px");
		M('#st-control-3link').css("background-image", "url('img/nav/pastprojectsblack.png')");
		M('#st-control-3link').css("top", "100px");
		M('#st-control-3').css("left", "0");
		M('#st-control-3link').css("width", "50px");
		M('#st-control-3link').css("height", "50px");
		M('#st-control-3').css("width", "50px");
		M('#st-control-3').css("height", "50px");
		M('#st-control-3link').css("left", "0");
		
		M('#st-control-4').css("top", "150px");
		M('#st-control-4link').css("background-image", "url('img/nav/blogblack.png')");
		M('#st-control-4link').css("top", "150px");
		M('#st-control-4').css("left", "0");
		M('#st-control-4link').css("width", "50px");
		M('#st-control-4link').css("height", "50px");
		M('#st-control-4link').css("left", "0");
		M('#st-control-4').css("width", "50px");
		M('#st-control-4').css("height", "50px");
		
		M('#st-control-5').css("top", "200px");
		M('#st-control-5link').css("background-image", "url('img/nav/musicblack.png')");
		M('#st-control-5link').css("top", "200px");
		M('#st-control-5').css("left", "0");
		M('#st-control-5link').css("width", "50px");
		M('#st-control-5link').css("height", "50px");
		M('#st-control-5link').css("left", "0");
		M('#st-control-5').css("width", "50px");
		M('#st-control-5').css("height", "50px");
		
		M('#st-control-6').css("top", "250px");
		M('#st-control-6link').css("background-image", "url('img/nav/photographyblack.png')");
		M('#st-control-6link').css("top", "250px");
		M('#st-control-6').css("left", "0");
		M('#st-control-6link').css("width", "50px");
		M('#st-control-6link').css("height", "50px");
		M('#st-control-6link').css("left", "0");
		M('#st-control-6').css("width", "50px");
		M('#st-control-6').css("height", "50px");
		
		M('#st-control-7').css("top", "300px");
		M('#st-control-7link').css("background-image", "url('img/nav/halloffameblack.png')");
		M('#st-control-7link').css("top", "300px");
		M('#st-control-7').css("left", "0");
		M('#st-control-7link').css("width", "50px");
		M('#st-control-7link').css("height", "50px");
		M('#st-control-7link').css("left", "0");
		M('#st-control-7').css("width", "50px");
		M('#st-control-7').css("height", "50px");
	}

	
	function checkProjects(){ 
		var K = jQuery.noConflict();
		K('#st-control-2link').css("background-image", "url('img/nav/aboutmeblack.png')");
		K('#st-panel-3').attr('checked',true);
		var L = jQuery.noConflict();
		L('.st-scroll').css({"-webkit-transform": "translateY(-200%)"});
		L('.st-scroll').css({"-moz-transform": "translateY(-200%)"});
		L('.st-scroll').css({"-o-transform": "translateY(-200%)"});
		L('.st-scroll').css({"-ms-transform": "translateY(-200%)"});
		L('.st-scroll').css({"transform": "translateY(-200%)"});
				
		var M = jQuery.noConflict();
		M('#st-control-1link').css("background-image", "url('img/nav/ay.png')");
		M('#st-control-1').css("top", "0");
		M('#st-control-1link').css("top", "0");
		M('#st-control-1').css("left", "0");
		M('#st-control-1link').css("width", "50px");
		M('#st-control-1link').css("height", "50px");
		M('#st-control-1').css("width", "50px");
		M('#st-control-1').css("height", "50px");
		M('#st-control-1link').css("left", "0");
		
		M('#st-control-2').css("top", "50px");
		M('#st-control-2link').css("top", "50px");
		M('#st-control-2').css("left", "0");
		M('#st-control-2link').css("width", "50px");
		M('#st-control-2link').css("height", "50px");
		M('#st-control-2').css("width", "50px");
		M('#st-control-2').css("height", "50px");
		M('#st-control-2link').css("left", "0");
	
		M('#st-control-3').css("top", "100px");
		M('#st-control-3link').css("background-image", "url('img/nav/pastprojectsred.png')");
		M('#st-control-3link').css("top", "100px");
		M('#st-control-3').css("left", "0");
		M('#st-control-3link').css("width", "50px");
		M('#st-control-3link').css("height", "50px");
		M('#st-control-3').css("width", "50px");
		M('#st-control-3').css("height", "50px");
		M('#st-control-3link').css("left", "0");
		
		M('#st-control-4').css("top", "150px");
		M('#st-control-4link').css("background-image", "url('img/nav/blogblack.png')");
		M('#st-control-4link').css("top", "150px");
		M('#st-control-4').css("left", "0");
		M('#st-control-4link').css("width", "50px");
		M('#st-control-4link').css("height", "50px");
		M('#st-control-4link').css("left", "0");
		M('#st-control-4').css("width", "50px");
		M('#st-control-4').css("height", "50px");
		
		M('#st-control-5').css("top", "200px");
		M('#st-control-5link').css("background-image", "url('img/nav/musicblack.png')");
		M('#st-control-5link').css("top", "200px");
		M('#st-control-5').css("left", "0");
		M('#st-control-5link').css("width", "50px");
		M('#st-control-5link').css("height", "50px");
		M('#st-control-5link').css("left", "0");
		M('#st-control-5').css("width", "50px");
		M('#st-control-5').css("height", "50px");
		
		M('#st-control-6').css("top", "250px");
		M('#st-control-6link').css("background-image", "url('img/nav/photographyblack.png')");
		M('#st-control-6link').css("top", "250px");
		M('#st-control-6').css("left", "0");
		M('#st-control-6link').css("width", "50px");
		M('#st-control-6link').css("height", "50px");
		M('#st-control-6link').css("left", "0");
		M('#st-control-6').css("width", "50px");
		M('#st-control-6').css("height", "50px");
		
		M('#st-control-7').css("top", "300px");
		M('#st-control-7link').css("background-image", "url('img/nav/halloffameblack.png')");
		M('#st-control-7link').css("top", "300px");
		M('#st-control-7').css("left", "0");
		M('#st-control-7link').css("width", "50px");
		M('#st-control-7link').css("height", "50px");
		M('#st-control-7link').css("left", "0");
		M('#st-control-7').css("width", "50px");
		M('#st-control-7').css("height", "50px");
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
		M('#st-control-1link').css("background-image", "url('img/nav/ay.png')");
		M('#st-control-1').css("top", "0");
		M('#st-control-1link').css("top", "0");
		M('#st-control-1').css("left", "0");
		M('#st-control-1link').css("width", "50px");
		M('#st-control-1link').css("height", "50px");
		M('#st-control-1').css("width", "50px");
		M('#st-control-1').css("height", "50px");
		M('#st-control-1link').css("left", "0");
		
		M('#st-control-2').css("top", "50px");
		M('#st-control-2link').css("background-image", "url('img/nav/aboutmeblack.png')");
		M('#st-control-2link').css("top", "50px");
		M('#st-control-2').css("left", "0");
		M('#st-control-2link').css("width", "50px");
		M('#st-control-2link').css("height", "50px");
		M('#st-control-2').css("width", "50px");
		M('#st-control-2').css("height", "50px");
		M('#st-control-2link').css("left", "0");
	
		M('#st-control-3').css("top", "100px");
		M('#st-control-3link').css("background-image", "url('img/nav/pastprojectsblack.png')");
		M('#st-control-3link').css("top", "100px");
		M('#st-control-3').css("left", "0");
		M('#st-control-3link').css("width", "50px");
		M('#st-control-3link').css("height", "50px");
		M('#st-control-3').css("width", "50px");
		M('#st-control-3').css("height", "50px");
		M('#st-control-3link').css("left", "0");
		
		M('#st-control-4').css("top", "150px");
		M('#st-control-4link').css("background-image", "url('img/nav/blogred.png')");
		M('#st-control-4link').css("top", "150px");
		M('#st-control-4').css("left", "0");
		M('#st-control-4link').css("width", "50px");
		M('#st-control-4link').css("height", "50px");
		M('#st-control-4link').css("left", "0");
		M('#st-control-4').css("width", "50px");
		M('#st-control-4').css("height", "50px");
		
		M('#st-control-5').css("top", "200px");
		M('#st-control-5link').css("background-image", "url('img/nav/musicblack.png')");
		M('#st-control-5link').css("top", "200px");
		M('#st-control-5').css("left", "0");
		M('#st-control-5link').css("width", "50px");
		M('#st-control-5link').css("height", "50px");
		M('#st-control-5link').css("left", "0");
		M('#st-control-5').css("width", "50px");
		M('#st-control-5').css("height", "50px");
		
		M('#st-control-6').css("top", "250px");
		M('#st-control-6link').css("background-image", "url('img/nav/photographyblack.png')");
		M('#st-control-6link').css("top", "250px");
		M('#st-control-6').css("left", "0");
		M('#st-control-6link').css("width", "50px");
		M('#st-control-6link').css("height", "50px");
		M('#st-control-6link').css("left", "0");
		M('#st-control-6').css("width", "50px");
		M('#st-control-6').css("height", "50px");
		
		M('#st-control-7').css("top", "300px");
		M('#st-control-7link').css("background-image", "url('img/nav/halloffameblack.png')");
		M('#st-control-7link').css("top", "300px");
		M('#st-control-7').css("left", "0");
		M('#st-control-7link').css("width", "50px");
		M('#st-control-7link').css("height", "50px");
		M('#st-control-7link').css("left", "0");
		M('#st-control-7').css("width", "50px");
		M('#st-control-7').css("height", "50px");
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
		M('#st-control-1link').css("background-image", "url('img/nav/ay.png')");
		M('#st-control-1').css("top", "0");
		M('#st-control-1link').css("top", "0");
		M('#st-control-1').css("left", "0");
		M('#st-control-1link').css("width", "50px");
		M('#st-control-1link').css("height", "50px");
		M('#st-control-1').css("width", "50px");
		M('#st-control-1').css("height", "50px");
		M('#st-control-1link').css("left", "0");
		
		M('#st-control-2').css("top", "50px");
		M('#st-control-2link').css("background-image", "url('img/nav/aboutmeblack.png')");
		M('#st-control-2link').css("top", "50px");
		M('#st-control-2').css("left", "0");
		M('#st-control-2link').css("width", "50px");
		M('#st-control-2link').css("height", "50px");
		M('#st-control-2').css("width", "50px");
		M('#st-control-2').css("height", "50px");
		M('#st-control-2link').css("left", "0");
	
		M('#st-control-3').css("top", "100px");
		M('#st-control-3link').css("background-image", "url('img/nav/pastprojectsblack.png')");
		M('#st-control-3link').css("top", "100px");
		M('#st-control-3').css("left", "0");
		M('#st-control-3link').css("width", "50px");
		M('#st-control-3link').css("height", "50px");
		M('#st-control-3').css("width", "50px");
		M('#st-control-3').css("height", "50px");
		M('#st-control-3link').css("left", "0");
		
		M('#st-control-4').css("top", "150px");
		M('#st-control-4link').css("background-image", "url('img/nav/blogblack.png')");
		M('#st-control-4link').css("top", "150px");
		M('#st-control-4').css("left", "0");
		M('#st-control-4link').css("width", "50px");
		M('#st-control-4link').css("height", "50px");
		M('#st-control-4link').css("left", "0");
		M('#st-control-4').css("width", "50px");
		M('#st-control-4').css("height", "50px");
		
		M('#st-control-5').css("top", "200px");
		M('#st-control-5link').css("background-image", "url('img/nav/musicred.png')");
		M('#st-control-5link').css("top", "200px");
		M('#st-control-5').css("left", "0");
		M('#st-control-5link').css("width", "50px");
		M('#st-control-5link').css("height", "50px");
		M('#st-control-5link').css("left", "0");
		M('#st-control-5').css("width", "50px");
		M('#st-control-5').css("height", "50px");
		
		M('#st-control-6').css("top", "250px");
		M('#st-control-6link').css("background-image", "url('img/nav/photographyblack.png')");
		M('#st-control-6link').css("top", "250px");
		M('#st-control-6').css("left", "0");
		M('#st-control-6link').css("width", "50px");
		M('#st-control-6link').css("height", "50px");
		M('#st-control-6link').css("left", "0");
		M('#st-control-6').css("width", "50px");
		M('#st-control-6').css("height", "50px");
		
		M('#st-control-7').css("top", "300px");
		M('#st-control-7link').css("background-image", "url('img/nav/halloffameblack.png')");
		M('#st-control-7link').css("top", "300px");
		M('#st-control-7').css("left", "0");
		M('#st-control-7link').css("width", "50px");
		M('#st-control-7link').css("height", "50px");
		M('#st-control-7link').css("left", "0");
		M('#st-control-7').css("width", "50px");
		M('#st-control-7').css("height", "50px");
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
		M('#st-control-1link').css("background-image", "url('img/nav/ay.png')");
		M('#st-control-1').css("top", "0");
		M('#st-control-1link').css("top", "0");
		M('#st-control-1').css("left", "0");
		M('#st-control-1link').css("width", "50px");
		M('#st-control-1link').css("height", "50px");
		M('#st-control-1').css("width", "50px");
		M('#st-control-1').css("height", "50px");
		M('#st-control-1link').css("left", "0");
		
		M('#st-control-2').css("top", "50px");
		M('#st-control-2link').css("background-image", "url('img/nav/aboutmeblack.png')");
		M('#st-control-2link').css("top", "50px");
		M('#st-control-2').css("left", "0");
		M('#st-control-2link').css("width", "50px");
		M('#st-control-2link').css("height", "50px");
		M('#st-control-2').css("width", "50px");
		M('#st-control-2').css("height", "50px");
		M('#st-control-2link').css("left", "0");
	
		M('#st-control-3').css("top", "100px");
		M('#st-control-3link').css("background-image", "url('img/nav/pastprojectsblack.png')");
		M('#st-control-3link').css("top", "100px");
		M('#st-control-3').css("left", "0");
		M('#st-control-3link').css("width", "50px");
		M('#st-control-3link').css("height", "50px");
		M('#st-control-3').css("width", "50px");
		M('#st-control-3').css("height", "50px");
		M('#st-control-3link').css("left", "0");
		
		M('#st-control-4').css("top", "150px");
		M('#st-control-4link').css("background-image", "url('img/nav/blogblack.png')");
		M('#st-control-4link').css("top", "150px");
		M('#st-control-4').css("left", "0");
		M('#st-control-4link').css("width", "50px");
		M('#st-control-4link').css("height", "50px");
		M('#st-control-4link').css("left", "0");
		M('#st-control-4').css("width", "50px");
		M('#st-control-4').css("height", "50px");
		
		M('#st-control-5').css("top", "200px");
		M('#st-control-5link').css("background-image", "url('img/nav/musicblack.png')");
		M('#st-control-5link').css("top", "200px");
		M('#st-control-5').css("left", "0");
		M('#st-control-5link').css("width", "50px");
		M('#st-control-5link').css("height", "50px");
		M('#st-control-5link').css("left", "0");
		M('#st-control-5').css("width", "50px");
		M('#st-control-5').css("height", "50px");
		
		M('#st-control-6').css("top", "250px");
		M('#st-control-6link').css("background-image", "url('img/nav/photographyred.png')");
		M('#st-control-6link').css("top", "250px");
		M('#st-control-6').css("left", "0");
		M('#st-control-6link').css("width", "50px");
		M('#st-control-6link').css("height", "50px");
		M('#st-control-6link').css("left", "0");
		M('#st-control-6').css("width", "50px");
		M('#st-control-6').css("height", "50px");
		
		M('#st-control-7').css("top", "300px");
		M('#st-control-7link').css("background-image", "url('img/nav/halloffameblack.png')");
		M('#st-control-7link').css("top", "300px");
		M('#st-control-7').css("left", "0");
		M('#st-control-7link').css("width", "50px");
		M('#st-control-7link').css("height", "50px");
		M('#st-control-7link').css("left", "0");
		M('#st-control-7').css("width", "50px");
		M('#st-control-7').css("height", "50px");
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
		M('#st-control-1link').css("background-image", "url('img/nav/ay.png')");
		M('#st-control-1').css("top", "0");
		M('#st-control-1link').css("top", "0");
		M('#st-control-1').css("left", "0");
		M('#st-control-1link').css("width", "50px");
		M('#st-control-1link').css("height", "50px");
		M('#st-control-1').css("width", "50px");
		M('#st-control-1').css("height", "50px");
		M('#st-control-1link').css("left", "0");
		
		M('#st-control-2').css("top", "50px");
		M('#st-control-2link').css("background-image", "url('img/nav/aboutmeblack.png')");
		M('#st-control-2link').css("top", "50px");
		M('#st-control-2').css("left", "0");
		M('#st-control-2link').css("width", "50px");
		M('#st-control-2link').css("height", "50px");
		M('#st-control-2').css("width", "50px");
		M('#st-control-2').css("height", "50px");
		M('#st-control-2link').css("left", "0");
	
		M('#st-control-3').css("top", "100px");
		M('#st-control-3link').css("background-image", "url('img/nav/pastprojectsblack.png')");
		M('#st-control-3link').css("top", "100px");
		M('#st-control-3').css("left", "0");
		M('#st-control-3link').css("width", "50px");
		M('#st-control-3link').css("height", "50px");
		M('#st-control-3').css("width", "50px");
		M('#st-control-3').css("height", "50px");
		M('#st-control-3link').css("left", "0");
		
		M('#st-control-4').css("top", "150px");
		M('#st-control-4link').css("background-image", "url('img/nav/blogblack.png')");
		M('#st-control-4link').css("top", "150px");
		M('#st-control-4').css("left", "0");
		M('#st-control-4link').css("width", "50px");
		M('#st-control-4link').css("height", "50px");
		M('#st-control-4link').css("left", "0");
		M('#st-control-4').css("width", "50px");
		M('#st-control-4').css("height", "50px");
		
		M('#st-control-5').css("top", "200px");
		M('#st-control-5link').css("background-image", "url('img/nav/musicblack.png')");
		M('#st-control-5link').css("top", "200px");
		M('#st-control-5').css("left", "0");
		M('#st-control-5link').css("width", "50px");
		M('#st-control-5link').css("height", "50px");
		M('#st-control-5link').css("left", "0");
		M('#st-control-5').css("width", "50px");
		M('#st-control-5').css("height", "50px");
		
		M('#st-control-6').css("top", "250px");
		M('#st-control-6link').css("background-image", "url('img/nav/photographyblack.png')");
		M('#st-control-6link').css("top", "250px");
		M('#st-control-6').css("left", "0");
		M('#st-control-6link').css("width", "50px");
		M('#st-control-6link').css("height", "50px");
		M('#st-control-6link').css("left", "0");
		M('#st-control-6').css("width", "50px");
		M('#st-control-6').css("height", "50px");
		
		M('#st-control-7').css("top", "300px");
		M('#st-control-7link').css("background-image", "url('img/nav/halloffamered.png')");
		M('#st-control-7link').css("top", "300px");
		M('#st-control-7').css("left", "0");
		M('#st-control-7link').css("width", "50px");
		M('#st-control-7link').css("height", "50px");
		M('#st-control-7link').css("left", "0");
		M('#st-control-7').css("width", "50px");
		M('#st-control-7').css("height", "50px");
	}
