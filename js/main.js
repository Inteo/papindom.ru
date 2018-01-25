"use strict";

var $window = $(window);
var $document = $(document);
var $html = $(document.documentElement);
var $body = $(document.body);

$('.promo .flexslider').flexslider({
	animation: "slide",
	controlNav: false
});

$(".switcher__btn").click(function() {
	$(this).closest(".switcher__control").find(".switcher__btn").removeClass("active");
	$(this).addClass("active");
	var holder = $(this).closest(".switcher").find(".switcher__holder");
	holder.removeClass("active");
	holder.filter('[data-switch-hold=' + $(this).data("switch-btn") + ']').addClass("active");
	return false;
});
$(function() {
	$(".modal-inline").fancybox({
		type: 'inline',
		fixed: true,
		width: '100%',
		autoSize: false,
		height: 'auto',
		afterShow: function afterShow() {
			$.fancybox.update();
		},
		helpers: {
			overlay: {
				css: {
					'background': 'rgba(0, 0, 0, 0.4)'
				}
			}
		}
	});
	$(".modal-inline-small").fancybox({
		type: 'inline',
		fixed: true,
		width: '100%',
		height: "auto",
		maxWidth: 472,
		autoSize: false,
		scrolling: false,
		helpers: {
			overlay: {
				css: {
					'background': 'rgba(0, 0, 0, 0.4)'
				}
			}
		}
	});
});
