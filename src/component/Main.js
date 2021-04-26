import React,{useContext,useEffect} from 'react';
import {AppContext} from '../component/AppContext';
import SlideShow from'../component/SlideShow';
import Contact from'../component/Contact';
import Mid from'../component/Mid';
import Left from'../component/Left';
import Right from'../component/Right';
import Footer from'../component/Footer';

function Main() {
    // var userdata=useContext(AppContext).userdata;
    // var isLoggedIn=userdata!=null? true : false;
    
    return (
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
                            <Left style={{display:true}}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
  );
}

export default Main;
