const EC = protractor.ExpectedConditions;
module.exports = {
  getHeader() {
    return element(by.css('h1'));
  },
  getPartialHeader(header) {
  	return element(by.xpath(`//h3[contains(text(), '${header}')]`));
  },
  getProperty(property) {
    return element(by.xpath(`//div[@itemprop='${property}'] | //span[@itemprop='${property}'] `));
  },
  getSection(section) {
  	return element(by.xpath(`//h2[contains(text(), '${section}')]/ancestor::section`));
  },
  getLink(link) {
  	return element(by.linkText(link));
  },
  getPartialLink(link){
  	return element(by.xpath(`//a/*[contains(text(), '${link}')]`));
  },
  getLinkInSection(link, css){
  	var section = element(by.css(css));
    browser.wait(EC.elementToBeClickable(section), 10000);
  	return section.all(by.linkText(link));
  }
}