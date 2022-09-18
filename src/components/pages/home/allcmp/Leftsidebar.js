import React from "react";
import { Link } from "react-router-dom";


function Leftsidebar() {

	const auth = localStorage.getItem('user_id');

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }
	return (
		<div>
			<div className='left-list'>
				<div className="list-wrp">
					<ul className='l-sideb-list'>
						{/* <li><Link to='/'>
							<i class="fa-solid fa-file-lines"></i>
							<span>View, Create, Edit Devices</span></Link>
						</li>
						<li><Link to='/editdistribute'>
							<i class="fa-solid fa-pen-to-square"></i>
							<span>View, Create, Edit Distributor</span></Link>
						</li>
						<li><Link to='/recording'>
							<i class="fa-solid fa-microphone"></i>
							<span>Recordings</span></Link>
						</li>
						<li><Link to='/tutorial_recording'>
							<i class="fa-solid fa-video"></i>
							<span>Tutorial Recordings</span></Link>
						</li>
						<li><Link to='/viewcstmr'>
							<i class="fa-solid fa-people-group"></i>
							<span>View Customers</span></Link>
						</li>
						<li><Link to='/softwareupdate'>
							<i class="fa-brands fa-uncharted"></i>
							<span>Software Updates</span></Link>
						</li>
						<li><Link to='/sendemail'>
							<i class="fa-solid fa-envelope"></i>
							<span>Announcements</span></Link>
						</li>
						<li><Link to='/editprofile'>
							<i class="fa-solid fa-pen-to-square"></i>
							<span>Edit Profile</span></Link>
						</li>
						<li><Link to='/add/list'>
							<i class="fa-solid fa-envelope-open-text"></i>
							<span>ChooseEmail</span></Link>
						</li> */}
						{/* <li><Link to='/subscribe/user'> */}
						<li><Link to='/'>
							<i class="fa-solid fa-user"></i>
							<span>User Subscriptions</span></Link>
						</li>
						<li><Link to='/list'>
							<i class="fa-solid fa-list-check"></i>
							<span>Group Subscriptions</span></Link>
						</li>
						<li><Link to='/manage/online/access'>
						<i class="fa-solid fa-people-roof"></i>
						
							<span>Manage Online Access</span></Link>
						</li>
						<li>
							{
								auth ?<Link to='/login' onClick={logout}>
								<i class="fa fa-sign-out" aria-hidden="true"></i>
								<span>Logout</span></Link>: null
							}
							
						</li>

					</ul>
				</div>
			</div>
		</div>
	)
}
export default Leftsidebar;