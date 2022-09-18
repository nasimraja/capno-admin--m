import React from "react";
import AddRemove from '../NewDevices/AddRemove'


class NewDevices extends React.Component {
    render() {
        return (
            <div>
                <div className="anucmnt-main-wrp">
                    <div className="container">
                        <div className="anucmnt-wrp">
                            <div className="anucmnt-hding">
                                <h3>Device Information</h3>
                            </div>
                            <div className="anucmnt-inpt-wrp">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="anucmnt-inpt">
                                            <div className="int-column2 ">
                                                <p>Devices</p>
                                                <input type='text' placeholder='Email Subject'></input>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-6">
                                        <div className="anucmnt-inpt">
                                            <div className="int-column2 ">
                                                <p>Distributor Name</p>
                                                <select name="distributorid" id="rlist">
                                                    <option value="Select Reciepient">Select Reciepient</option>
                                                    <option value="All Customers">All Distributors & All Customers</option>
                                                    <option value="All Distributors">All Distributors</option>
                                                    <option value="All Customers">All Customers</option>
                                                    <option value="Single/Group Distributors">Single/Group Distributors</option>
                                                    <option value="Single/Group Customers">Single/Group Customers</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        <AddRemove />

                        </div>

                        <div className="anucmnt-inpt-wrp">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="anucmnt-inpt">
                                        <div className="go-back">
                                            <a href="/">Go Back</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="anucmnt-inpt">
                                        <div className="go-back">
                                            <a href="/">Create</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default NewDevices;