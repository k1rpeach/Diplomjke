import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import {recommendationsApi } from './API/userApi'
import { detailsApi } from './API/detailsApi'

export const store = configureStore({
  reducer: {
    userSlice,
    [recommendationsApi.reducerPath]: recommendationsApi.reducer,
    [detailsApi.reducerPath]: detailsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat([recommendationsApi.middleware, detailsApi.middleware]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
