import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './auth/authApi'
import userReuducder from './userInfo'


export const store = configureStore({
  reducer: {

    userInfo: userReuducder,

    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware
    ]),
})

