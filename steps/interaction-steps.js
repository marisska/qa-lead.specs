const locatorHelpers = require('../helpers/locator-helpers.js');

module.exports = {
  clickButton(button) {
    locatorHelpers.getLink(button).click();
  },
  clickLinkWithText(link) {
    locatorHelpers.getPartialLink(link).click();
  },
  clickHeaderWithText(header) {
    locatorHelpers.getPartialHeader(header).click();
  },  
  clickLinkInSection(link, section) {
     locatorHelpers.getLinkInSection(link, section).click();
  }
}