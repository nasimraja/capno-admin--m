import React, { Component, } from 'react';
import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home/home.js';
import Editdistribute from './components/pages/Editdistribute/Editdistribute';
import Recording from './components/pages/Recording/Recording';
import Tutrecording from '../src/components/pages/Tutrecording/Tutrecording';
import Viewcstmr from './components/pages/Viewcstmr/Viewcstmr';
import View from './components/pages/View/View';
import Softwareupdate from './components/pages/Softwareupdate/Softwareupdate';
import Announcements from './components/pages/Announcements/Announcements';
import EditProfile from './components/pages/EditProfile/EditProfile';
import Login from './components/pages/Login/Login';
import NewDevices from './components/pages/NewDevices/NewDevices';
import EditDevice2 from './components/pages/EditDevice/EditDevice2';
import Newdstrb from './components/pages/Editdistribute/Newdstrb';
import Editdstrb from './components/pages/Editdistribute/Editdstrbtp'
import RecordUD from './components/pages/Recording/RecordUD';
import RecordED from './components/pages/Recording/RecordED';
import TutrecordUD from './components/pages/Tutrecording/TutrecordUD';
import TutrecordED from './components/pages/Tutrecording/TutrecordED';
import Addtutorial from './components/pages/Tutrecording/Addtutorial';
import Edittutcategory from './components/pages/Tutrecording/Edittutcategory';
import NewSoftupadate from './components/pages/Softwareupdate/NewSoftupadate';
import Editsoftupdate from './components/pages/Softwareupdate/Editsoftupdate';
import Newsoftannouncement from './components/pages/Softwareupdate/Newsoftannouncement';
import Editsoftannouncement from './components/pages/Softwareupdate/Editsoftannouncement';
import Chooseemail from './components/pages/choose/Chooseemail';
import List from './components/pages/list/List';
import SubscribedUsers from './components/pages/subscribedusers/SubscribedUsers';
import Privateroute from './components/pages/Privateroute';
import ManageonlineAccess from './components/pages/manageonlineAccess/ManageonlineAccess';








class App extends Component {

	render() {
		return (
			<Router>
				<div>
					<Routes>

						<Route path="" element={<Privateroute />}>
							{/* <Route path="/" element={<Home />} />
							<Route path="/editdistribute" element={<Editdistribute />} />
							<Route path="/recording" element={<Recording />} />
							<Route path="/tutorial_recording" element={<Tutrecording />} />
							<Route path="/viewcstmr" element={<Viewcstmr />} />
							<Route path="/view" element={<View />} />
							<Route path="/softwareupdate" element={<Softwareupdate />} />
							<Route path="/sendemail" element={<Announcements />} />
							<Route path="/editprofile" element={<EditProfile />} />
							<Route path="/add_new_device" element={<NewDevices />} />
							<Route path="/edit_device2" element={<EditDevice2 />} />
							<Route path="/newdstrb" element={<Newdstrb />} />
							<Route path="/editdstrb" element={<Editdstrb />} />
							<Route path="/upload_recording_distribute" element={<RecordUD />} />
							<Route path="/edit_recording_distribute" element={<RecordED />} />
							<Route path="/tut_upload_recording_distribute" element={<TutrecordUD />} />
							<Route path="/tut_edit_recording_distribute" element={<TutrecordED />} />
							<Route path="/addtutorial" element={<Addtutorial />} />
							<Route path="/edit_tut_category" element={<Edittutcategory />} />
							<Route path="/new_software_upadate" element={<NewSoftupadate />} />
							<Route path="/edit_software_upadate" element={<Editsoftupdate />} />
							<Route path="/new_software_announcement" element={<Newsoftannouncement />} />
							<Route path="/edit_software_announcement" element={<Editsoftannouncement />} /> */}



							<Route path="/add/list" element={<Chooseemail />} />
							<Route path="/list" element={<List />} />
							{/* <Route path="/subscribe/user" element={<SubscribedUsers />} /> */}
							<Route path="/" element={<SubscribedUsers />} />
							<Route path="/manage/online/access" element={<ManageonlineAccess />} />
							

						</Route>
						<Route path="/login" element={<Login />} />










					</Routes>
				</div>
			</Router>
		);
	}
}

export default App;
