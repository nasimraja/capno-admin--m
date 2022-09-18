import React from "react";
 



class TutrecordUD extends React.Component {
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
                                            <div className="int-column2 ">
                                                <p>Tutorial Recording Name</p>
                                                <input type='text' placeholder='Email Subject'></input>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="col-lg-6">
                                    <div className="anucmnt-inpt">
                                            <div className="int-column2 ">
                                                <p>Category Name</p>
                                                <select name="distributorid" id="rlist">
                                                    <option value="Select Recording Type">Select Category</option>
                                                    <option value="1">How To</option>
                                                    <option value="2">Full Tutorials</option>

                                                </select>
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
                                            <a href="/tutorial_recording">Go Back</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="save">
                                            <a href="/tut_upload_recording_distribute">Save</a>
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

export default TutrecordUD;