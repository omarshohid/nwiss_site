var $=jQuery.noConflict();$(window).load(function(){$("#loader").fadeOut()});$(function(){$("a.page-scroll").bind("click",function(b){var a=$(this);$("html, body").stop().animate({scrollTop:$(a.attr("href")).offset().top},1500,"easeInOutExpo");b.preventDefault()})});$("body").scrollspy({target:".navbar-fixed-top"});$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()});$(document).ready(function(){$(".timer").countTo();$(".counter-item").appear(function(){$(".timer").countTo()},{accY:-100})});$(document).ready(function(){$(".testimonial-section").owlCarousel({pagination:false,navigation:true,slideSpeed:2500,stopOnHover:true,autoPlay:3000,singleItem:false,itemsMobile:[550,1],itemsDesktopSmall:[991,2],items:3,transitionStyle:"fade",navigationText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']})});$(document).ready(function(){$(".clients").owlCarousel({pagination:false,navigation:true,slideSpeed:2500,stopOnHover:true,autoPlay:3000,singleItem:false,itemsMobile:[550,1],itemsDesktopSmall:[991,2],items:5,transitionStyle:"fade",navigationText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']})});$(document).ready(function(a){a("#skill-section").waypoint({handler:function(b,c){a(this).find(".singel-hr-inner").each(function(){var d=a(this).data("height");a(this).css("height",d)})},offset:"60%"})});$(function(){$(".video").fitVids()});(function(){var c=document.body,f=document.querySelector(".content-wrap"),b=document.getElementById("open-button"),a=document.getElementById("close-button"),e=false;function h(){d()}function d(){b.addEventListener("click",g);if(a){a.addEventListener("click",g)}}function g(){if(e){classie.remove(c,"show-menu")}else{classie.add(c,"show-menu")}e=!e}h()})();