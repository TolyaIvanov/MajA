import React from 'react'
import {connect} from "react-redux";

import Input from './../../components/form/Input'

import {
	inputChanging
} from "../../actions/input/actionsCreator";

class InputContainer extends React.Component {
	render() {
		return (
			<Input
				change={this.props.change}
				val={this.props.value}
			/>
		);
	}
}

const mapStateToProps = state => ({
	value: state.inputChanging
});

const mapDispatchToProps = dispatch => ({
	change: (e) => dispatch(inputChanging(e.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(InputContainer);