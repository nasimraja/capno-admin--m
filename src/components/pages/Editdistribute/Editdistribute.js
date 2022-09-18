import React from "react";
 import Top from "../Top";
import Rightsidebar from "../home/allcmp/Rightsidebar";
import Leftsidebar from "../home/allcmp/Leftsidebar";



class Editdistribute extends React.Component {
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
									<a href="/newdstrb">New Distributor</a>
									<a href="/editdstrb">Edit Distributor</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Editdistribute;