import React from 'react';
import ReactDOM from 'react-dom';

export default class Index extends React.Component {
	render() {
		return (
			<div className="container">
				component
			</div>
		);
	}
}

ReactDOM.render(<Index/>, document.getElementById('root'));

