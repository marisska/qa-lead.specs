# QA Lead Specifications
UI tests for QA Lead job post

## PART I
The project includes the UI test suit to check QA Lead Engineer job post on Freeletics site

### Build

Use npm to install Protractor globally with:

	npm install -g protractor

Use webdriver-manager to download the necessary binaries with:

	webdriver-manager update

In order to start webdriver manager, you would need JDK http://www.oracle.com/technetwork/java/javase/downloads/index.html

### Run tests

Start up a server with:

	webdriver-manager start

You can see information about the status of the server at http://localhost:4444/wd/hub.

Run tests with:

	protractor conf.js

## PART II

* To run tests in the mobile version, the configuration file would need to include the mobile emulation parameter with the device name in the driver capabilities, e.g.

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

* To run tests in the real device (theoretically), the configuration file would need to include the device characteristics in the driver capabilities: device name and id, platform name and version, e.g.

	deviceName: 'Android Phone',
	udid: '<deviceId>', 
	platformName: 'Android',
	platformVersion: '6.0'

In addition, (theroretically) you could need Android SDK

* To run tests in a hybrid app, (theroretically) the configuration file would need to include app characteristics, the application needs to be started on a device before running the tests

	appPackage: '<appPackage>',
	appActivities: '<appActivities>'

* To run tests in a native app, the implementation of the steps need to be adjusted
