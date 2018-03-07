var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var ReactLoadingSimple = require('./src/react-loading-simple.js');

var DemoLoading = createReactClass({

	getInitialState: function() {
		return {loading: true};
	},

	startStopLoading: function() {
		this.setState({ loading: !this.state.loading })
	},

	render: function() {
		var startStop = (this.state.loading === true) ? 'stop' : 'start'
		return (
			<div>
				<button onClick={this.startStopLoading}>Click to {startStop} loading</button>
				<ReactLoadingSimple loading={this.state.loading} type='balls' />
				<ReactLoadingSimple loading={this.state.loading} type='bars'/>
				<ReactLoadingSimple loading={this.state.loading} type='blank'/>
				<ReactLoadingSimple loading={this.state.loading} type='bubbles'/>
				<ReactLoadingSimple loading={this.state.loading} type='cubes'/>
				<ReactLoadingSimple loading={this.state.loading} type='cylon'/>
				<ReactLoadingSimple loading={this.state.loading} type='spin'/>
				<ReactLoadingSimple loading={this.state.loading} type='spinningBubbles'/>
				<ReactLoadingSimple loading={this.state.loading} type='spokes'/>
			</div>
		);
	}
});
ReactDOM.render(React.createElement(DemoLoading), document.getElementById('main'));
