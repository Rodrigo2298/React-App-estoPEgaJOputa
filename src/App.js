import { useState } from "react";
import AttackChancesTable from "./components/AttackChancesTable";
import AttackDataForm from "./components/AttackDataForm";
import DamageDataForm from "./components/DamageDataForm";
import { strings } from "./EvilMath/EvilMath.mjs";
import DamageContent from "./components/TableContent/DamageContent";

function App() {
  const [attacksData, setAttacksData] = useState({
    attacks: 1,
    attribute_mod: 0,
    proficient_bonus: 0,
    others_bonus: 0,
    objective_Ac: 11,
    advantages: 0,
    disadvantages: 0
  });
  const [DamageData, SetDamageData] = useState({
    all: [
      {
        id: Date.now(),
        name: "ShortSword",
        dice_number: 1,
        dice_type: 2,
        mod: 3
      }
    ],
    one: [
      {
        id: Date.now()+1,
        name: "Sneak Attack",
        dice_number: 1,
        dice_type: 2,
        mod: 0
      }

    ]
  });
  return (
    <div className="bg-info">
      {/*<Navbar/>*/}
      <div className="container-fluid row justify-content-between">
        <div className="col-sm-6 bg-light">
          <AttackDataForm
            attacksData={attacksData}
            setAttacksData={setAttacksData}
          />
        </div>
        <div className="col-sm-6 table-wrapper-scroll-y bg-light">
          <AttackChancesTable attacksData={attacksData}/>
        </div>
      </div>
      <div className="container-fluid row">
        <div className="col-sm-6">
          <DamageDataForm
            DamageData={DamageData}
            SetDamageData={SetDamageData}
          />
        </div>
        <div className="col-sm-6 table-wrapper-scroll-y bg-light">
          <DamageContent toMuchData={attacksData} type="damage"/>
        </div>
      </div>
    </div>
  );
}

export default App;
