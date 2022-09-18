import React from "react";
import DataTable5 from './DataTable5'

class TutrecordED extends React.Component {
    render() {
        return (
            <div>
                <div className="viewcstmr-main-wrp">
                    <div className="container">
                        <div className="viewcstmr-hding-wrp">
                            <div className="goback-butn">
                                <a href="/tutorial_recording">Go Back</a>
                            </div>
                            <h3>Tutorial Recordings</h3>
                        </div>


                        <div className="se-wrp">
                            <p>Show Entries</p>
                            <input type='text' placeholder='Search...'></input>
                        </div>
                        <div className="viewcstmr-table">
                            <DataTable5 />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TutrecordED;