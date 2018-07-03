# WebStarter

Front end development starter guide

## Purpose

> A browser is a software application for accessing information on the World Wide Web.
Each individual web page, image, and video is identified by a distinct URL, enabling browsers to retrieve and display them on the user's device (wikipedia).

You are not here to learn HTML, CSS or JavaScript. So what!?

You are here to see how these technologies allow you to interact with the browser.

So, what is our definition of the browser?

> The browser is an engine capable of interpreting an **HTML** document to build the DOM (Document Object Model), that is to say the web page (me ;-).

The DOM can then be accessed and manipulated by **CSS** and **JavaScript** technologies through an API made available by the browser.

But the DOM only represent the rendered document on the user's device! Do we have something that represent the browser itself, that is to say the window ? Yes, of course!

It's called the BOM (Browser Object Model). In other words, the DOM is just a part the BOM.

*Here are the main properties of the window context:*

- navigator
- screen
- location
- history
- document

## Prerequisites

You installed [nodejs](https://nodejs.org) on your machine.

## Usage

Open the terminal and execute the commands:

```bash
# Install package dependencies
npm install

# Start local web server
npm start
```

Next, open your favorite browser and naviagte to `http://127.0.0.1:3100/app/`.
