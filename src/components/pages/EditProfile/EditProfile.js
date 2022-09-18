import React from "react";
import Listtable from "./Listtable";


class EditProfile extends React.Component {
    render() {
        return (
            <div>
                <div className="view-main-wrp">
                    <div className="container">
                        <div className="view-wrp">
                            <div className="view-hding">
                                <h3>Edit Super Admin Profile</h3>
                            </div>
                            <form id="view-form-wrp">
                                <div className="view-form">
                                    <ul className="viewlist">
                                        <li>
                                            <div className="int-column">
                                                <p>First Name:</p>
                                                <input type='text' placeholder='Peter'></input>
                                            </div>
                                            <div className="int-column">
                                                <p>Last Name:</p>
                                                <input type='text' placeholder='Admin'></input>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="int-column">
                                                <p>Email:</p>
                                                <input type='text' placeholder='pl@betterphysiology.com'></input>
                                            </div>
                                            <div className="int-column">
                                                <p>Password:</p>
                                                <input type='text' placeholder='N90north'></input>
                                            </div>
                                            <div className="int-column">
                                                <p>Telephone:</p>
                                                <input type='text' placeholder='505-670-2874'></input>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="int-column ">
                                                <p>Address1</p>
                                                <textarea type='text' placeholder='FDBD sec-31'></textarea>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="int-column ">
                                                <p>Address2</p>
                                                <textarea type='text' placeholder='Address2'></textarea>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="int-column">
                                                <p>City</p>
                                                <input type='text' placeholder='Santa Fe'></input>
                                            </div>
                                            <div className="int-column">
                                                <p>Postal Code</p>
                                                <input type='text' placeholder='87506'></input>
                                            </div>
                                            <div className="int-column">
                                                <p>State/Province</p>
                                                <select name="state" id="state">
                                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                    <option value="Select Attachment Type">Choose States/Province</option>
                                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                    <option value="Assam">Assam</option>
                                                    <option value="Bihar">Bihar</option>
                                                </select>
                                            </div>
                                            <div className="int-column">
                                                <p>Country</p>
                                                <select name="country" id="country">
                                                    <option value="India">India</option>
                                                    <option value="Choose Country">Choose Country</option>
                                                    <option value="American Samoa">American Samoa</option>
                                                    <option value="Anguilla">Anguilla</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="Bahrain">Bahrain</option>
                                                </select>
                                            </div>

                                        </li>

                                    </ul>
                                </div>
                                <div className="view-botm">
                                    <div className="view-line"></div>
                                    <div className="view-rgsted">
                                        <h3>Registered CapnoTrainer P6.0 instruments:</h3>

                                    </div>
                                    <Listtable />

                                    <div className="view-rgsted-2">
                                        <h3>Registered CapnoTrainer P6.0 instruments:</h3>
                                        <p><strong>No Device Registered</strong></p>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="go-back">
                                                <a href="/">Go Back</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="save">
                                                <a href="/editprofile">Save</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditProfile;