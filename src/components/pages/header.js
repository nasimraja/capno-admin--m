import React, { Component, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row } from 'reactstrap';

import { ToastContainer } from 'react-toastify';
import '../css/style.css'
import '../css/responsive.css'
// import '../css/navbar.css'
import $ from "jquery";
import { Link, Router } from 'react-router-dom';
import cirlogo from '../images/cir-logo.png';
import burger from '../images/burger.png';
import connect from '../images/connect.png';
import gcircle from '../images/gcircle.png';
import crosss from '../images/crosss.png';



const Header = () => {


  useEffect(() => {



    changePickupStoreMenu();

    function changePickupStoreMenu() {



    }


  }, [])

  return (
    <div>
      <div className='main-bg'>
        <div className='container'>
          <div className='top-bnr'>
            <div className='cir-logo'>
              <a href='http://localhost:3000/'><img src={cirlogo}></img></a>
            </div>
            <div className='cir-bnr-right'>
              <h1>Professional School of Behavioral Health Sciences</h1>
              <p>Interdisciplinary professional certificate and diploma programs<br></br>
                In behavioral and physiological sciences</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}


export default Header;

