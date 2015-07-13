import React from 'react/addons';
import ReactLoadingSimple from '../lib/react-loading-simple.jsx';

describe('ReactLoadingSimple', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <ReactLoadingSimple/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('react-loading-simple');
  });
});
