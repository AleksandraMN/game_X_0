import { Field, Information } from './components';
import { PLAYER, STATUS } from './constants';
import styles from './game.module.css';
import PropTypes from 'prop-types';

export const GameLayout = ({
	status,
	currentPlayer,
	handleCellClick,
	field,
	handleRestart,
}) => {
	return (
		<div className={styles.game}>
			<Information status={status} currentPlayer={currentPlayer} />
			<Field handleCellClick={handleCellClick} field={field} />
			<button className={styles.restartButton} onClick={handleRestart}>
				Начать заново
			</button>
		</div>
	);
};

GameLayout.propTypes = {
	status:  PropTypes.oneOf([STATUS.DRAW, STATUS.TURN, STATUS.WIN]),
	currentPlayer: PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOBODY, PLAYER.NOUGHT]),
	handleRestart: PropTypes.func,
	field: PropTypes.arrayOf(PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOBODY, PLAYER.NOUGHT])),
	handleCellClick: PropTypes.func,
};

