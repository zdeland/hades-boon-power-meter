import React from 'react';
import logo from '../../Assets/Images/crap_hades_logo.png';
import './HomePage.css';
import charon_obol from '../../Assets/Images/charon_obol.jpg';
import BoonList from '../../Features/Boon_Meter/Boon-List/Boon-List';
import Boon from '../../Features/Boon_Meter/Boon/Boon'

import { useAppSelector } from '../../App/hooks'
import { JsxElement } from 'typescript';


function HomePage() {
  const appState = useAppSelector(state => state)
  console.log('appState',appState)

  // let boons: React.ReactElement[] = []

  // boons = appState.boonMeter.boons.map(b=>{
  //   <Boon id={'zach-id'} name={'ZRD Mega Nuke'} god={'ZRD'} weapon_category={'attack'} buff_category={'damage'} damage_modifier={1000} />
  // })

  // console.log("BOONS: ", boons)

  const boons = [<Boon id={'zach-id'} name={'ZRD Mega Nuke'} god={'ZRD'} weapon_category={'attack'} buff_category={'damage'} damage_modifier={1000} />]

  return (
    <div className="App">
      <header className="App-header">
        <h2>Hades Boon Power Meter</h2>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={charon_obol} className="rotate-img" alt="logo" />
        <br />
        <br />
        <br />
        <br />
        <BoonList boonList={boons} />
        

        {/* <BoonList boonList={[
          <Boon id={'zach-id'} name={'ZRD Mega Nuke'} god={'ZRD'} weapon_category={'attack'} buff_category={'damage'} damage_modifier={1000} />,
          <Boon id={'zach-id'} name={'ZRD Slippery Noodle'} god={'ZRD'} weapon_category={'Special'} buff_category={'damage'} damage_modifier={300} />,
          <Boon id={'zach-id-2'} name={'ZRD Whimpy Whistle'} god={'ZRD'} weapon_category={''} buff_category={'support'} damage_modifier={-100} />
        ]} /> */}
        </header>
    </div>
  );
}

export default HomePage;
