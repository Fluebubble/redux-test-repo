// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';

// const enchancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enchancer);

import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer, rootReducer, tasksReducer } from './reducer';
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
