module.exports = {
	name: 'upscroller',
	params: {
		upscroller: {
			text: 'Go up',
			ignorePages: [],
		}
	},
	install() {
		var css = '.upscroller{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);transition:-webkit-transform .5s;position:fixed;left:50%;margin-left:-47px;top:-50px;z-index:9999!important;height:20px;border-radius:20px;width:100px;background:#4792e6;font-size:14px;text-align:center;padding:3px 2px 2px;color:#fff!important;cursor:pointer}.upscroller.show{-webkit-transform:translate3d(0,110px,0);transform:translate3d(0,110px,0)}';
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');

		style.type = 'text/css';
		if (style.styleSheet){
			style.styleSheet.cssText = css;
		} else {
			style.appendChild(document.createTextNode(css));
		}

		head.appendChild(style);
	},
	on: {
		pageInit: function (page) {
			'use strict';

			var app = this;
			var params = app.params.upscroller;
			var $$ = Dom7;

			if (params.ignorePages.includes(page.name)) return;

			var $$btn = $$('<div class="upscroller">↑ ' + params.text + '</div>');
			$$(page.el).prepend($$btn);

			$$btn.click(function (event) {
				event.stopPropagation();
				event.preventDefault();
				var pageContent = $$('.page-content', page.el);
				pageContent.scrollTop(0, Math.round(pageContent.scrollTop() / 4));
			});

			$$(".page-content", page.el).scroll(function (event) {
				var e = $$(event.target).scrollTop();
				if (e > 300) $$btn.addClass('show');
				else $$btn.removeClass('show');
			});
		},
	}
};
