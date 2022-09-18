import { useState } from "react";

const types = ["Specific Distributor", "All Distributor"];
const Radio = ({ id, value, className, onChange, checked, ...args }) => {
    return (
        <div className={className}>
            <input
                type="radio"
                value={value}
                id={id}
                name="tabs"
                onChange={onChange}
                {...args}
            />
            <label className={checked && `active`} htmlFor={id}>
                {value}
            </label>
        </div>
    );
};

export default function RadioTab() {
    const [value, setValue] = useState("One");

    let isOne = value === "One";
    let isTwo = value === "Two";
    return (
        <div className="radio_tb">
            <div className="tabs-flex">
                {types.map((item) => (
                    <Radio
                        key={item}
                        id={item}
                        value={item}
                        checked={value === item}
                        className="hello"
                        onChange={(e) => setValue(e.target.value)}
                    />
                ))}
            </div>

            {value === types[0] && <p className="Distrbtr-List-r">
                <div className="anucmnt-inpt">
                    <div className="int-column2 intclm">
                        <p>Distributor List</p>
                        <select name="distributorid" id="distrbtr-List-sec">
                            <option value="Select Recording Type"> </option>
                            <option value="1">Lisa Kusch</option>
                            <option value="2">Breathing Science Institute,  LLC</option>
                            <option value="3">Wolfgang Fellne</option>
                            <option value="4">Glen White</option>
                            <option value="5">Harry Campbell</option>
                            <option value="6">Nevsah Karamehmet</option>
                            <option value="7">Roger Price</option>
                            <option value="8">Stephanie Leyh</option>

                        </select>
                    </div>
                </div>
            </p>}
            {value === types[1] && <p> </p>}
        </div>
    );
}
