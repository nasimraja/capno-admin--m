import React from "react";
import DataTable7 from './DataTable7'

class Editsoftupdate extends React.Component {
    render() {
        return (
            <div>
                <div className="viewcstmr-main-wrp">
                    <div className="container">
                        <div className="viewcstmr-hding-wrp">
                            <div className="goback-butn">
                                <a href="/softwareupdate">Go Back</a>
                            </div>
                            <h3>Softwares</h3>
                        </div>


                        <div className="se-wrp">
                            <p>Show Entries</p>
                            <input type='text' placeholder='Search...'></input>
                        </div>
                        <div className="viewcstmr-table">
                            <DataTable7 />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Editsoftupdate;