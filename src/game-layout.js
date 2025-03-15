import { Field, Information } from './components';
import { handleRestart } from './handlers/handle-restart';
import styles from './game.module.css';

export const GameLayout = () => {
	return (
		<div className={styles.game}>
			<Information  />
			<Field />
			<button className={styles.restartButton} onClick={handleRestart}>
				Начать заново
			</button>
		</div>
	);
};

