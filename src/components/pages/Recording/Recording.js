import React from "react";
import Top from "../Top";
import Rightsidebar from "../home/allcmp/Rightsidebar";
import Leftsidebar from "../home/allcmp/Leftsidebar";



class Recording extends React.Component {
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
                                    <a href="/upload_recording_distribute">Upload New Recording for Distributors</a>
                                    <a href="/edit_recording_distribute">Edit Recordings for Distributors</a>
                                    <a href="/upload_recording_distribute">Upload New Recording for customers</a>
                                    <a href="/edit_recording_distribute">Edit Recordings for customers</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recording;