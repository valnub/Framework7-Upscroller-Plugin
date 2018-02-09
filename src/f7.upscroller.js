module.exports = {
	name: 'upscroller',
	params: {
		upscroller: {
			text: 'Go up',
			ignorePages: [],
		}
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
