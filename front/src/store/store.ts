import { configureStore, ThunkAction, Action  } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { 
  usersApi,
  intranetApi 
} from '../services/graph'
import { graphApi } from '../services/APIs';
export const store = configureStore({
  reducer: {
    // [usersApi.reducerPath]: usersApi.reducer,
    // [intranetApi .reducerPath]: intranetApi .reducer,
    // counter: counterReducer,
    [graphApi.reducerPath]:graphApi.reducer,
  },
  // middleware: (getDefaultMiddleware) => [
  //   // ...getDefaultMiddleware(),
  //   // usersApi.middleware,
  //   // intranetApi.middleware,
  //   graphApi.middleware
  // ],
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(graphApi.middleware),
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
