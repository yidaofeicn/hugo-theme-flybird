(function($) {
	"use strict";
	$(document).ready(function() {

		//dom elements 
		var $body = $("html, body");
		var $homeLinks = $("a[href^='#']");
	  
		//events
		$homeLinks.bind('click', eventData, function(event) {
			 //滑动相关配置
		  var settings = {navOffset : 55,scrollTime : 1000};
		  
		  var $anchor = $(this);
		  //解决中文乱码问题
		  var target = decodeURIComponent(decodeURIComponent($anchor.attr("href"))); 
		  //解除其他插件利用ID跳转的问题
		  if($(target).length>0){
		    var targetPosition = $(target).offset().top; 
		    event.preventDefault(); 
		    //滑动
		    $("html, body").stop().animate({scrollTop:targetPosition - settings.navOffset}, settings.scrollTime);
		  } 
		});  

	});
})(jQuery);