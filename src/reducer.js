import { PLAYER, STATUS } from './constants';
import { createEmptyField } from './utils';

export const initialState = {
	status: STATUS.TURN,
	currentPlayer: PLAYER.CROSS,
	field: createEmptyField(),
};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_GAME_DATA': {
			return { ...state, ...payload };
		}
		case 'SET_GAME_STATUS': {
			return {
				...state,
				status: payload,
			};
		}
		case 'SET_GAME_CURRENT_PLAYER': {
			return {
				...state,
				currentPlayer: payload,
			};
		}
		case 'SET_GAME_FIELD': {
			return {
				...state,
				field: payload,
			};
		}
		case 'SET_GAME_RESTART': {
			return {
				...state,
				status: STATUS.TURN,
				currentPlayer: PLAYER.CROSS,
				field: createEmptyField(),
			};
		}
		default:
			return state;
	}
};
