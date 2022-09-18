import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams, Router } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, Row } from 'reactstrap';
import Header from '../header';
import Leftsiderbar from '../home/allcmp/Leftsidebar'
import MaterialTable from 'material-table';
import download from '../../images/download.png'
import preveiw from '../../images/preveiw.png'
import Delete from '../../images/delete.png';
import { API_URL } from '../../../config';
import access from '../../images/access.png'
import listicon from '../../images/listicon.png'
import Top from '../Top';



const ManageonlineAccess = () => {
    const accessToken = localStorage.getItem('accessToken');
    const [data, setData] = useState([]);
    const [emails, setEmails] = useState([]);
    const [email, setEmail] = useState();
    const [domain, setDomain] = useState();
    const [domains, setDomains] = useState([]);
    
    const [manageModal, setManageModal] = useState(false);
    const manageToggleModal = () => setManageModal(!manageModal);
    const [showDomain, setShowDomain] = useState(false);
    const [showEmail, setShowEmail] = useState(false);
    const [choosedomain, setChoosedomain] = useState(false);
    const [chooseEmail, setChooseEmail] = useState(false);
    const [veryfyemailbutton, setVeryfyemailbutton] = useState(true);
    const [veryfydomainlbutton, setVeryfydomainbutton] = useState(true);
    const [noemail, setNoemail] = useState(false);
    const [nodomains, setNodomains] = useState(false);
    const [validemail, setvalidemail] = useState(false);
    const [validDomain, setvalidDomain] = useState(false);
    const [userId, setUserId] = useState([]);
    const [onlineaccess, setOnlineaccess] = useState(false);
    const onlineaccessToggleModal = (_id) => {
        setUserId(_id)
        setOnlineaccess(!onlineaccess)
    };
    const [onlinesuccessModal, setOnlinesuccessModal] = useState(false);
    const onlinesuccessToggleModal = () => setOnlinesuccessModal(!onlinesuccessModal);

    const [disableonlineModal, setDisableonlineModal] = useState(false);
    const disableonlineToggleModal = () => setDisableonlineModal(!disableonlineModal);
    
    

    const domainval = useRef()
    const emailval = useRef()

    useEffect(() => {
        getonlineAccessList();

    }, [data])

    

    const getonlineAccessList = () => {
        fetch(API_URL + "/get/onlineaccess/list",
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': accessToken,
                },
            }
        ).then(async (response) => {
            if (response.status == 200) {
                const resp = await response.json();

                let _temp = [];
                resp.data.map((v, i) => {
                    _temp.push({
                        Name: <p>{v.firstname} {v.lastname}</p>,
                        Email: v.email,
                        OnlineAccess: <p><a href="javascript:void" onClick={() => {onlineaccessToggleModal(v.id); getonlineAccessList()}} className="downloadimg" ><img src={access} /></a> </p>
                    })
                })

                setData(_temp);


            }
            else if (response.status == 401) {
                logout()
            }
            else {
                alert("network error")
            }


        })
    }

    const getEmails = () => {

        const type = emailval.current.value

        if (email == null || email == "") {
            setvalidemail(true)
            return false;
        }
        fetch(API_URL + "/get/email/list/" + email + "/" + type,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': accessToken,
                },
            }
        ).then(async (response) => {
            if (response.status == 200) {
                const resp = await response.json();
                if (resp.success) {
                    setEmails(resp.data);
                    setVeryfyemailbutton(false)


                }
                else {
                    setNoemail(true)
                }

            }
            else if (response.status == 401) {
                logout()
            }
            else {
                alert("network error")
            }


        })
    }

    const handleVerybtn = ()=>{
        setVeryfyemailbutton(true)
        setVeryfydomainbutton(true)
        setNoemail(false);
        setEmails(false);
        setDomains(false)
        setNodomains(false);
        setvalidemail(false);
        setvalidDomain(false);
        
       
    }
    

    const updateonlineAccessByemail = () => {

        let data = {};
        const replaceOnline = 0;
        data['onlineAccess'] = replaceOnline;

        fetch(API_URL + "/update/online/access/byemail/" + email, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(data)
        }).then((response) => {

            if (response.status == 200) {
                response.json().then((resp) => {
                    console.log("results", resp);
                    manageToggleModal();
                    disableonlineToggleModal();
                    getonlineAccessList();
                    setShowEmail(false);
                    setEmails(false);
                    setVeryfyemailbutton(true);
                   

                });
            }
            else {
                alert("Network error")
            }

        })


    }


    const getDomains = () => {

        const type = domainval.current.value

        if (domain == null || domain == "") {
            setvalidDomain(true);
            return false;
        }
        fetch(API_URL + "/get/domain/list/" + domain + "/" + type,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': accessToken,
                },
            }
        ).then(async (response) => {
            if (response.status == 200) {
                const resp = await response.json();
                if (resp.success) {
                    setDomains(resp.data);
                    setVeryfydomainbutton(false)

                }
                else {
                    setNodomains(true)
                }

            }
            else if (response.status == 401) {
                logout()
            }
            else {
                alert("network error")
            }


        })
    }


    const updateonlineAccessByDommain = () => {

        let data = {};
        const replaceOnline = 0;
        data['onlineAccess'] = replaceOnline;

        fetch(API_URL + "/update/online/access/bydomain/" + domain, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(data)
        }).then((response) => {

            if (response.status == 200) {
                response.json().then((resp) => {
                    console.log("results", resp);
                    disableonlineToggleModal();
                    manageToggleModal();
                    getonlineAccessList();
                    setShowDomain(false);
                    setDomains(false);
                    setVeryfydomainbutton(true);
                   
                    
                });
            }
            else {
                alert("Network error")
            }

        })


    }

    

    const updateOnlineAccess = ()=>{
        
        fetch(API_URL+"/update/online/access/" + userId, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
        
                },
               
            }).then((response) => {
               
                if (response.status == 200) {
                    response.json().then((resp) => {
                        console.log("results", resp);
                        onlineaccessToggleModal();
                        onlinesuccessToggleModal();
                        getonlineAccessList();
                       
                        
                    });
                }
                else {
                    alert("Network error")
                }
               
            })
    
        
    }
    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }



    const columns = [
        {
            title: "Name", field: "Name"
        },
        {
            title: "Email", field: "Email"
        },
        {
            title: "Allow Online Access", field: "OnlineAccess"
        },



    ]



    return (
        <div className="">
            <div className="cmail">
                <Top />
            </div>
            <div className="wrp-dashbord">
                <div className="cemail-left">
                    <Leftsiderbar />
                </div>
                <div className="right-section">
                    <div className='onlineaccess-wrp'>
                    <div className='onlineaccess-child1'><h3>Offline only users</h3></div>
                        <div className='onlineaccess-child1'>
                            <a href='#' onClick={manageToggleModal}>Disable Online Access</a>
                        </div>
                       
                    </div>

                    <div className="wrp-bankform">
                        <div style={{ maxWidth: '100%' }}>

                            <MaterialTable
                                options={{
                                    search: true,
                                    showTitle: false,
                                    toolbar: true,
                                    pageSize: 10
                                }}
                                columns={columns}
                                data={data}
                                title=""
                            />

                        </div>
                    </div>
                </div>
            </div>


            <Modal isOpen={manageModal} toggle={manageToggleModal} className="connect-box" centered={true}>
                <ModalHeader toggle={manageToggleModal}><span className="ml-1 roititle">Disable Online Access</span></ModalHeader>
                <ModalBody>
                    <div className='manage-box'>
                        <div className="manageRadio-wrp">
                            <div className="radio-btn"><input type="radio" name="domain" value={choosedomain == true ? 1 : 1} onChange={() => setChoosedomain(!choosedomain)} onClick={() => { setShowDomain(true); setShowEmail(false); }} ref={domainval} /> <span>Using Domain</span></div>
                            <div className="radio-btn"><input type="radio" name="domain" value={chooseEmail == true ? 0 : 0} onChange={() => setChooseEmail(!chooseEmail)} onClick={() => { setShowEmail(true); setShowDomain(false); }} ref={emailval} /> <span>Using Email</span></div>
                        </div>

                        {
                            showDomain &&

                            <div>
                                <div className="input-email">
                                    <input placeholder="Enter Domain" onChange={(e) => {setDomain(e.target.value); handleVerybtn()}} />
                                    {
                                        nodomains &&
                                        <p className='text-center'>No Account Found</p>


                                    }
                                    {
                                        domains.length > 0 &&
                                        <p className='text-center'>{domains.length} accounts found</p>
                                    }
                                    {
                                    validDomain && 
                                    <p className='text-center'>Please enter a valid domain</p>
                                }
                                    <div className="btn-input">

                                        {
                                            domains.length > 0 &&
                                            <button onClick={updateonlineAccessByDommain}>Disable Online Access</button>
                                        }
                                        {
                                            veryfydomainlbutton &&
                                            <button onClick={getDomains}>Verify Account</button>
                                        }

                                    </div>
                                </div>
                            </div>
                        }

                        {
                            showEmail &&
                            <div className="input-email">
                                <input placeholder="Enter Email" onChange={(e) => {setEmail(e.target.value); handleVerybtn()}} />
                                {
                                    noemail &&
                                    <p className='text-center'>No Account Found</p>
                                    
                                }
                                {
                                    validemail && 
                                    <p className='text-center'>Please enter a valid email</p>
                                }
                                {
                                    emails.length > 0 &&
                                    <p className='text-center'>{emails.length} accounts found</p>
                                }
                                <div className="btn-input">
                                    {
                                        veryfyemailbutton &&
                                        <button onClick={getEmails}>Verify Account</button>
                                    }
                                    

                                    {
                                        emails.length > 0 &&
                                        <button onClick={updateonlineAccessByemail}>Disable Online Access</button>
                                    }



                                </div>
                            </div>
                        }
                    </div>
                </ModalBody>

            </Modal>

            <Modal isOpen={onlineaccess} toggle={onlineaccessToggleModal} className="connect-box" centered={true}>
                <ModalHeader toggle={onlineaccessToggleModal}><span className="ml-1 roititle">Allow Online Access</span></ModalHeader>
                <ModalBody>
                    <div className="changedate-box">
                        <p>Are you sure you want allow online access to this user(s) ?</p>
                        <div className="wrp-btn-renew">
                            
                            <div className='renew-btn-child renew-yes-btn'><button onClick={updateOnlineAccess}>Yes</button></div>
                            <div className='renew-btn-child'><button onClick={onlineaccessToggleModal}>No</button></div>
                        </div>
                    </div>
                </ModalBody>

            </Modal>

            <Modal isOpen={onlinesuccessModal} toggle={onlinesuccessToggleModal} className="connect-box" centered={true}>
                <ModalHeader toggle={onlinesuccessToggleModal}><span className="ml-1 roititle">Successful</span></ModalHeader>
                <ModalBody>
                    <div className="expirydate">
                        <p>Updated online access successfully</p>
                    </div>
                </ModalBody>

            </Modal>

            <Modal isOpen={disableonlineModal} toggle={disableonlineToggleModal} className="connect-box" centered={true}>
                <ModalHeader toggle={disableonlineToggleModal}><span className="ml-1 roititle">Successful</span></ModalHeader>
                <ModalBody>
                    <div className="expirydate">
                        <p>Disable online access successfully</p>
                    </div>
                </ModalBody>

            </Modal>

        </div>
    )
}

export default ManageonlineAccess;