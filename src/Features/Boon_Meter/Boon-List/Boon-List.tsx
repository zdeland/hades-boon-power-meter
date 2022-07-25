import Boon from "../Boon/Boon";
import IBoonProps from "../Boon/BoonInterface";

// export interface IBoonListProps {
//   boonList: json[];
// }

interface ICard {
  name: string;
  image: string;
  id: number;
}

interface IProps {
  card: IBoonProps;
  key: string;
}

const cards: IBoonProps[] = [
  {
    id: "1",
    name: "ZRD Mega Nuke",
    god: "ZRD",
    weapon_category: "attack",
    buff_category: "damage",
    damage_modifier: 1000
  },
  {
    id: "2",
    name: "ZRD Wet Noodle",
    god: "ZRD",
    weapon_category: "attack",
    buff_category: "damage",
    damage_modifier: 50
  },
  {
    id: "3",
    name: "ZRD Whimpy Whistle",
    god: "ZRD",
    weapon_category: "call",
    buff_category: "support",
    damage_modifier: 0
  },
];

const Card: React.FC<{ card: IBoonProps }> = ({ card }) => {
  return (
    <tr>
      <td>
      {card.name}: {card.weapon_category} 
      </td>
      <td>
        {card.damage_modifier}
      </td>
    </tr>
  )
  
};

export default function BoonList() {

    return (<>
      <table>
      <thead>
        <tr>
            <td>Boon</td>
            <td>Damage Modifier</td>
        </tr>
        </thead>
        <tbody>
        {cards.map(card => {
          return <Card key={card.id} card={card} />;
        })}
        </tbody>
      </table>
    </>)
}

 

 