import React,{useContext,useState,useEffect} from 'react'
import {AppContext} from '../AppContext';

import Header from'../component/Header';
import Sidebar from'../component/Sidebar';
import SlideShow from'../component/SlideShow';
import Contact from'../component/Contact';
import Mid from'../component/Mid';
import Right from'../component/Right';
import Footer from'../component/Footer';


import Settings from'../component/Settings';
import CouchDB from '../CouchDB';


function Dasboard(props) {
    var userdata=useContext(AppContext).userdata;

    var setUserdata=useContext(AppContext).setUserdata;
    var tryLogin=useContext(AppContext).tryLogin;
    var [isVisible,setVisible]=useState(false);

    return (
        <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
            <Header/>
            <Settings/>

            <div className="app-main">
                <div className="app-main__outer">
                    <div className="app-main__inner">
                        <div className="tabs-animation">
                            <div className="row">
                                <SlideShow/>
                            </div>
                            
                            <div className="row"> 
                                <div className="col-lg-3 col-lg-3 left-side" >
                                    <Contact/>
                                </div>                                        
                                <Mid/>
                                <div className="col-sm-12 col-lg-3 right-side">
                                    <Right style={{display:true}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
            <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-hidden="true">
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
                                            <label htmlFor="txtUsername" className="">Username (Salomo07)</label>
                                            <input name="email" id="txtUsername" placeholder="Username" type="text" className="form-control form-control-lg"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="position-relative form-group">
                                            <label htmlFor="txtPassword" className="">Password (rejoice)</label>
                                            <input name="password" id="txtPassword" placeholder="Password here..." type={isVisible?"text":"password"} className="form-control form-control-lg"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="position-relative form-check">
                                    <div className="row">
                                        <div className="col">
                                            
                                        </div>
                                        <div className="col custom-checkbox custom-control">
                                            <input name="check" id="chkShowPassword" type="checkbox" className="custom-control-input" onClick={()=>{setVisible(!isVisible)}}/>
                                            <label htmlFor="chkShowPassword" className="custom-control-label">Show Password</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="divider"></div>
                                <div className="d-flex align-items-center">
                                    <div className="ml-auto">
                                        <a href="" className="btn-lg btn btn-link">Recover Password</a>
                                        <button data-dismiss="modal" onClick={(e)=>{e.preventDefault(); tryLogin(document.getElementById("txtUsername").value,document.getElementById("txtPassword").value) }} className="btn-shadow btn-wide float-right btn-pill btn-hover-shine btn btn-info">Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="detailModal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img width="32" className="" src="assets/images/logoonly.png" style={{marginRight :'10px'}} alt=""/>
                            <h5 className="modal-title" id="loginModalLabel">Detail Contact</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-row">
                                <div className="col-md-6">
                                    <div className="position-relative form-group">
                                        <label htmlFor="txtFirstname" className="">Firstname</label>
                                        <input name="firstname" id="txtFirstname" placeholder="Firstname" type="text" className="form-control form-control-lg"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="position-relative form-group">
                                        <label htmlFor="txtLastname" className="">Lastname</label>
                                        <input name="lastname" id="txtLastname" placeholder="Lastname" className="form-control form-control-lg"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="position-relative form-group">
                                        <label htmlFor="txtAge" className="">Age</label>
                                        <input name="age" type="number" id="txtAge" placeholder="Age" className="form-control form-control-lg"/>
                                    </div>
                                </div>
                                <div className="col-md-12"><div className="position-relative form-group"><label htmlFor="exampleText" className="">Link Photo</label><textarea id="txtPhoto" placeholder="Link Photo" name="text" className="form-control"></textarea></div>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="d-flex align-items-center">
                                <div className="ml-auto">
                                <input id="inputId" type="hidden" value=""/>
                                    <button id="btnSaveContact" data-dismiss="modal" className="btn-shadow btn-wide float-right btn-pill btn-hover-shine btn btn-info">Save Contact</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="addModal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img width="32" className="" src="assets/images/logoonly.png" style={{marginRight :'10px'}} alt=""/>
                            <h5 className="modal-title" id="loginModalLabel">Add Contact</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-row">
                                <div className="col-md-6">
                                    <div className="position-relative form-group">
                                        <label htmlFor="txtFirstname" className="">Firstname</label>
                                        <input name="firstname" id="txtFirstname" placeholder="Firstname" type="text" className="form-control form-control-lg"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="position-relative form-group">
                                        <label htmlFor="txtLastname" className="">Lastname</label>
                                        <input name="lastname" id="txtLastname" placeholder="Lastname" className="form-control form-control-lg"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="position-relative form-group">
                                        <label htmlFor="txtAge" className="">Age</label>
                                        <input name="age" type="number" id="txtAge" placeholder="Age" className="form-control form-control-lg"/>
                                    </div>
                                </div>
                                <div className="col-md-12"><div className="position-relative form-group"><label htmlFor="exampleText" className="">Link Photo</label><textarea id="txtPhoto" placeholder="Link Photo" name="text" className="form-control"></textarea></div>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="d-flex align-items-center">
                                <div className="ml-auto">
                                <input id="inputId" type="hidden" value=""/>
                                    <button id="btnSaveContact" data-dismiss="modal" className="btn-shadow btn-wide float-right btn-pill btn-hover-shine btn btn-info">Save Contact</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dasboard;
