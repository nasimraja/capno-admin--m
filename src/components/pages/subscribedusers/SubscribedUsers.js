import React, { useEffect, useState,useRef } from 'react';
import {Link,useParams, Router} from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, Row } from 'reactstrap';
import Header from '../header';
import Leftsiderbar from'../home/allcmp/Leftsidebar'
import MaterialTable from 'material-table';
import download from '../../images/download.png'
import preveiw from '../../images/preveiw.png'
import Delete from '../../images/delete.png';
import { API_URL } from '../../../config';
import edit from '../../images/edit.png';
import renew from '../../images/renew.png';
import listicon from '../../images/listicon.png'
import Top from '../Top';



const SubscribedUsers = () => {

    const [subscribeuser,setSubscribeuser] = useState([]) ;
    const expire = useRef();
    const accessToken = localStorage.getItem('accessToken');
    const [userId, setUserId] = useState([]);
    const [successModal, setSuccessModal] = useState(false);
    const successToggleModal = () => setSuccessModal(!successModal);

    const [changeExpirydateModal, setChangeExpirydateModal] = useState(false);
    const changeExpirydateToggleModal = (_id) => {
        setUserId(_id)
        setChangeExpirydateModal(!changeExpirydateModal)
    };

    

    const [renewModal, setRenewModal] = useState(false);
    const renewToggleModal = (_id) => {
        setUserId(_id)
        setRenewModal(!renewModal)
    };

    const [renewsuccessModal, setRenewsuccessModal] = useState(false);
    const renewsuccessToggleModal = () => setRenewsuccessModal(!renewsuccessModal);
    const changeExpridate = useRef()
    
    // const openModal = (_id) => {
    //     setUserId(_id)
    // }

    useEffect(() => {
        AllAccounts()
        
    },[subscribeuser])



    const changeExpireDay =()=>{
        let expireDate = expire.current.value;
        if(expireDate == 'allaccounts'){
            AllAccounts()
        }
        if(expireDate == 'Subscribedaccounts'){
            subscribedAccounts()
        }
        
        if(expireDate == 'all'){
            getsubscriber()
        }
        if(expireDate == 7){
            getSevendaysexpire()
        }
        if(expireDate == 30){
           getThirtydaysexpire()
        }
        
    }

    const SaveExpirydate = ()=>{
        let data ={};
        const seconds = new Date(changeExpridate.current.value).getTime()/1e3;
        data['expire_account'] = seconds;
       
        fetch(API_URL+"/update/expiry/date/" + userId, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': accessToken,
        
                },
                body:JSON.stringify(data)
            }).then((response) => {
               
                if (response.status == 200) {
                    response.json().then((resp) => {
                        console.log("results", resp);
                        successToggleModal();
                        changeExpirydateToggleModal();
        //                 let expireDate = expire.current.value;
        // if(expireDate == 'allaccounts'){
        //     AllAccounts()
        // }
        // if(expireDate == 'Subscribedaccounts'){
        //     subscribedAccounts()
        // }
        
        // if(expireDate == 'all'){
        //     getsubscriber()
        // }
        // if(expireDate == 7){
        //     getSevendaysexpire()
        // }
        // if(expireDate == 30){
        //    getThirtydaysexpire()
        // }
                        
                    });
                }
                else {
                    alert("Network error")
                }
               
            })
    
        
    }
    const renewbyYearexpiredate = ()=>{
        
        fetch(API_URL+"/update/expiry/date/byyear/" + userId, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
        
                },
               
            }).then((response) => {
               
                if (response.status == 200) {
                    response.json().then((resp) => {
                        console.log("results", resp);
                        renewToggleModal();
                        renewsuccessToggleModal();
                        getsubscriber();
                        getSevendaysexpire();
                        getThirtydaysexpire();
                        AllAccounts();
                        subscribedAccounts();
                        
                    });
                }
                else {
                    alert("Network error")
                }
               
            })
    
        
    }
 
    const getsubscriber = () => {
        fetch(API_URL+"/subscriber/user/list",
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': accessToken,
                },
            }
        ).then(async (response) => {
            if (response.status == 200 ) {
                const resp = await response.json() ;
                
                let _temp = [];
                resp.result.map((v, i) => {
                    _temp.push({
                        Name: <p>{v.lastname} {v.firstname}</p>,
                        Email: v.email,
                        ExpiryDate: new Date(v.expire_account*1000).toLocaleDateString(),
                        
                        action: <p><a href="javascript:void" onClick={() => changeExpirydateToggleModal(v.id)} className="downloadimg" ><img src={edit} /></a> <a href="#" onClick={() => renewToggleModal(v.id)}  className="downloadimg" ><img src={renew} /></a></p>,
                        
                    })
                })
                
                setSubscribeuser(_temp);
             
            
            }
            else if (response.status == 401) {
                logout()
            }
            else {
                alert("network error")
            }


        })
    }

    const getSevendaysexpire = () => {
        fetch(API_URL+"/exprie/next/sevendays",
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': accessToken,
                },
            }
        ).then(async (response) => {
            if (response.status == 200 ) {
                const resp = await response.json() ;
                
                let _temp = [];
                resp.result.map((v, i) => {
                    _temp.push({
                        Name: <p>{v.lastname} {v.firstname}</p>,
                        Email: v.email,
                        ExpiryDate: new Date(v.expire_account*1000).toLocaleDateString(),
                        action: <p><a href="javascript:void" onClick={() => changeExpirydateToggleModal(v.id)} className="downloadimg" ><img src={edit} /></a> <a href="#" onClick={() => renewToggleModal(v.id)}  className="downloadimg" ><img src={renew} /></a></p>

                    })
                })
                
                setSubscribeuser(_temp);
             
            
            }
            else if (response.status == 401) {
                logout()
            }
            else {
                alert("network error")
            }


        })
    }
    const getThirtydaysexpire = () => {
        fetch(API_URL+"/exprie/next/thirtydays",
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': accessToken,
                },
            }
        ).then(async (response) => {
            if (response.status == 200 ) {
                const resp = await response.json() ;
                
                let _temp = [];
                resp.result.map((v, i) => {
                    _temp.push({
                        Name: <p>{v.lastname} {v.firstname}</p>,
                        Email: v.email,
                        ExpiryDate: new Date(v.expire_account*1000).toLocaleDateString(),
                        action: <p><a href="javascript:void" onClick={() => changeExpirydateToggleModal(v.id)} className="downloadimg" ><img src={edit} /></a> <a href="#" onClick={() => renewToggleModal(v.id)}  className="downloadimg" ><img src={renew} /></a> </p>,
                        

                    })
                })
                
                setSubscribeuser(_temp);
             
            
            }
            else if (response.status == 401) {
                logout()
            }
            else {
                alert("network error")
            }


        })
    }

    const AllAccounts = () => {
        fetch(API_URL+"/subscriber/all/accounts/list",
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': accessToken,
                },
            }
        ).then(async (response) => {
            if (response.status == 200 ) {
                const resp = await response.json() ;
                
                let _temp = [];
                resp.data.map((v, i) => {
                    _temp.push({
                        Name: <p>{v.lastname} {v.firstname}</p>,
                        Email: v.email,
                        ExpiryDate: new Date(v.expire_account*1000).toLocaleDateString(),
                        action: <p><a href="javascript:void" onClick={() => changeExpirydateToggleModal(v.id)} className="downloadimg" ><img src={edit} /></a>  <a href="#" onClick={() => renewToggleModal(v.id)}  className="downloadimg" ><img src={renew} /></a></p>,
                       

                    })
                })
                
                setSubscribeuser(_temp);
             
            
            }
            else if (response.status == 401) {
                logout()
            }
            else {
                alert("network error")
            }


        })
    }
    const subscribedAccounts = () => {
        fetch(API_URL+"/subscribed/accounts/list",
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': accessToken,
                },
            }
        ).then(async (response) => {
            if (response.status == 200 ) {
                const resp = await response.json() ;
                
                let _temp = [];
                resp.result.map((v, i) => {
                    _temp.push({
                        Name: <p>{v.lastname} {v.firstname}</p>,
                        Email: v.email,
                        ExpiryDate: new Date(v.expire_account*1000).toLocaleDateString(),
                        action: <p><a href="javascript:void" onClick={() => changeExpirydateToggleModal(v.id)} className="downloadimg" ><img src={edit} /></a> <a href="#" onClick={() => renewToggleModal(v.id)}  className="downloadimg" ><img src={renew} /></a></p>,
                        

                    })
                })
                
                setSubscribeuser(_temp);
             
            
            }
            else if (response.status == 401) {
                logout()
            }
            else {
                alert("network error")
            }


        })
    }

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }

    

    const columns =[
        {
            title: "Name", field: "Name"
        },
        {
            title: "Email", field: "Email"
        },
        {
            title: "Expiry Date", field: "ExpiryDate"
        },
        {
            title: "Change Expiry Date", field: "action"
        },
        
        
      
    ]

    const gotoAdd = () => {
        window.location.href = "/add/list"
    }

    return(
        <div className="">
           <div className="cmail">
                <Top />
            </div>
             <div className="wrp-dashbord">
             <div className="cemail-left">
                <Leftsiderbar />
                </div>
               <div className="right-section">
                <div className="add-btn-wrp">
                <div className="head-listing">
                    <h3>Subscribed Users Listing</h3>
                </div>
                <div className="add-btn">
                    <div className="expridate-filter">
                        <select onChange={changeExpireDay} ref={expire}>
                            <option value="allaccounts">All Accounts</option>
                            <option value="Subscribedaccounts">Subscribed Accounts</option>
                            <option value="all">Expired Accounts</option>
                            <option value="7">Expiring in 7 days</option>
                            <option value="30">Expiring in 30 days</option>
                        </select>
                    </div>
                </div>
                </div>
                <div className="wrp-bankform">
                    <div style={{ maxWidth: '100%' }}>
                       
                        <MaterialTable
                        options={{
                            search: true,
                            showTitle: false,
                            toolbar: true,
                            pageSize:100,
                            pageSizeOptions:[5,10,20,50,150,200]
                        }}
                        columns={columns}
                        data={subscribeuser}
                        title=""
                        />
                        
                    </div>
                </div>
               </div>
             </div>

             <Modal isOpen={changeExpirydateModal} toggle={changeExpirydateToggleModal} className="connect-box" centered={true}>
                <ModalHeader toggle={changeExpirydateToggleModal}><span className="ml-1 roititle">Change Expiry Date</span></ModalHeader>
                <ModalBody>
                    <div className="changedate-box">
                        <div className="date-input">
                            <label>Choose Date</label>
                            <input type="date" name="datetime" ref={changeExpridate} />
                        </div>
                        <div className="change-expirydate-btn">
                            <button onClick={() => SaveExpirydate()}>Submit</button>
                        </div>
                    </div>
                </ModalBody>

            </Modal>

            <Modal isOpen={successModal} toggle={successToggleModal} className="connect-box" centered={true}>
                <ModalHeader toggle={successToggleModal}><span className="ml-1 roititle">Successful</span></ModalHeader>
                <ModalBody>
                    <div className="expirydate">
                        <p>Expiry Date has been changed successfully</p>
                    </div>
                </ModalBody>

            </Modal>

            <Modal isOpen={renewModal} toggle={renewToggleModal} className="connect-box" centered={true}>
                <ModalHeader toggle={renewToggleModal}><span className="ml-1 roititle">Renew Subscription</span></ModalHeader>
                <ModalBody>
                    <div className="changedate-box">
                        <p>Are you sure you want renew the subscription by one year ?</p>
                        <div className="wrp-btn-renew">
                            
                            <div className='renew-btn-child renew-yes-btn'><button onClick={renewbyYearexpiredate}>Yes</button></div>
                            <div className='renew-btn-child'><button onClick={renewToggleModal}>No</button></div>
                        </div>
                    </div>
                </ModalBody>

            </Modal>
            <Modal isOpen={renewsuccessModal} toggle={renewsuccessToggleModal} className="connect-box" centered={true}>
                <ModalHeader toggle={renewsuccessToggleModal}><span className="ml-1 roititle">Successful</span></ModalHeader>
                <ModalBody>
                    <div className="expirydate">
                        <p>Renew subscription one year successfully</p>
                    </div>
                </ModalBody>

            </Modal>
           
        </div>
    )
}

export default SubscribedUsers;