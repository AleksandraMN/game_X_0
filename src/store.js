import {appReducer} from './reducer';

const createStore = (reducer) => {
  let state;
  const listeners = [];

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener(state));
  };

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      if (index >= 0) listeners.splice(index, 1);
    };
  };

  dispatch({}); // Инициализация состояния

  return { dispatch, getState, subscribe };

};

export const store = createStore(appReducer);

