# WebStarter

Front end development starter guide

## Goal

On Wikipedia you can find the following definition:

> A browser is a software application for accessing information on the World Wide Web.
Each individual web page, image, and video is identified by a distinct URL, enabling browsers to retrieve and display them on the user's device (Wikipedia).

You are not here to learn HTML, CSS or JavaScript. So what!?

You are here to see how the browser allows these technologies to interact with it.

So, what's my definition of the browser?

> The browser is an engine capable of interpreting an **HTML** document in order to build the DOM (Document Object Model), that is to say the web page (Me ;-).

The DOM can then be accessed and manipulated by **CSS** and **JavaScript** through an API made available by the browser.

### A simple HTML document

```html
<!DOCTYPE html>
<html>
  <head>

    <meta charset="utf-8">
    <title>Hello world!</title>
    <link rel="shortcut icon" href="./favicon.ico">

  </head>
  <body>

    <h1>Hello world!</h1>
    <p>Lorem ipsum...</p>

  </body>
</html>
```

But the DOM only represent the rendered document on the user's device!
Does the browser give us information about itself as a software, or possibly about the user's device?

The answer is, yes!

It's called the BOM (Browser Object Model). In other words, the DOM is just a part the BOM.

The BOM is the context, aka the `window`, aka what `this` refers to, in which JavaScript is executed.

*Here are the main properties of the window context:*

- screen (the user's device - not the browser window)
- navigator (the browser as a software)
- location (the url)
- history (the history of visited pages)
- document (the current rendered page)

## Prerequisites

You installed [nodejs](https://nodejs.org) on your machine.
We use nodejs to simply start a local web server.

## Usage

Open the terminal and execute the commands:

```bash
# Install package dependencies
npm install

# Start local web server
npm start
```

Next, open your favorite browser and navigate to `http://127.0.0.1:3100/app/`.
