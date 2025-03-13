
import { useState } from 'react';
import { GameLayout } from './game-layout';
import { STATUS, PLAYER } from './constants';
import { handleRestart } from './handlers/handle-restart';
import { handleCellClick } from './handlers/handle-cell-click';
import { createEmptyField } from './utils';


export const Game = () => {
	const [status, setStatus] = useState(STATUS.TURN);
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS);
	const [field, setField] = useState(createEmptyField());

	const state = { status, field, currentPlayer, setField, setStatus, setCurrentPlayer };

	return (
		<GameLayout
			status={status}
			currentPlayer={currentPlayer}
			handleCellClick={(cellIndex) => handleCellClick(state, cellIndex)}
			field={field}
			handleRestart={() => handleRestart(state)}
		/>
	);
};

