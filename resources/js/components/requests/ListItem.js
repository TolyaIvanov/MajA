import React from 'react'

class ListItem extends React.Component {
	render() {
		return (
			<li className={'request-list-item'}>
				<div className={'value'}> {this.props.value} </div>
				<ul className={'palindromes'}>
					{
						this.props.palindromes.map((pal) => (
								<li key={pal} className={'palindrome'}>
									{pal}
								</li>
							)
						)
					}
				</ul>
			</li>
		);
	}
}

export default ListItem;