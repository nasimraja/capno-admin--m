import React from "react";
import DataTable2 from '../EditDevice/DataTable2'
 
class EditDevice2 extends React.Component {
    render() {
        return (
            <div>
                <div className="viewcstmr-main-wrp">
                    <div className="container">
                        <div className="viewcstmr-hding-wrp">
                            <div className="goback-butn">
                                <a href="/">Go Back</a>
                            </div>
                            <h3>Devices</h3>
                        </div>

                        <div className="viewcstmr-dstbut">
                            <p>Distributor :</p>
                            <select name="distributorid" id="distid">
                                <option value="all">Choose a Distributor</option>
                                <option value="all distributors">All Distributors</option>
                                <option value="peter admin">Peter Admin</option>
                                <option value="lisa kusch">Lisa Kusch</option>
                                <option value="Breathing Science Institute">Breathing Science Institute,  LLC</option>
                                <option value="yasir kahn">Yasir Kahn</option>
                                <option value="amornpong vachiramon">Amornpong Vachiramon</option>
                                <option value="alexander stewart">Alexander Stewart</option>
                            </select>
                        </div>
                        <div className="viewcstmr-dstbut viewcstmr-dstbut2 ">
                            <p>Device Status :</p>
                            <select name="distributorid" id="distid">
                                <option value="all">Choose a List</option>
                                <option value="all distributors">All Customers</option>
                                <option value="peter admin">Waitlist Customers</option>
                            </select>
                        </div>
                        <div className="se-wrp">
                            <p>Show Entries</p>
                            <input type='text' placeholder='Search...'></input>
                        </div>
                        <div className="viewcstmr-table">
                             <DataTable2 />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditDevice2;