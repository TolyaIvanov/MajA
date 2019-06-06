import React from 'react'

class ListItem extends React.Component{
	render() {
		return (
			<li key={this.props.id} className={'request-list-item'}>
				<div className={'value'}> {this.props.value} </div>
				<div className={'palindromes'}>{ this.props.palindromes }</div>
			</li>
		);
	}
}

export default ListItem;