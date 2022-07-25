import Boon from "../Boon/Boon";
import IBoonProps from "../Boon/BoonInterface";

export interface IBoonListProps {
  boonList: React.ReactElement[];
}

export default function BoonList (props: IBoonListProps) {
  return (
    <div>
      <ul>
        {props.boonList}
      </ul>
    </div>
  );
}

 

 