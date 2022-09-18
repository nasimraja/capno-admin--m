import React from "react";
import DataTable3 from './DataTable3';
 
class Editdstrbtp extends React.Component {
    render() {
        return (
            <div>
                <div className="viewcstmr-main-wrp">
                    <div className="container">
                        <div className="viewcstmr-hding-wrp">
                            <div className="goback-butn">
                                <a href="/editdistribute">Go Back</a>
                            </div>
                            <h3>Distributors</h3>
                        </div>

                        
                        <div className="se-wrp">
                            <p>Show Entries</p>
                            <input type='text' placeholder='Search...'></input>
                        </div>
                        <div className="viewcstmr-table">
                             <DataTable3 />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Editdstrbtp;