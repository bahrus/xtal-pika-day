# \<xtal-pika-day\>

Vanilla web component wrapper around the lightweight [pikaday date picker](https://github.com/dbushell/Pikaday). 

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

Be default, pikaday.css located in the same folder as this component will load (into non Shadow DOM).  To use your own css, add a reference in document.head:

```html
<head>
    <link rel="stylesheet" href="myCssFile.css" id="xtal_pika_day_css"/>
</head>
```

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
