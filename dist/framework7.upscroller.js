Framework7.prototype.plugins.upscroller = function (app, params) {
    'use strict';
    params = params || {text: 'Go up'};
    //Export selectors engine
    var $$ = window.Dom7;

    return {
        hooks : {
			pageBeforeInit: function (pageData) {				
				var $$btn = $$('<div class="upscroller">↑ ' + params.text + '</div>');				
				$$(pageData.container).prepend($$btn);
				if ($$("[data-page='"+pageData.name+"'] > .searchbar")[0]) $$("[data-page='"+pageData.name+"'] >  .upscroller").css('top', '-10px');
				
				$$btn.click(function(event) {
					event.stopPropagation();
				    event.preventDefault();
				    var curpage = $$(".page-content", app.getCurrentView().activePage.container);				
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
