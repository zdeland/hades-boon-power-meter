import React from "react";
import IBoonProps from "./BoonInterface";

export default function Boon (props: IBoonProps):React.ReactElement {
  return (
    <div>
      <br />
      <table>
        <thead>
          <tr>
            <th>{props.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Weapon:</td><td>{props.weapon_category}</td>
          </tr>
          <tr>
            <td>Buff Category:</td><td>{props.buff_category}</td>
          </tr>
          <tr>
            <td>DMG Modifier:</td><td>{props.damage_modifier > 0 ? `+${props.damage_modifier}` : `${props.damage_modifier}`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

 

 