import { useForm } from "react-hook-form";
import { useState } from "react"
import DamageDataCard from "./SubDamageData/DamageDataCard"
const DamageDataForm = (props) => {

  const DamageData = props.DamageData

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }

  const add = (e, type) => {
    props.SetDamageData({
      ...DamageData,
      [type]: [...DamageData[type], {
        id: Date.now(),
        name: "--",
        dice_number: 0,
        dice_type: 0,
        mod: 0
      }]
    })

  }

  const deleteAll = (e, type) => {
    props.SetDamageData({
      ...DamageData,
      [type]: []
    })
  }

  return (
    <div className="bg-light">
      {DamageData["all"].map(dmg => {
        return (<DamageDataCard data={dmg} SetDamageData={props.SetDamageData} DamageData={DamageData} type="all" />)
      })}
      <div>
        <button className="btn btn-primary" onClick={(e) => add(e, "all")}>Add</button>
        <button className="btn btn-danger" onClick={(e) => deleteAll(e, "all")}>Delete All</button>
      </div>
      {DamageData["one"].map(dmg => {
        return (<DamageDataCard data={dmg} SetDamageData={props.SetDamageData} DamageData={DamageData} type="one" />)
      })}
      <div>
        <button className="btn btn-primary" onClick={(e) => add(e, "one")}>Add</button>
        <button className="btn btn-danger" onClick={(e) => deleteAll(e, "one")}>Delete All</button>
      </div>
      <input className="btn btn-primary" type="Submit" onClick={handleSubmit} />
    </div>
  );
};



export default DamageDataForm;
