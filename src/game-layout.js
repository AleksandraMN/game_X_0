import { Field, Information } from './components';
import styles from './game.module.css';
import PropTypes from 'prop-types';

export const GameLayout = ({handleRestart}) => {
	return (
		<div className={styles.game}>
			<Information  />
			<Field  />
			<button className={styles.restartButton} onClick={handleRestart}>
				Начать заново
			</button>
		</div>
	);
};

GameLayout.propTypes = {
	handleCellClick: PropTypes.func,
};

