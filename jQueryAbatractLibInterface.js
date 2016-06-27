(function ($, exports) {
	// body...
	var mode = function (includes) {
		// body...
		if (includes) this.include(includes);
	}


	mod.fun = mode.prototype;


	mod.fun.proxy = function (func) {
		return $.proxy(func, this);
	}


	mod.fun.load = function (func) {
		$(this.proxy(func));
	}


	mod.fun.include = function (ob) {
		$.extend(this, ob);
	}	


	exports.Controller = mod;



})(jQuery, window);