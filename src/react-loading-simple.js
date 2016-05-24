var React = require('react');
var svgSources = require('./svg');
require('./react-loading-simple.scss');

var ReactLoadingSimple = React.createClass({

	propTypes: {
		loading: React.PropTypes.bool,
		type: React.PropTypes.string
	},

	getDefaultProps: function() {
		return {type: 'balls'};
	},

	render: function() {
		var svg = svgSources[this.props.type];
		return (
			<div className='react-loading-simple' dangerouslySetInnerHTML={{__html: svg}}>
			</div>
		);
	}
});

module.exports = ReactLoadingSimple;
