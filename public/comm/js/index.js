(function($){
	$.fn.tabMenu = function(options) {
		var opts = $.extend({}, $.fn.tabMenu.defaults, options);
		// event
		opts.move ? opts.move = "click" : opts.move = "mouseenter";
		
		return this.each(function() {	
			var _this = $(this);
			// first
			_this.children(":first").addClass(opts.className);
			
			// height
			_this.css("height",calHeight());
			
			// index
			_this.children("li").children("a").on(opts.move, function(){
				var target = $(this);
				target.closest("li").addClass(opts.className).siblings().removeClass(opts.className);
				_this.css("height",calHeight());
			});
			
			// tab height
			function calHeight(){
				active = _this.children(".on"),
				tabTit = active.children("a").outerHeight(true),
				tabCont = active.children(".tabcont").outerHeight(true);
				return tabTit + tabCont;
			}
		});
	}
	
	// 기본 옵션
	$.fn.tabMenu.defaults = {
		className : "on",
		move : true
	};
})(jQuery);