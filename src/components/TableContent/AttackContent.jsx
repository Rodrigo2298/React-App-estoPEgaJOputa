import React from 'react'
import { functions } from "../../EvilMath/EvilMath.mjs";

const AttackContent = (props) => {
    const [modifier, AC_array, attacks, n_attacks, adv_attacks, dis_attacks] = props.toMuchData
    const AC = props.AC
  return (
    <tbody>
    {AC.map((ac, i) => (
      <tr>
        <td className={i === 3 ? "table-primary" : ""}>{ac}</td>
        {functions.odds_to_hit(n_attacks, ac, modifier, adv_attacks, dis_attacks).map((odd) => (
          <td className={i === 3 ? "table-primary" : ""}>{odd}</td>
        ))}
      </tr>
    ))}
  </tbody>
  )
}

export default AttackContent