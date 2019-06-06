import React from 'react'

class RequestList extends React.Component {
	render() {
		return (
			<div className={'requests'}>
				<h3>Request list</h3>
				<ul className={'request-list'}>
					{
						this.props.children
					}
				</ul>
			</div>
		);
	}
}

export default RequestList;