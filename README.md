# Upscroller Plugin for Framework7
## A little plugin to give users a button to scroll up

The problem with a lot of webapps is that you can't scroll the content up by simply clicking the top bar of the screen, this also includes apps created with Framework7. The reason for this is that not the document itself is scrolled, but the content of a div element is. This leads to nice looking momentum and fixes most problems with position:fixed elements. However, one big flaw is that you take away the user's ability to quickly scroll up a list by simply clicking the top of the screen. This little plugin for Framework7 fixes this by showing a small blue button at the top of the screen once the user has started scrolling down a bit. It looks like this:

![Screenshot](https://raw.githubusercontent.com/valnub/Framework7-Upscroller-Plugin/master/screenshot.jpg)

## How to use

Very simple. Just copy the CSS and JS file to your project and reference them:

```html
<link rel="stylesheet" href="upscroller.css">
<script type="text/javascript" src="upscroller.js"></script>
```

Then, when you initialize your app, just do:

```javascript
fw7App.upscroller('Go up'); // Add any text you like there
```

## Customize it

To change the look and feel, just edit upscroller.css and you should be ready to go! Let me know if you need any other stuff that you miss!

That's it. Have fun!

Made with <3 by www.timo-ernst.net
