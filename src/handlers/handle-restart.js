import { PLAYER, STATUS } from '../constants';
import { createEmptyField } from '../utils';

export const handleRestart = ({ setField, setStatus, setCurrentPlayer}) => {
		setStatus(STATUS.TURN);
		setCurrentPlayer(PLAYER.CROSS);
		setField(createEmptyField());
	};

