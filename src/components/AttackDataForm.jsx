import { useForm } from "react-hook-form";
import { useState } from "react"

const AttackDataForm = (props) => {
  const [futureState, setFutureSate] = useState(props.attacksData)
  /*
    en props se recibe el state data (./App.js) y en Labels se guarda
    como un array los keys del objeto data.
  */
  const labels = Object.keys(props.attacksData);
  /*
    traigo el register del useForm, y en un futuro otras funciones
  */
  const { register } = useForm();
  /*
    handleChange actualiza el state data con setData y la informacion
    que le llega del input
  */
  const handleMin = (label) => {
    switch (label) {
      case labels[0]:
        return 1;
      case labels[1]:
        return -5;
      case labels[2]:
        return 0;
      case labels[3]:
        return -5;
      case labels[5]:
        return 0;
      case labels[6]:
        return 0;
      default:
        break;
    }
  };

  const handleMax = (label) => {
    switch (label) {
      case labels[5]:
        return futureState.attacks-futureState.disadvantages;
      case labels[6]:
        return futureState.attacks-futureState.advantages;
      default:
        return 20
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    props.setAttacksData(futureState)
  }
  const handleChange = (label, e, minMAX = 2) => {
    let aux = parseFloat(e.target.value);
    let new_value;
    switch (minMAX) {
      case 0:
        new_value = [aux, futureState[label][1]];
        break;
      case 1:
        new_value = [futureState[label][0], aux];
        break;
      default:
        new_value = aux;
        break;
    }
    setFutureSate({
      ...futureState,
      [label]: new_value,
    });
  };

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <h2 className="text-center">Attack Data</h2>
      <div className="form-group row">
        {/*
          el map genera el display del form, siendo este una sucesion de
          labels y de inputs numericos con nombres de atributos del objeto data
        */}
        {labels.map((label) =>
            <div>
              <label className="col-9 col-sm-9">{label}</label>
              <input
                {...register(`${label}`)}
                min={handleMin(label)}
                max={handleMax(label)}
                className="col-2 col-sm-3 col-md-2 col-lg-1"
                type="number"
                onChange={(e) => handleChange(label, e)}
                value={futureState[label]} 
              />
            </div>
            )}
      </div>
      <input type="submit" value="Calculate!"/>
    </form>
  );
};

export default AttackDataForm;
