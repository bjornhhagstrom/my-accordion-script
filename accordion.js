// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){
	// accordion
	(function($) {
		var trigger = $('.trigger').addClass('up');
		var panels = $('.panel').hide();
		trigger.click(function(e) {
			e.preventDefault();
			$this = $(this);
			if($this.hasClass('up')) {
				$this.removeClass('up').addClass('down').siblings('.panel').slideDown();
			} else if($this.hasClass('down')) {
				$this.removeClass('down').addClass('up').siblings('.panel').slideUp();
			}
			return false;
		});
	})(jQuery);
});
