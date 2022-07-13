import { functions } from "../EvilMath/EvilMath.mjs";
import "./AttackChancesTable.css"
import AttackContent from "./TableContent/AttackContent.jsx";
import DamageContent from "./TableContent/DamageContent.jsx";


const AttackChancesTable = (props) => {
  const toMuchData = [ 
    props.attacksData.proficient_bonus + props.attacksData.attribute_mod + props.attacksData.others_bonus,
    [props.attacksData.objective_Ac - 3, props.attacksData.objective_Ac + 3],
    Array.from({ length: props.attacksData.attacks }, (x, i) => i),
    props.attacksData.attacks,
    props.attacksData.advantages,
    props.attacksData.disadvantages
  ]
  const [modifier, AC_array, attacks, n_attacks, adv_attacks, dis_attacks] = toMuchData
  const AC = Array.from(
    { length: AC_array[1] - AC_array[0] + 1 },
    (x, i) => i + AC_array[0]
  );

  return (
    <table className="table table-bordered table-striped table-hover col">
      <thead>
        <tr>
        {props.type!=="damage"?<th scope="col">Enemy Ac</th>:null}
          {attacks.map((head) => (
            <th>{head + 1} hit/s</th>
          ))}
        {props.type!=="damage"?<th scope="col">All miss</th>:null}
        </tr>
      </thead>
      {props.type==="damage"?null:<AttackContent toMuchData={toMuchData} AC={AC}/>}
    </table>
  );
};

export default AttackChancesTable;
