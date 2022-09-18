import React from "react";


class Newdstrb extends React.Component {
    render() {
        return (
            <div>
                <div className="view-main-wrp">
                    <div className="container">
                        <div className="view-wrp">
                            <div className="view-hding">
                                <h3>Distributor Information</h3>
                            </div>
                            <form id="view-form-wrp">
                                <div className="view-form">
                                    <ul className="viewlist">
                                        <li>
                                            <div className="int-column">
                                                <p>First Name</p>
                                                <input type='text' placeholder='First Name'></input>
                                            </div>
                                            <div className="int-column">
                                                <p>Last Name</p>
                                                <input type='text' placeholder='Last Name'></input>
                                            </div>
                                            <div className="int-column">
                                                <p>Name of businesss:</p>
                                                <input type='text' placeholder=''></input>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="int-column">
                                                <p>Email</p>
                                                <input type='text' placeholder='example@gmail.com'></input>
                                            </div>
                                            <div className="int-column">
                                                <p>Password</p>
                                                <input type='text' placeholder='123456'></input>
                                            </div>
                                            <div className="int-column">
                                                <p>Telephone</p>
                                                <input type='text' placeholder='Telephone'></input>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="int-column ">
                                                <p>Address1</p>
                                                <textarea type='text' placeholder='Address1'></textarea>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="int-column ">
                                                <p>Address2</p>
                                                <textarea type='text' placeholder='Address2'></textarea>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="int-column">
                                                <p>Postal Code</p>
                                                <input type='text' placeholder='Postal Code'></input>
                                            </div>
                                            <div className="int-column">
                                                <p>State/Province</p>
                                                <input type='text' placeholder='State'></input>
                                            </div>
                                            <div className="int-column">
                                                <p>Country</p>
                                                <input type='text' placeholder='Country'></input>
                                            </div>
                                            <div className="int-column">
                                                <p>City</p>
                                                <input type='text' placeholder='City'></input>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                                <div className="view-botm">

                                    <div className="view-rgsted-wrp">

                                    </div>
                                    <div className="anucmnt-inpt-wrp">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="anucmnt-inpt">
                                                    <div className="go-back">
                                                        <a href="/editdistribute">Go Back</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="anucmnt-inpt">
                                                    <div className="go-back">
                                                        <a href="/">Create</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newdstrb;