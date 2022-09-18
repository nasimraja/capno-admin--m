import { useState } from "react"
function AddRemoveInputField() {
    const [inputFields, setInputFields] = useState([{
        fullName: '',
    }]);

    const addInputField = () => {
        setInputFields([...inputFields, {
            fullName: '',
        }])

    }
    const removeInputFields = (index) => {
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
    }
    const handleChange = (index, evnt) => {

        const { name, value } = evnt.target;
        const list = [...inputFields];
        list[index][name] = value;
        setInputFields(list);



    }
    return (

        <div>
             
            <div className="addremove-main-wrp">
                <div className="addremove">
                    {
                        inputFields.map((data, index) => {
                            const { fullName, emailAddress, salary } = data;
                            return (
                                <div className="addremove-wrp" key={index}>
                                    <div className="addremove-l">
                                        <div className="form-group">
                                            <input type="text" onChange={(evnt) => handleChange(index, evnt)} value={fullName} name="Enter Serial Number" className="form-control" placeholder="Enter Serial Number" />
                                        </div>
                                    </div>

                                    <div className="addremove-r">


                                        {(inputFields.length !== 1) ? <button className="btn btn-outline-danger" onClick={removeInputFields}>x</button> : ''}


                                    </div>
                                </div>
                            )
                        })
                    }

                    <div className="row">
                        <div className="col-lg-12">
                            <button className="btn btn-outline-success " onClick={addInputField}>Add More SN</button>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        

    )
}
export default AddRemoveInputField
