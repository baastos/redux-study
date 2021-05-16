import { createStore } from 'redux';
import rootReducers from './modules/rootReducers';
import { User } from './modules/user/types';

export interface StoreProps{
  user: User;
}

const store = createStore(rootReducers)

export default store;