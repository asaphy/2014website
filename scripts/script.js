	$(document).ready(function(){
		var J = jQuery.noConflict();
		J(".block").hover(function(){
		   J(this).addClass("hover");
		},
		function(){
		  var self = this;
		  setTimeout(function() {
		         J(self).removeClass('hover');
		  },500);
		});
		var K = jQuery.noConflict();
		K('#hi').addClass('animated bounceInLeft');
		K('#Asaph').addClass('animated flipInX');
		K('#im').addClass('animated fadeIn');
		K('#i').addClass('animated fadeIn');
		K('#make').addClass('animated rotateInDownLeft');
		K('#stuff').addClass('animated fadeInDown');
		K('#i2').addClass('animated fadeIn');
		K('#love').addClass('animated rotateInDownLeft');
		K('#God').addClass('animated zoomInDown');
	});
	
	function checkAbout(){ 
		var K = jQuery.noConflict();
		K('#st-panel-2').attr('checked',true);
		var L = jQuery.noConflict();
		L('.st-scroll').css({"-webkit-transform": "translateY(-100%)"});
	}
	
	function checkHome(){ 
		var K = jQuery.noConflict();
		K('#st-panel-1').attr('checked',true);
		var L = jQuery.noConflict();
		L('.st-scroll').css({"-webkit-transform": "translateY(0%)"});
	}
	
	function checkProjects(){ 
		var K = jQuery.noConflict();
		K('#st-panel-1').attr('checked',true);
		var L = jQuery.noConflict();
		L('.st-scroll').css({"-webkit-transform": "translateY(-200%)"});
	}
	
	function checkBlog(){ 
		var K = jQuery.noConflict();
		K('#st-panel-1').attr('checked',true);
		var L = jQuery.noConflict();
		L('.st-scroll').css({"-webkit-transform": "translateY(-300%)"});
	}
	
	function checkMusic(){ 
		var K = jQuery.noConflict();
		K('#st-panel-1').attr('checked',true);
		var L = jQuery.noConflict();
		L('.st-scroll').css({"-webkit-transform": "translateY(-400%)"});
	}
	
	function checkPhotography(){ 
		var K = jQuery.noConflict();
		K('#st-panel-1').attr('checked',true);
		var L = jQuery.noConflict();
		L('.st-scroll').css({"-webkit-transform": "translateY(-500%)"});
	}
	
	function checkFood(){ 
		var K = jQuery.noConflict();
		K('#st-panel-1').attr('checked',true);
		var L = jQuery.noConflict();
		L('.st-scroll').css({"-webkit-transform": "translateY(-600%)"});
	}
