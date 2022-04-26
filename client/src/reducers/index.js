import { combineReducers } from 'redux';

import user from './user';
import meal from './userData';
import manager from './manager';

const reducers = combineReducers({ user, meal, manager });

export default reducers;