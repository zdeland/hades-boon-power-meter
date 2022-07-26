import React, { useEffect, useState } from "react";
import logo from "../../Assets/Images/crap_hades_logo.png";
import "./HomePage.css";
import charon_obol from "../../Assets/Images/charon_obol_edited.png";
import Boon from "../../Features/Boon_Meter/Boon/Boon";
import BoonContainer from "../../Features/UI/BoonContainer";
import lightning_strike from "../../Assets/Images/Lightning_Strike_edited.png";
import special_placeholder from "../../Assets/Images/special_boon_placeholder.png";
import { chunk } from "lodash";
import "./HomePage.css";
import BoonList from "../../Features/Boon_Meter/Boon-List/Boon-List";

import { useAppSelector } from "../../App/hooks";
import IOrigDataProps from "../../Features/Boon_Meter/Boon/OrigDataInterface";

import clsx from "clsx";

function HomePage() {
  const appState = useAppSelector((state) => state);
  const [boonlist, setBoonlist] = useState<any[]>([]);
  console.log("appState", appState);
  const boons = [
    { boon: lightning_strike, placeholder: null, text: "1" },
    { boon: null, placeholder: special_placeholder, text: "2" },
    { boon: null, placeholder: null, text: "3" },
    { boon: null, placeholder: null, text: "4" },
    { boon: null, placeholder: null, text: "5" },
    { boon: null, placeholder: null, text: "6" },
    { boon: null, placeholder: null, text: "7" },
    { boon: null, placeholder: null, text: "8" },
    { boon: null, placeholder: null, text: "9" },
    { boon: null, placeholder: null, text: "10" },
    { boon: null, placeholder: null, text: "11" },
    { boon: null, placeholder: null, text: "12" },
    { boon: null, placeholder: null, text: "13" },
    { boon: null, placeholder: null, text: "14" },
    { boon: null, placeholder: null, text: "15" },
    { boon: null, placeholder: null, text: "16" },
    { boon: null, placeholder: null, text: "17" },
    { boon: null, placeholder: null, text: "18" },
    { boon: null, placeholder: null, text: "19" },
  ];

  useEffect(() => {
    const mapBoons = () => {
      let i = 1;
      let j = 0;
      let k = 0;
      let nextBreakpoint = 0;
      let odd = true;
      let chunks = [];

      if (boons.length === 5) {
        boons.push({
          boon: null,
          placeholder: null,
          text: `${boons.length + 1}`,
        });
      }
      while (0.25 * (18 * i + (-1) ** i - 13) <= boons.length) {
        console.log(0.25 * (18 * i + (-1) ** i - 13));
        nextBreakpoint = 0.25 * (18 * (i + 1) + (-1) ** (i + 1) - 13);
        console.log(nextBreakpoint);
        i++;
      }
      console.log(`Next breakpoint: ${nextBreakpoint}`);
      // for (j = 0; j <= nextBreakpoint - boons.length; j++) {
      // boons.push({
      //   boon: null,
      //   placeholder: null,
      //   text: `${boons.length + 1}`,
      // });
      // }

      while (boons.length < nextBreakpoint - 1) {
        boons.push({
          boon: null,
          placeholder: null,
          text: `${boons.length + 1}`,
        });
      }

      while (k < boons.length) {
        chunks.push(boons.slice(k, odd ? (k += 5) : (k += 4)));
        odd = !odd;
      }
      setBoonlist(chunks);
    };

    mapBoons();
  }, []);

  const boonSet1: IOrigDataProps[] = appState.boonMeter.boonsSet1.map((b) => {
    return b;
  });

  const boonSet2: IOrigDataProps[] = appState.boonMeter.boonsSet2.map((b) => {
    return b;
  });

  return (
    <div className="App">
      <header className="App-header">
        <h2>Hades Boon Power Meter</h2>

        <img src={charon_obol} className="rotate-img" alt="logo" />
      </header>
      <main className="home-main">
        <section id="build">
          {boonlist.map((chunk: any, index: number) => {
            if (index === 0) {
              return (
                <div id="core" className="boon-container-stack">
                  {chunk.map((el: any) => (
                    <BoonContainer
                      boon={el.boon}
                      placeholder={el.placeholder}
                      text={el.text}
                    />
                  ))}
                </div>
              );
            } else {
              return (
                <div
                  className={clsx({
                    "boon-container-stack": true,
                    even: index % 2 === 0,
                    odd: index % 2 !== 0,
                  })}
                >
                  {chunk.map((el: any) => (
                    <BoonContainer
                      boon={el.boon}
                      placeholder={el.placeholder}
                      text={el.text}
                    />
                  ))}
                </div>
              );
            }
          })}
        </section>
      </main>
    </div>
  );
}

export default HomePage;
