# @studiohyperdrive/logger v1.0.0 #
SHD logging module: an abstraction on console.log for both frontend as backend (Node.js).


# Table of contents #

* [Setup](#setup)
    * [System Dependencies](#system-dependencies)
    * [Init](#init)
* [Codebase](#codebase)
    * [Structure](#structure)
    * [NPM Scripts](#npm-scripts)
* [Code Contribution](#code-contribution)
    * [Branches](#branches)
* [Project Context](#project-context)
    * [Details](#details)
    * [Team](#team)


---
## Setup ##

### System Dependencies ###

* [Node.js lts/carbon](https://nodejs.org/en/)

### Init ###

This package consists of a codebase for both the browser and Node.js logger. Therefore dependencies can be installed and scripts can be executed in these subfolders.

* `npm start` // Will install all dependencies for bundling the package.

**browser**

* `npm start` // Will install the dependencies and build the browser logger.
* `npm run demo` // Runs an example application using the browser logger.

**nodejs**

* `npm start` // Will install the dependencies and build the Node.js logger.
* `npm run demo` // Runs an example application using the Node.js logger.

---
## Codebase ##

### Structure ###

* **browser/**: Contains the library code for the browser logger.
* **dist/**: Contains the built bundles for this package.
* **nodejs/**: Contains the library code for the Node.js logger.
* **scripts/**: Contains the build and publish script for this package.

### Dependencies ###

* **high-console**: The browser logger's output mechanism is based on [high-console](https://github.com/tusharf5/high-console).
* **signale**: The Node.js logger outputs messages to the console using [signale](https://github.com/klauscfhq/signale).
* **winston**: The Node.js logger uses [winston](https://github.com/winstonjs/winston) for transporting messages to the console and daily logfiles.

### External Services ###

* **Slack**: The Node.js logger has an option to emit error messages to a channel on your [Slack](https://slack.com/) workspace.


### NPM Scripts ###

| Command       | Description
| ------------- |------------
| start         | Install the dependencies and build the package.
| build         | Build the package.
| release       | Build and release the package.

All commands are executable by running `npm run [COMMAND-NAME]`.


---
## Code Contribution ##

### Branches ###

We follow these naming conventions:

* **master**: Production-ready code.
* **release/***: Snapshot of a release.
* **feature/***: For developing new features.
* **bugfix/***: For bugs that are logged during testing.
* **hotfix/***: Only for hotfixing critical bugs from the `master`-branch.


---
## Project Context ##

This project is a Studio Hyperdrive team effort.

### Details ###

* **Client**: Studio Hyperdrive
* **Start**: 01/10/2018

### Team ###

* [Niels Bril - Studio Hyperdrive](niels.bril@studiohyperdrive.be)
    * **Function**: Developer
    * **Period**: October 2018 - ...
