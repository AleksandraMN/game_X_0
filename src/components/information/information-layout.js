import PropTypes from 'prop-types';
import { Component } from 'react';

export class InformationLayout extends Component {
	render() {
		const { information } = this.props;
		return <div>{information}</div>;
	}
}

InformationLayout.propTypes = {
	information: PropTypes.string,
};
