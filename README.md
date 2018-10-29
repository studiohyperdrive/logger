<h1 align="center">
@studiohyperdrive/logger
</h1>
<p align="center">
    <a href="#"><img src="https://img.shields.io/npm/v/@studiohyperdrive/logger.svg?colorB=1C1676"></a>
    <a href="#"><img src="https://img.shields.io/npm/dt/@studiohyperdrive/logger.svg?colorB=785FC8"></a>
    <a href="#"><img src="https://img.shields.io/bundlephobia/min/@studiohyperdrive/logger.svg?colorB=82BBED"></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-blue.svg?colorB=F342D7"></a>
</p>
<p align="center">
    <b>One logger to rule them all&nbsp;&nbsp;🚀</b>
    <br>
    <sub>Supports browser console and Node.js, only 3kB, configurable and MIT licensed</sub>
</p>
<hr>

**@studiohyperdrive/logger** is a logging library that supports both the browser and Node.js by exporting different bundles for both targets.

## Installation ##

Install through npm:

```shell
$ npm install @studiohyperdrive/logger
```

Install through yarn:

```shell
$ yarn add @studiohyperdrive/logger
```

## Browser ##

For usage with the browser a UMD and ESModule bundle are exported. It provides a `Logger` class which is an abstraction on console.log based on `high-console`.

### Usage ###

Create an instance of the logger and export it for usage in your application:

**logger.js**

<div style="text-align:center"><img src ="./assets/browser-usage-1.png" style="max-width:800px"/></div>

**app.js**

<div style="text-align:center"><img src ="./assets/browser-usage-2.png" style="max-width:800px"/></div>

**Output**

<div style="text-align:center"><img src ="./assets/browser-usage-3.png" style="max-width:800px;border-radius:10px"/></div>

### Configuration ###

When creating an instance of the `Logger` class configuration can be provided by passing an options object to the constructor.

<div style="text-align:center"><img src ="./assets/browser-configuration-1.png" style="max-width:800px"/></div>

#### Default configuration ####

The default configuration is the following:

```js
{
    enabled: [ // Enabled loglevels
        "debug",
        "info",
        "success",
        "warn",
        "error"
    ]
}
```

## Node.js ##

For usage with Node.js a CommonJS bundle is exported. It provides a `Logger` class which is an abstraction on console.log based on `signale`.

_Other features_:
- Logging to the filesystem using daily rotating files
    * all
    * warn
    * error
- Sending alerts to Slack for error logs

### Usage ###

Create an instance of the logger and export it for usage in your application:

**logger.js**

<div style="text-align:center"><img src ="./assets/nodejs-usage-1.png" style="max-width:800px"/></div>

**app.js**

<div style="text-align:center"><img src ="./assets/nodejs-usage-2.png" style="max-width:800px"/></div>

**Output**

<div style="text-align:center"><img src ="./assets/nodejs-usage-3.png" style="max-width:800px;border-radius:10px"/></div>

### Configuration ###

When creating an instance of the `Logger` class configuration can be provided by passing an options object to the constructor.

<div style="text-align:center"><img src ="./assets/nodejs-configuration-1.png" style="max-width:800px"/></div>

#### Default configuration ####

The default configuration is the following:

```js
{
    enabled: [ // Enabled loglevels
        "debug",
        "info",
        "cron",
        "db",
        "success",
        "warn",
        "error"
    ],
    filesystem: {
        enabled: true, // Enable logging to filesystem
        path: "logs" // Path for the filesystem logs (from root)
    },
    signale: { // Signale options (https://github.com/klauscfhq/signale#configuration)
        coloredInterpolation: false,
        displayScope: true,
        displayBadge: true,
        displayDate: true,
        displayFilename: false,
        displayLabel: true,
        displayTimestamp: true,
        underlineLabel: true,
        underlineMessage: false,
        underlinePrefix: false,
        underlineSuffix: false,
        uppercaseLabel: true
    },
    slack: {
        app: "", // Name for the current application
        channel: "", // Slack channel to post the messages in (without the #)
        enabled: false, // Enable alerts to Slack for error logs
        token: "" // Slack bot user token
    }
}
```

### Slack ###

## Roadmap ##

We are continuously looking to improve this package. If you have any feedback or ideas, please let us know.

The roadmap as is today:

* Snippets
* Add support for custom, configurable types
* ...

## Contributing

Feel free to provide feedback, open issues or create pull-requests to this repository.

## License ##

**@studiohyperdrive/logger** is [MIT licensed](./LICENSE) by [Studio Hyperdrive](https://www.studiohyperdrive.be/).

## About us ##

[Studio Hyperdrive](https://www.studiohyperdrive.be/) is an experienced digital development studio focussed on all things JavaScript. Already 18 strong. Based in Antwerp & Ghent! With a handpicked set of skills we build anything from websites to chatbots and immersive cross reality experiences.
