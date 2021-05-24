import React,{useContext,useState} from 'react';
import {AppContext} from '../component/AppContext';

import Header from'../component/Header';
import Settings from'../component/Settings';
import Main from'../component/Main';


import Functions from '../Functions';
var $=window.$;

function Dasboard(props) {
    var userdata=useContext(AppContext).userdata;
    var setUserdata=useContext(AppContext).setUserdata;

    return (
        <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar closed-sidebar">
            <Header/>
            <Settings/>
            <div className="app-main">
                <div className="app-main__outer">
                    <div className="app-main__inner">
                        <div className="tabs-animation">
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
        </div>
    );
}

export default Dasboard;
