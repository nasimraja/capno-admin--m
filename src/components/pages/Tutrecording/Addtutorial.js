import React from "react";
 



class Addtutorial extends React.Component {
    render() {
        return (
            <div>
                <div className="view-main-wrp">
                    <div className="container">
                        <div className="view-wrp">
                            <div className="view-hding">
                                <h3>Category Information</h3>
                            </div>
                            <div className="anucmnt-inpt-wrp">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="anucmnt-inpt">
                                            <div className="int-column2 ">
                                                <p>Add Category Name</p>
                                                <input type='text' placeholder='Enter Category Name'></input>
                                            </div>
                                        </div>


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
                                            <a href="/addtutorial">Save</a>
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

export default Addtutorial;