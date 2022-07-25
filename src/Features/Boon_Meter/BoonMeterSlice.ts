import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import OrigDataInterface from "./Boon/OrigDataInterface"
import IBoonProps from "./Boon/BoonInterface";
import boonTestData from '../../Data/boons-test.json'
import boonData from '../../Data/boons.json'


type InitialState = {
  boonsSet1: OrigDataInterface[],
  boonsSet2: OrigDataInterface[],
}

const data1 = boonTestData.data;
const data2 = boonData.data;

const initialState: InitialState = {
  boonsSet1: [...data1],
  boonsSet2: [...data2],
}

const boonMeterSlice = createSlice({
  name: 'boons',
  initialState,
  reducers:{
    
  }
})

export default boonMeterSlice.reducer;
