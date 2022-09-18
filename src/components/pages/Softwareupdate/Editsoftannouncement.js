import React from "react";
import DataTable8 from './DataTable8'

class Editsoftannouncement extends React.Component {
    render() {
        return (
            <div>
                <div className="viewcstmr-main-wrp">
                    <div className="container">
                        <div className="viewcstmr-hding-wrp">
                            <div className="goback-butn">
                                <a href="/softwareupdate">Go Back</a>
                            </div>
                            <h3>Software Announcements</h3>
                        </div>


                        <div className="se-wrp">
                            <p>Show Entries</p>
                            <input type='text' placeholder='Search...'></input>
                        </div>
                        <div className="viewcstmr-table">
                            <DataTable8 />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Editsoftannouncement;