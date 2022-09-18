import React from "react";
import DataTable6 from './DataTable6'

class Edittutcategory extends React.Component {
    render() {
        return (
            <div>
                <div className="viewcstmr-main-wrp">
                    <div className="container">
                        <div className="viewcstmr-hding-wrp">
                            <div className="goback-butn">
                                <a href="/tutorial_recording">Go Back</a>
                            </div>
                            <h3>Tutorial Category</h3>
                        </div>


                        <div className="se-wrp">
                            <p>Show Entries</p>
                            <input type='text' placeholder='Search...'></input>
                        </div>
                        <div className="viewcstmr-table">
                            <DataTable6 />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Edittutcategory;