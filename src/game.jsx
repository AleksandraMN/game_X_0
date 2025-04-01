import { GameLayout } from './game-layout';
import { RESTART_GAME } from './actions';
import { connect } from 'react-redux';
import { Component } from 'react';
import PropTypes from 'prop-types';

class GameContainer extends Component {

	handleRestart = () => {
		this.props.dispatch(RESTART_GAME);
	};

	render() {
		return <GameLayout handleRestart={this.handleRestart} />;
	}
}

export const Game = connect()(GameContainer);

GameContainer.propTypes = {
	dispatch: PropTypes.func.isRequired,
};
