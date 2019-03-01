$(document).ready(function ($) {
	$(".knowledge-center-dropdown.dropdown-menu").hide();

	// $(".entry-content").find("p img").parent("p").addClass("img-container");
	$(".entry-meta time").html(function () {
		var text = $(this).text().trim().split(" ");
		var last = text.pop();
		return text.join(" ") + (text.length > 0 ? " <span class='posted-year'>" + last + "</span>" : last);
	});

	$('article .entry-content').each(function () {
		if ($(this).find(".img-container").length == 0) {
			$(this).find(".entry-meta").css('top', '0');
			$(this).find(".details-wrapper .auther-details").css('top', '140px');
			$(this).find(".details-wrapper .tags-wrapper").css('top', '200px');
		}
	});

	$(".solution-tab-row2.knowledge-center ul li a").click(function () {
		activeClass = this.className;
		// alert(activeClass);
		// $(".solution-tab-row2.knowledge-center ul li a").removeClass("wealthy-active");
		$(activeClass).addClass("wealthy-active");
	});

	$(".menu-ico").click(function() {
		$(".knowledge-center-dropdown.dropdown-menu").hide();
		if ($(this).hasClass("open") && ($(".solutions-dropdown").fadeOut("slow"), $(".solutions-dropdown-main-section").removeClass("active")), $("nav").hasClass("open")) document.cookie = "menuHasClicked=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
		else {
				var e = new Date;
				e.setTime(e.getTime() + 6048e5), "; expires=" + e.toUTCString(), document.cookie = "menuHasClicked=yes;expires=" + e.toUTCString()
		}
		$("#nav").toggleClass("open"), $(this).toggleClass("open")
}); 
$(".menu-ico").click(function() {
		$(".navigation-menu.open .side-nav li").removeClass("blur-out"), $(".navigation-menu.open .side-nav li").addClass("blur-in").animate({
				left: "0%"
		}, 200), $(".navigation-menu.open .side-nav").animate({
				right: "0%"
		}, 200)
}); 

$("#solutions-nav").click(function() {
	// $(".knowledge-center-dropdown").slideUp();
$(".knowledge-center-dropdown-main-section").removeClass('active');
$(".knowledge-center-dropdown").hide('slow');
	$(".solutions-dropdown-main-section").addClass("active");
	$(".solutions-dropdown").toggle();
});


/* navigation active menu item code */

$("#knowledge-center").click(function () {
	// $(".solutions-dropdown").slideUp();
$(".solutions-dropdown-main-section").removeClass("active");
$(".solutions-dropdown").hide("slow");
$(".knowledge-center-dropdown-main-section").addClass('active');
$(".knowledge-center-dropdown").toggle();
//        $("#solutions-nav a").addClass('active');
	
});

$("#solutions-mobile-sub-menu li a").click(function() {
	console.log("submenu..");
	$(this).next(".collapsible-body").slideToggle("500");
	 $(this).find("i").toggleClass("fa-plus fa-minus");
});

$(".mobile-menu-icon").click(function(){
	 $("#slide-out").addClass("ShowSideNav");
	 $("#sidenav-overlay").css("display","block");
	 $("body").css("overflow","hidden");
});
// $("#slide-out").click(function(e){
// e.preventDefault();
// });

$("#sidenav-overlay").click(function(e){
$("#slide-out").removeClass("ShowSideNav");
$("#sidenav-overlay").css("display","none");
$("body").css("overflow","auto");

});

});






