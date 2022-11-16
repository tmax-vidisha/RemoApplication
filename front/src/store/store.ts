import { configureStore, ThunkAction, Action  } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { 
  usersApi,
  oneDriveApi 
} from '../services/graph'
import { graphApi } from '../services/APIs';
import { contentEditorApi } from '../services/contentEditor';
export const store = configureStore({
  reducer: {
    [contentEditorApi.reducerPath]: contentEditorApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
     [oneDriveApi .reducerPath]: oneDriveApi.reducer,
    // counter: counterReducer,
    [graphApi.reducerPath]:graphApi.reducer,
   
  },
  middleware: (getDefaultMiddleware) => [
  ...getDefaultMiddleware(),
    contentEditorApi.middleware,
    usersApi.middleware,
    oneDriveApi.middleware,
    graphApi.middleware,
   
  ],
  // middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(graphApi.middleware),
})

setupListeners(store.dispatch)
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
