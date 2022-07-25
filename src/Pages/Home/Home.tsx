import './HomePage.css';
import charon_obol from '../../Assets/Images/charon_obol.jpg';
import BoonList from '../../Features/Boon_Meter/Boon-List/Boon-List';


import { useAppSelector } from '../../App/hooks'
import IOrigDataProps from '../../Features/Boon_Meter/Boon/OrigDataInterface';



function HomePage() {
  const appState = useAppSelector(state => state)
  console.log('appState',appState)

  const boonSet1: IOrigDataProps[] = appState.boonMeter.boonsSet1.map(b=>{
    return b
  })

  const boonSet2: IOrigDataProps[] = appState.boonMeter.boonsSet2.map(b=>{
    return b
  })

 
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hades Boon Power Meter</h2>

        <img src={charon_obol} className="rotate-img" alt="logo" />
        <br />
        <br />
        <br />
        <br />
        <BoonList boonsList={boonSet1} />
        <br />
        <BoonList boonsList={boonSet2} />

        
        </header>
    </div>
  );
}

export default HomePage;
