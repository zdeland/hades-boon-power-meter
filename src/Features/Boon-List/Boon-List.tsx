import Boon from "../Boon/Boon";

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

 

 