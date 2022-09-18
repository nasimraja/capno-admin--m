import React from "react";
import Editor from '../Announcements/Editor'
 

class Announcements extends React.Component {
    render() {
        return (
            <div>
                <div className="anucmnt-main-wrp">
                    <div className="container">
                        <div className="anucmnt-wrp">
                            <div className="anucmnt-hding">
                                <h3>Announcements</h3>
                            </div>
                            <div className="anucmnt-inpt-wrp">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="anucmnt-inpt">
                                            <div className="int-column2 ">
                                                <p>Email Subject</p>
                                                <input type='text' placeholder='Email Subject'></input>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-6">
                                        <div className="anucmnt-inpt">
                                            <div className="int-column2 ">
                                                <p>Choose Reciepient</p>
                                                <select name="distributorid" id="rlist">
                                                    <option value="Select Reciepient">Select Reciepient</option>
                                                    <option value="All Customers">All Distributors & All Customers</option>
                                                    <option value="All Distributors">All Distributors</option>
                                                    <option value="All Customers">All Customers</option>
                                                    <option value="Single/Group Distributors">Single/Group Distributors</option>
                                                    <option value="Single/Group Customers">Single/Group Customers</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         
                        </div>
                      <div className="texteditor">
                          <p>Email Content</p>
                          <div className="editor-box">
                          <Editor />
                          </div>
                      </div>
                      <div className="anucmnt-inpt-wrp">
                                <div className="row">
                                    <div className="col-lg-6">
                                    <div className="anucmnt-inpt">
                                            <div className="int-column2 ">
                                                <p>Email Attachment Type</p>
                                                <select name="distributorid" id="type">
                                                    <option value="Select Attachment Type">Select Attachment Type</option>
                                                    <option value="PDF">PDF</option>
                                                    <option value="CSV">CSV</option>
                                                    <option value="Excel">Excel</option>
                                                    <option value="Text">Text</option>
                                                    <option value="Image">Image</option>
                                                </select>
                                            </div>
                                            <div className="go-back">
                                                <a href="/">Go Back</a>
                                            </div>
                                        </div>
                                        

                                    </div>
                                    <div className="col-lg-6">
                                    <div className="anucmnt-inpt">
                                            <div className="int-column2 ">
                                                <p>Email Attachment</p>
                                                <input type='file' id='myfile' placeholder='Email Subject'></input>
                                            </div>
                                            <div className="go-back">
                                                <a href="/">Send</a>
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


export default Announcements;