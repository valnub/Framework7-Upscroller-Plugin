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