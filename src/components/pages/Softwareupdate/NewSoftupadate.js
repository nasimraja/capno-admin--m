import React from "react";




class NewSoftupadate extends React.Component {
    render() {
        return (
            <div>
                <div className="view-main-wrp">
                    <div className="container">
                        <div className="view-wrp">
                            <div className="view-hding">
                                <h3>Software Information</h3>
                            </div>
                            <div className="anucmnt-inpt-wrp">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="anucmnt-inpt">
                                            <div className="int-column2 ">
                                                <p>Update Headline</p>
                                                <input type='text' placeholder=''></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="anucmnt-inpt-wrp">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="anucmnt-inpt">
                                            <div className="int-column2 ">
                                                <p>Update Content</p>
                                               <textarea type='text'></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="anucmnt-inpt-wrp">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="anucmnt-inpt">
                                            <div className="int-column2 ">
                                                <p>Software Source</p>
                                                <select name="distributorid" id="rlist">
                                                    <option value="Select Recording Type">Select Type</option>
                                                    <option value="1">Link</option>
                                                    <option value="2">File</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="anucmnt-inpt-wrp">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="anucmnt-inpt">
                                            <div className="int-column2 ">
                                                <p>OS Type</p>
                                                <select name="distributorid" id="rlist">
                                                    <option value="Select Recording Type">Select Type</option>
                                                    <option value="1">Window</option>
                                                    <option value="2">MAC</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="r-info">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="go-back">
                                            <a href="/softwareupdate">Go Back</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="save">
                                            <a href="/tut_upload_recording_distribute">Upload</a>
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

export default NewSoftupadate;