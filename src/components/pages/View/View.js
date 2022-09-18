import React from "react";


class View extends React.Component {
    render() {
        return (
            <div>
                <div className="view-main-wrp">
                    <div className="container">
                        <div className="view-wrp">
                            <div className="view-hding">
                                <h3>Customer Information</h3>
                            </div>
                            <form id="view-form-wrp">
                                <div className="view-form">
                                    <ul className="viewlist">
                                        <li>
                                            <div className="int-column">
                                            <p>First Name</p>
                                            <input type='text' placeholder='First Name'></input>
                                            </div>
                                            <div className="int-column">
                                            <p>Last Name</p>
                                            <input type='text' placeholder='Last Name'></input>
                                            </div>
                                            <div className="int-column">
                                            <p>Name of businesss:</p>
                                            <input type='text' placeholder=''></input>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="int-column">
                                            <p>Email</p>
                                            <input type='text' placeholder='example@gmail.com'></input>
                                            </div>
                                            <div className="int-column">
                                            <p>Password</p>
                                            <input type='text' placeholder='123456'></input>
                                            </div>
                                            <div className="int-column">
                                            <p>Telephone</p>
                                            <input type='text' placeholder='Telephone'></input>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="int-column ">
                                            <p>Address1</p>
                                            <textarea type='text' placeholder='Address1'></textarea>
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
                                            <p>Postal Code</p>
                                            <input type='text' placeholder='Postal Code'></input>
                                            </div>
                                            <div className="int-column">
                                            <p>State/Province</p>
                                            <input type='text' placeholder='State'></input>
                                            </div>
                                            <div className="int-column">
                                            <p>Country</p>
                                            <input type='text' placeholder='Country'></input>
                                            </div>
                                            <div className="int-column">
                                            <p>City</p>
                                            <input type='text' placeholder='City'></input>
                                            </div>
                                        </li>
                                        
                                    </ul>
                                </div>
                                <div className="view-botm">
                                <div className="view-line"></div>
                                <div className="view-rgsted">
                                    <h3>Registered CapnoTrainer P6.0 instruments:</h3>
                                    <p>No Device Registered</p>
                                </div>
                                <div className="view-line"></div>
                                <div className="view-rgsted-wrp">
                                <div className="view-rgsted">
                                    <h3>Registered CapnoTrainer 5.0 (or earlier) instruments</h3>
                                   <div className="view-instruments-wrp">
                                   <div className="view-instruments1">
                                    <p><strong>Serial Number</strong></p>
                                    <p>sharontest</p>
                                    </div>
                                    <div className="view-instruments2">
                                    <p><strong>Serial Number</strong></p>
                                    <p>sharontest</p>
                                    </div>
                                   </div>
                                </div>
                                </div>
                                <div className="go-back">
                                    <a href="/viewcstmr">Go Back</a>
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

export default View;