import { store } from '../store';


export const handleRestart = () => {
	store.dispatch({ type: 'SET_GAME_RESTART'});
};
