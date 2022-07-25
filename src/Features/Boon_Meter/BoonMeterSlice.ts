import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IBoonProps from "./Boon/BoonInterface";
import boonData from '../../Data/boons.json'


type InitialState = {
  boons: IBoonProps[]
}

const ZrdBoon = {id:'zach-id', name: 'ZRD Mega Nuke', god: 'ZRD', weapon_category: 'attack', buff_category: 'damage', damage_modifier: 1000}

const initialState: InitialState = {
  boons: [ZrdBoon]
}

const boonMeterSlice = createSlice({
  name: 'boons',
  initialState,
  reducers:{
    
  }
})

export default boonMeterSlice.reducer;
