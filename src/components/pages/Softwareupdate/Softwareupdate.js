import React from "react";
import Top from "../Top";
import Rightsidebar from "../home/allcmp/Rightsidebar";
import Leftsidebar from "../home/allcmp/Leftsidebar";



class Softwareupdate extends React.Component {
    render() {
        return (
            <div>
                <Top />
                <div className='home-db-wrap'>
                    <div className="leftsidebar">
                        <Leftsidebar />
                    </div>
                    <div className="right-sidebar">
                        <div className='.d-right'>
                            <div className="Editdevicecmp-main-wrp">
                                <div className='Editdevicecmp-wrp'>
                                    <a href="/new_software_upadate">New Software Update</a>
                                    <a href="/edit_software_upadate">Edit Software Update</a>
                                    <a href="/new_software_announcement">New Software Announcements</a>
                                    <a href="/edit_software_announcement">Edit Software Announcements</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Softwareupdate;