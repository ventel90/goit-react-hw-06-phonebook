import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';

import { rootReducer } from './reducers/reducer';

export const store = createStore(rootReducer, devToolsEnhancer());