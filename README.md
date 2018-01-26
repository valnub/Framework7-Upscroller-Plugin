# Upscroller Plugin for Framework7

The problem with a lot of webapps is that you can't scroll the content up by simply clicking the top bar of the screen, this also includes apps created with Framework7. The reason for this is that not the document itself is scrolled, but the content of a div element is. This leads to nice looking momentum and fixes most problems with position:fixed elements. However, one big flaw is that you take away the user's ability to quickly scroll up a list by simply clicking the top of the screen. This little plugin for Framework7 fixes this by showing a small blue button at the top of the screen once the user has started scrolling down a bit. It looks like this:

![Screenshot](https://raw.githubusercontent.com/valnub/Framework7-Upscroller-Plugin/92f8fb331ff5e009c80d06613d40899a050bdc36/screenshot.jpg)

## Demo

Plugin comes with demo example to see how it works and looks.
+ Make sure that you have gulp installed (`npm install -g gulp`) and then just run default task `gulp` from project directory.
* Or you could simply check it here http://www.timo-ernst.net/misc/upscrollerdemo/

### F7 compatibility
- v1: No (For older version with compatibility of F7 v1 check [here](https://github.com/valnub/Framework7-Upscroller-Plugin/releases/tag/1.0).)
- v2: Yes

## How to use

Very simple. Just copy the CSS and JS files from `dist/` folder to your project and reference them:

```html
<link rel="stylesheet" href="upscroller.min.css">
<script type="text/javascript" src="upscroller.min.js"></script>
```

The plugin will be initialized when you install it with `Framework7.use()`:

```javascript
Framework7.use(f7UpscrollerPlugin);
```

The default label of the button is 'Go up'. If you'd like to change the button label, simply declare it during your app's initialization.

```javascript
Framework7.use(f7UpscrollerPlugin);

var app = new Framework7({
  root: '#app', // Your app root id
  theme: 'ios',
  upscroller: {
    text: 'New text!', // Change button label text here!
  },
});
```

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

## Customize it

To change the look and feel, just overwrite styles defines in `upscroller.css` and you should be ready to go! Let me know if you need any other stuff that you miss!

## That's it. Happy coding! :-)

Made with <3 by www.timo-ernst.net

My YouTube channel about Framework7: http://youtube.com/xvalmar
