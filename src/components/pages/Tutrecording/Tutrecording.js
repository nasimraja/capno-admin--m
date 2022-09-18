import React from "react";
import Top from "../Top";
import Leftsidebar from "../home/allcmp/Leftsidebar";
import Rightsidebar from "../home/allcmp/Rightsidebar";



class Tutrecording extends React.Component {
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
                                    <a href="/tut_upload_recording_distribute">Upload New Tutorial Recording</a>
                                    <a href="/tut_edit_recording_distribute">Edit Tutorial Recordings</a>
                                    <a href="/addtutorial">Add Tutorial Category</a>
                                    <a href="/edit_tut_category">Edit Tutorial Category</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tutrecording;