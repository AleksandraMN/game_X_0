import { Component } from 'react';
import  {Field, Information}  from './components';
import PropTypes from 'prop-types';

export class GameLayout extends Component {
	render() {
		const { handleRestart } = this.props;
		return (
			<div className="flex mt-12 mb-12 mx-auto w-25 flex-col items-center">
				<Information />
				<Field />
				<button className="button" onClick={handleRestart}>Начать заново</button>
			</div>
		);
	}
};

GameLayout.propTypes = {
	handleRestart: PropTypes.func,
};
