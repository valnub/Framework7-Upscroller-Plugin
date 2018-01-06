Framework7.prototype.plugins.upscroller = function (app, params) {
    'use strict';
    params = params || {text: 'Go up', ignorePages: []};
    //Export selectors engine
    var $$ = window.Dom7;

    return {
        hooks : {
			pageBeforeInit: function (pageData) {
        // Ignores upscroller plugin if page is ignored
        if (params.ignorePages.includes(pageData.name)) return;

				var $$btn = $$('<div class="upscroller">↑ ' + params.text + '</div>');
				$$(pageData.container).prepend($$btn);

				$$btn.click(function(event) {
					event.stopPropagation();
				    event.preventDefault();
				    // var curpage = $$(".page-content", mainView.activePage.container);
				    var curpage = $$(".page-content", f7.mainView.activePage.container);
				    $$(curpage).scrollTop(0, Math.round($$(curpage).scrollTop()/4));
				});

				$$(".page-content", pageData.container).scroll(function(event){
				  var e = $$(event.target).scrollTop();
				  if(e > 300) {
			          $$btn.addClass('show');
				  }
				  else {
			          $$btn.removeClass('show');
				  }
				});
            }
        }
    };
};
