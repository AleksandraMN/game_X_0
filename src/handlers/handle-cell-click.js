import { checkEmptyCell, checkWin } from '../utils';
import { STATUS, PLAYER } from '../constants';
import { store } from '../store';

export const handleCellClick = (cellIndex) => {
	const {status, field, currentPlayer} = store.getState();
	if (
		status === STATUS.WIN ||
		status === STATUS.DRAW ||
		field[cellIndex] !== PLAYER.NOBODY
	) {
		return;
	}

	const newField = [...field];
	newField[cellIndex] = currentPlayer;

	store.dispatch({ type: 'SET_GAME_FIELD', payload: newField});

	if (checkWin(newField, currentPlayer)) {
		store.dispatch({ type: 'SET_GAME_STATUS', payload: STATUS.WIN});
	} else if (checkEmptyCell(newField)) {
		store.dispatch({ type: 'SET_GAME_CURRENT_PLAYER', payload: (currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS)});
	} else {
		store.dispatch({ type: 'SET_GAME_STATUS', payload: STATUS.DRAW});
	}
};
