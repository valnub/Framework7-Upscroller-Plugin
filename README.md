# Upscroller Plugin for Framework7

## Wait! Read this before you install!

Let me guess: You're using Framework7 with PhoneGap/Cordova on iOS and you need this plugin as a workaround for not being able to tap the status bar and automatically scroll up, right? Well then, better read this first: http://timo-ernst.net/blog/2015/10/05/how-to-scroll-up-by-tapping-status-bar-in-cordovaphonegap-apps-on-ios-with-webkit-overflow-scrollingtouch/

If you still need the plugin for a different purpose then go ahead and install this plugin and have fun :-)

## Plugin description

The problem with a lot of webapps is that you can't scroll the content up by simply clicking the top bar of the screen, this also includes apps created with Framework7. The reason for this is that not the document itself is scrolled, but the content of a div element is. This leads to nice looking momentum and fixes most problems with position:fixed elements. However, one big flaw is that you take away the user's ability to quickly scroll up a list by simply clicking the top of the screen. This little plugin for Framework7 fixes this by showing a small blue button at the top of the screen once the user has started scrolling down a bit. It looks like this:

![Screenshot](https://raw.githubusercontent.com/valnub/Framework7-Upscroller-Plugin/master/screenshot.jpg)

## Demo

Plugin comes with demo example to see how it works and looks.
* To check the demo directly from the repository, you should install bower dependencies.  
Go to `demo/` folder and execute in terminal `bower install`

* Or you could simply check it here http://www.timo-ernst.net/misc/upscrollerdemo/

## How to use

Very simple. Just copy the CSS and JS files from `dist/` folder to your project and reference them:

```html
<link rel="stylesheet" href="upscroller.min.css">
<script type="text/javascript" src="upscroller.min.js"></script>
```

The plugin will be initialized automatically. The default label of the button is 'Go up'.
If you'd like to change the button label, simply declare it during your app's initialization.

```javascript
fw7App = new Framework7({
  upscroller: {text : 'Your button label'}
});
```

## Ignore pages

The Upscroller Plugin is included in every page you enter. If you want to ignore the upscroller plugin in some pages, you may now use the following parameter:

```javascript
fw7App = new Framework7({
  upscroller: {
    text : 'Your button label',
    ignorePages: ['about'] // defaults to []
  }
});
```

## Customize it

To change the look and feel, just edit upscroller.css and you should be ready to go! Let me know if you need any other stuff that you miss!

## That's it. Happy coding! :-)

Made with <3 by www.timo-ernst.net

My YouTube channel about Framework7: http://youtube.com/xvalmar
