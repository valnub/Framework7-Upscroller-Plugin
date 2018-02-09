import upscroller from 'f7-upscroller';

Framework7.use(upscroller);

var app = new Framework7({
  root: '#app',
  name: 'Upscroller demo',
  id: 'de.timoernst.f7.upscroller',
  theme: 'ios',
  upscroller: {
    // text: 'Go down',
    // ignorePages: ['about'],
  },
});

var mainView = app.views.create('.view-main');