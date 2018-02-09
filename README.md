# Upscroller Plugin for Framework7

This plugin creates a blue button which slides in from the top of the screen when the user has scrolled down. When clicked or sliding back up manually, the button disappears.

![Screenshot](https://raw.githubusercontent.com/valnub/Framework7-Upscroller-Plugin/master/demo.gif)

## Example
Open `demo/dist/index.html` in your browser.

### Demo source code
Check `demo/src/index.js`.

### Run a new demo build:

```shell
$ cd demo
$ npm install
$ npm run build
```

## Live demo
Check it here http://www.timo-ernst.net/misc/upscrollerdemo/

## Install

```
npm install f7-upscroller
```

Then in your code something like this:

```javascript
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
```

The default label of the button is 'Go up'. If you'd like to change the button label, simply declare it during your app's initialization.

## Ignore pages

The Upscroller Plugin is included in every page you enter. If you want to ignore the upscroller plugin in some pages, you may now use the following parameter:

```javascript
Framework7.use(f7UpscrollerPlugin);

var app = new Framework7({
  root: '#app', // Your app root id
  theme: 'ios',
  upscroller: {
    ignorePages: ['about'], // Add pages to ignore here
  },
});
```

### F7 compatibility
- v1: No (For older version with compatibility of F7 v1 check [here](https://github.com/valnub/Framework7-Upscroller-Plugin/releases/tag/1.0).)
- v2: Yes

| F7 version    | Compatible?   |
| ------------- |:-------------:|
| 1.x           | No (For older version with compatibility of F7 v1 check [here](https://github.com/valnub/Framework7-Upscroller-Plugin/releases/tag/1.0).) |
| 2.x (V2)      | Yes      |


## That's it. Happy coding! :-)

Made with <3 by www.timo-ernst.net

My YouTube channel about Framework7: http://youtube.com/xvalmar
