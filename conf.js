exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'https://www.freeletics.com',
  capabilities: {
    browserName: 'chrome'
  },
  specs: ['specs/qa-lead-specs.js']
};