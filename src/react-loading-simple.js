var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');
var svgSources = require('./svg');
require('./react-loading-simple.scss');

var ReactLoadingSimple = createReactClass({

	propTypes: {
		loading: PropTypes.bool,
		type: PropTypes.string
	},

	getDefaultProps: function() {
		return {type: 'balls'};
	},

	render: function() {
		var svg = (this.props.loading === false) ? '' : svgSources[this.props.type];
		return (
			<div className='react-loading-simple' dangerouslySetInnerHTML={{__html: svg}}>
			</div>
		);
	}
});

module.exports = ReactLoadingSimple;
