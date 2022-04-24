import { combineReducers } from 'redux';

import user from './user';
import meal from './userData';

const reducers = combineReducers({ user, meal });

export default reducers;