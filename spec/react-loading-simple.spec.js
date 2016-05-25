var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var ReactLoadingSimple = require('../src/react-loading-simple');

describe('ReactLoadingSimple', function() {
  var component;

  beforeEach(function() {
    component = TestUtils.renderIntoDocument(
      <ReactLoadingSimple/>
    );
  });

  it('should render', function() {
    expect(ReactDOM.findDOMNode(component).className).toEqual('react-loading-simple');
  });
});
