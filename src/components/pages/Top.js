import React from "react";
import logo from '../images/logo.png';
import { Link, useHistory } from 'react-router-dom'

function Top() {
    


    return (
        <div>
            <div className='db-hding'>
                <div className="logo">
                    <Link to="/">
                        <img src={logo}></img>
                        </Link>
                </div>
                <h3>BETTER PHYSIOLOGY DASHBOARD</h3>
                {/* <div className="logout-butn">

                    
                </div> */}
            </div>
        </div>
    )
}


export default Top;