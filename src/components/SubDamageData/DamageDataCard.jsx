import React from 'react'

const DamageDataCard = (props) => {
    const { id, name, dice_number, dice_type, mod } = props.data
    let damage = props.data

    const handleChange = (e) => {
        e.preventDefault()
        damage = { ...damage, [e.target.attributes.tag.name]: e.target.value }

    }

    const handleDelete = (e) => {
        e.preventDefault()
        props.SetDamageData({ ...props.DamageData, [props.type]: props.DamageData[props.type].filter(dmg => dmg.id !== id) })
    }

    const defaultValues = () => { 
        console.log(dice_type)
        switch(dice_type){
            case(0):return "--";
            case(1):return "d4";
            case(2):return "d6";
            case(3):return "d8";
            case(4):return "d10";
            case(5):return "d12";
        }
    }

    const b2 = defaultValues()

    return (
        <div className="container-fluid" onChange={handleChange}>
            <div className="row">
                <input className="col-3" placeholder={name} tag="name" />
                <input className="col-2 px-1" placeholder={dice_number} tag="dice_number" type="number" />
                <select className="col-2 p-0" tag="dice_type" defaultValue={b2}>
                    <option>--</option>
                    <option>d4</option>
                    <option>d6</option>
                    <option>d8</option>
                    <option>d10</option>
                    <option>d12</option>
                </select>
                <label className="col-2 text-center align-self-center">+</label>
                <input className="col-2 px-1" placeholder={mod} tag="mod" type="number" />
                <button onClick={handleDelete} className="btn btn-outline-danger col">X</button>
            </div>
        </div>
    )
}


export default DamageDataCard

