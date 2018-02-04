const locatorHelpers = require('../helpers/locator-helpers.js');

module.exports = {
  shouldReadHeader(text) {
    return expect(locatorHelpers.getHeader().getText()).toEqual(text);
  },
  shouldReadProperty(property,text){
  	var locator = locatorHelpers.getProperty(property);
    return expect(locator.getText()).toEqual(text);
  },
  shouldReadProperty(property){
  	var locator = locatorHelpers.getProperty(property);   
    return expect(locator.getText()).not.toEqual('');
  },
  shouldHavePointsInSection(section,numberOfPoints) {
    var locator = locatorHelpers.getSection(section);
    var points = locator.all(by.css('li'));
    expect(points.count()).toBe(numberOfPoints);
  },
  urlShouldEndsWith(urlEnd){
  	browser.waitForAngularEnabled(false);
  	browser.getCurrentUrl().then( function( url ) {
	  	expect(url.endsWith(urlEnd)).toBe.true;
	});
  }
}