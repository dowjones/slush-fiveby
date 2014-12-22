var fiveby = require('fiveby');
var ControlSizing = require('../components').ControlSizing;

fiveby(function (browser) {
  // comments highlight tips to help keep testing code concise
  return describe('BootStrap Control Sizing Example in ' + browser.name, function () {

      before(function () {
        return browser.get('http://getbootstrap.com/css');
      });

      it('All direct children of controls should have form-control class', function () {
        var cs = new ControlSizing(browser);
        return promise.map(cs.getInputs(), function (elem) { // use promise helpers map, all, etc..
          elem.getAttribute('class').then(function (value) {
            value.should.containEql('form-control'); // using advanced should asserts where applicable
          });
        });
      });

    });

});
