import React from "react";
import RadioTab from "./RadioTab";



class RecordUD extends React.Component {
    render() {
        return (
            <div>
                <div className="view-main-wrp">
                    <div className="container">
                        <div className="view-wrp">
                            <div className="view-hding">
                                <h3>Recording Information</h3>
                            </div>
                            <div className="anucmnt-inpt-wrp">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="anucmnt-inpt">
                                            <div className="int-column2  ">
                                                <p>Recording Name</p>
                                                <input type='text' placeholder='Email Subject'></input>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="col-lg-6">
                                        <div className="anucmnt-inpt">
                                            <div className="int-column2 ">
                                                <p>Distributor</p>
                                                <div className="distr-radio-wrp">
                                                    <RadioTab />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="anucmnt-inpt-wrp">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="anucmnt-inpt">
                                            <div className="int-column2 ">
                                                <p>Recording</p>
                                                <select name="distributorid" id="rlist">
                                                    <option value="Select Recording Type">Select Recording Type</option>
                                                    <option value="1">Link</option>
                                                    <option value="2">Video</option>

                                                </select>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="col-lg-6">

                                    </div>
                                </div>
                            </div>

                            <div className="r-info">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="go-back">
                                            <a href="/recording">Go Back</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="save">
                                            <a href="/upload_recording_distribute">Save</a>
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

export default RecordUD;