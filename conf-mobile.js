exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'https://www.freeletics.com',
  capabilities: {
    browserName: 'chrome',
    'chromeOptions': {
        'mobileEmulation': {
            'deviceName': 'Nexus 5'
        }
    }
  },
  specs: ['specs/qa-lead-specs.js']
};