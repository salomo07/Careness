import React,{useContext,useCallback,useEffect,useState} from 'react';
import {Link} from "react-router-dom";

import {AppContext} from '../component/AppContext';

import {toast} from 'react-toastify';
import Header from'../component/Header';
import Settings from'../component/Settings';
import Main from'../component/Main';



import Functions from '../Functions';

function Dasboard(props) {
    var userdata=useContext(AppContext).userdata;
    var setUserdata=useContext(AppContext).setUserdata;
    var tryLogin=useContext(AppContext).tryLogin;
    var [isVisible,setVisible]=useState(false);
    var [report,setReport] = useState();

    if(userdata&&userdata.report==undefined)
    {
        new Functions().find({selector:{coll:"report",createdby:userdata._id,status:{$ne:'finished'}}},(res,err)=>{
            userdata.report=res.docs[0];
            setUserdata(userdata);
        })
    }
    return (
        <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar closed-sidebar">
            <Header/>
            <Settings/>
            <Main/>
            <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img width="32" className="" src="assets/images/logoonly.png" style={{marginRight :'10px'}} alt=""/>
                            <h5 className="modal-title" id="loginModalLabel">Login Careness</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <div className="position-relative form-group">
                                            <label htmlFor="txtUsername" className="">Username</label>
                                            <input name="email" id="txtUsername" placeholder="Email here..." type="text" className="form-control form-control-lg"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="position-relative form-group">
                                            <label htmlFor="txtPassword" className="">Password</label>
                                            <input name="password" id="txtPassword" placeholder="Password here..." type={isVisible?"text":"password"} className="form-control form-control-lg"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="position-relative form-check">
                                    <div className="row">
                                        <div className="col">
                                            
                                        </div>
                                        <div className="col">
                                            <input name="check" id="chkShowPassword" type="checkbox" className="form-check-input" onClick={()=>{setVisible(!isVisible)}}/>
                                            <label htmlFor="chkShowPassword" className="form-check-label">Show Password</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="divider"></div>
                                <div className="d-flex align-items-center">
                                    <div className="ml-auto">
                                        <a href="" className="btn-lg btn btn-link">Recover Password</a>
                                        <button data-dismiss="modal" onClick={(e)=>{e.preventDefault(); tryLogin(document.getElementById("txtUsername").value,document.getElementById("txtPassword").value) }} className="btn-wide btn btn-info btn-lg">Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dasboard;
