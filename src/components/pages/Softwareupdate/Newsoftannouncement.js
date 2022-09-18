import React from "react";
import Editor from '../Announcements/Editor'


class Newsoftannouncement extends React.Component {
    render() {
        return (
            <div>
                <div className="anucmnt-main-wrp">
                    <div className="container">
                        <div className="anucmnt-wrp">
                            <div className="anucmnt-hding">
                                <h3>Upload Software Announcement</h3>
                            </div>
                            <div className="anucmnt-inpt-wrp">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="anucmnt-inpt">
                                            <div className="int-column2 ">
                                                <p>Update Headline</p>
                                                <input type='text' placeholder='Email Subject'></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="texteditor">
                            <p>Update Content</p>
                            <div className="editor-box">
                                <Editor />
                            </div>
                        </div>
                        <div className="anucmnt-inpt-wrp">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="anucmnt-inpt">
                                        <div className="go-back">
                                            <a href="/softwareupdate">Go Back</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="anucmnt-inpt">
                                        <div className="go-back">
                                            <a href="/new_software_announcement">Upload</a>
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


export default Newsoftannouncement;