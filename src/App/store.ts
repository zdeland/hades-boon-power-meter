import { configureStore } from '@reduxjs/toolkit'
import boonMeterReducer from '../Features/Boon_Meter/BoonMeterSlice'

const store = configureStore({
    reducer: {
        boonMeter: boonMeterReducer, 
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch