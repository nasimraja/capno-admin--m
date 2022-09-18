import React from "react";
import Top from "../../Top";
import Rightsidebar from "./Rightsidebar";
import Leftsidebar from "./Leftsidebar";




class Dashboardcmp extends React.Component {
	render() {
		return (
			<div>
				<Top />
				<div className='home-db-wrap'>
					<div className="leftsidebar">
						<Leftsidebar />
					</div>
					<div className="right-sidebar">
						<Rightsidebar />
					</div>
				</div>
			</div>
		)
	}
}

export default Dashboardcmp;