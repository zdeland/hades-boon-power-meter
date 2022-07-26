import OrigDataInterface from "../Boon/OrigDataInterface"
import IBoonProps from "../Boon/BoonInterface";
import IOrigDataProps from "../Boon/OrigDataInterface";


interface IProps {
  boonsList: IOrigDataProps[]
}

export default function BoonList(props:IProps) {
  console.log("boons list props: ",props)

  const Card: React.FC<{ card: IOrigDataProps }> = ({ card }) => {
    return (
      <tr>
        <td>
        {card.name}: {card.god} 
        </td>
        <td>
          {card.text}
        </td>
      </tr>
  )}

  return (<>
    <table>
    <thead>
      <tr>
          <td>Boon</td>
          <td>Text</td>
      </tr>
      </thead>
      <tbody>
      {props.boonsList.map(b => {
        return <Card key={b.name} card={b} />;
      })}
      </tbody>
    </table>
  </>)
}


 