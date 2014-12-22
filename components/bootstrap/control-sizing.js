module.exports = ControlSizing;

function ControlSizing(browser) {
  this.browser = browser;
}

ControlSizing.prototype.selector = '.controls > *'; // precise sibling selectors are helpful

ControlSizing.prototype.getInputs = function () {
  return this.browser.findElements({css: this.selector});
};
