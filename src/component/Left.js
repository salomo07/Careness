import React,{useContext,useEffect} from 'react';
import {AppContext} from '../component/AppContext';
import {Link} from "react-router-dom";

/*For user's profile*/

function Left() {
  var userdata=useContext(AppContext).userdata;
  if(userdata==null) return "";
  return (
    <div className="mb-3 card">
        <div className="card-shadow-primary card-border mb-3 profile-responsive card">
            <div className="dropdown-menu-header">
                <div className="dropdown-menu-header-inner bg-alternate">
                    <div className="menu-header-image opacity-1"  
                        style={{backgroundImage:"url('"+userdata == null ? "" :""+"')"}}></div>
                    <div className="menu-header-content btn-pane-right">
                        <div className="avatar-icon-wrapper mr-3 avatar-icon-xl btn-hover-shine">
                            <div className="avatar-icon rounded">
                                <img src={userdata.profile.foto} alt="User"/>
                            </div>
                        </div>
                        <div>
                            <h5 className="menu-header-title"><center>{userdata.profile.firstname} {userdata.profile.lastname}</center></h5>
                            <h6 className="menu-header-subtitle"><center>{ userdata.profile.role.map((role)=>{
                              return role +" ";
                            })}</center></h6>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="list-group list-group-flush">
                <li className="p-0 list-group-item">
                    <div className="grid-menu grid-menu-2col">
                        <div className="no-gutters row">
                            <div className="col-sm-6">
                                <div className="p-2 ">
                                    <button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark">
                                        <i className="lnr-lighter text-dark opacity-7 btn-icon-wrapper mb-2"> </i>Automation
                                    </button>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="p-2">
                                    <button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-danger">
                                        <i className="lnr-construction text-danger opacity-7 btn-icon-wrapper mb-2"></i>Reports
                                    </button>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="p-2">
                                    <button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-success">
                                        <i className="lnr-bus text-success opacity-7 btn-icon-wrapper mb-2"></i>Activity
                                    </button>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="p-2">
                                    <button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-focus">
                                        <i className="lnr-gift text-focus opacity-7 btn-icon-wrapper mb-2"></i>Settings
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Left;
