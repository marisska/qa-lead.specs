# QA Lead Specifications
UI tests for QA Lead job post

## PART I
The project includes the UI test suit to check QA Lead Engineer job post on Freeletics site

### Build

Use npm to install Protractor globally with:

	npm install -g protractor

Use webdriver-manager to download the necessary binaries with:

	webdriver-manager update

### Run tests

Start up a server with:

	webdriver-manager start

You can see information about the status of the server at http://localhost:4444/wd/hub.

Run tests with:

	protractor conf.js

## PART II

* To run tests in the mobile version, the configuration file would need to include in capabilites the mobile emulation parameter with the device name, e.g.

	capabilities: {
	  browserName: 'chrome',
	  'chromeOptions': {
	    'mobileEmulation': {
	      'deviceName': 'Nexus 5'
	    }
	  }
	}

Run tests in the mobile version with:
	protractor conf-mobile.js
