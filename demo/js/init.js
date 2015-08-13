var fw7App,
  fw7ViewOptions,
  mainView;

fw7App = new Framework7({
  animateNavBackIcon: true
});

fw7ViewOptions = {
  dynamicNavbar: true,
  domCache: true
};

mainView = fw7App.addView('.view-main', fw7ViewOptions);

var upscroller = fw7App.upscroller('Go up')

var $scroller = $(".page-content");
$scroller.bind('touchstart', function (ev) {
  var $this = $(this);
  var scroller = $scroller.get(0);

  if ($this.scrollTop() === 0) $this.scrollTop(1);
  var scrollTop = scroller.scrollTop;
  var scrollHeight = scroller.scrollHeight;
  var offsetHeight = scroller.offsetHeight;
  var contentHeight = scrollHeight - offsetHeight;
  if (contentHeight == scrollTop) $this.scrollTop(scrollTop-1);
});