import React, { Component } from 'react';
import { Link, useParams, Router } from 'react-router-dom';
 
import $ from "jquery";
import Header from '../../pages/header.js';
import Footer from '../../pages/footer.js';
import Editdevicecmp from './allcmp/Rightsidebar';
import Dashboardcmp from './allcmp/Dashboardcmp.js';
 




class Home extends Component {


	render() {
		return (
			<div>
				<div className='home-main-db-wrap'>
					
					<Dashboardcmp />
				</div>
			</div>
		);
	}

}
export default Home;