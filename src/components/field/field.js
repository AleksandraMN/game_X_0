import { FieldLayout } from "./field-layout";
import { useEffect, useState } from 'react';
import { store } from '../../store';

export const Field = () => {
	const [state, setState] = useState(store.getState());
	const {field} = state;

  useEffect(() => {
    const unsubscribe = store.subscribe((newState) => {
      setState(newState);
    });

    store.dispatch({ type: 'SET_GAME_DATA'});

    return unsubscribe; 
  }, []);

	return <FieldLayout field={field} />
};
