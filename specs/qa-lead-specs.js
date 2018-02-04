const nav = require('../steps/navigation-steps.js');
const interactor = require('../steps/interaction-steps.js');
const reader = require('../steps/read-steps.js');

describe('QA Lead job post', function() {
  nav.navigateTo('/en');
  interactor.clickLinkInSection('Careers','.footer');
  interactor.clickLinkWithText('open position');
  interactor.clickHeaderWithText('Lead QA Engineer');    

  it('should have Lead QA Engineer header', function() {
    reader.shouldReadHeader('Lead QA Engineer (m/f)');
  });

  it('should have Munich location', function() {
    reader.shouldReadProperty('jobLocation', 'Munich');
  });

  it('should have description', function() {
    reader.shouldReadProperty('description');
  });

  it('should include 8 responsibilities', function() {
    reader.shouldHavePointsInSection('Your Responsibilities', 8);
  });

  it('should include 7 profile requirements', function() {
    reader.shouldHavePointsInSection('Your Profile', 7);
  });

  it('should redirect to application form', function() {
    interactor.clickButton('Apply Now');
    reader.urlShouldEndsWith('apply');
  });
});