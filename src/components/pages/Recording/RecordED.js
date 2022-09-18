import React from "react";
import DataTable4 from './DataTable4'

class RecordED extends React.Component {
    render() {
        return (
            <div>
                <div className="viewcstmr-main-wrp">
                    <div className="container">
                        <div className="viewcstmr-hding-wrp">
                            <div className="goback-butn">
                                <a href="/recording">Go Back</a>
                            </div>
                            <h3>Recordings</h3>
                        </div>


                        <div className="se-wrp">
                            <p>Show Entries</p>
                            <input type='text' placeholder='Search...'></input>
                        </div>
                        <div className="viewcstmr-table">
                            <DataTable4 />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecordED;