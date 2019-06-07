import React from 'react'

const RequestList = props => (
	<div className={'requests'}>
		<h3 className={'title'}>Request list</h3>
		<div className="columns-header">
			<div className="value-title">Values</div>
			<div className="palindromes-title">Palindromes</div>
		</div>
		<ul className={'request-list'}>
			{
				props.children
			}
		</ul>
	</div>
);

export default RequestList;