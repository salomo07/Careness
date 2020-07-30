import React,{useState,useContext,useEffect,useCallback} from 'react';
import {Link} from "react-router-dom";

import {AppContext} from '../component/AppContext';
function Header() {
    var [isDropdownOpen,setDropdown] = useState(false);
    var userdata=useContext(AppContext).userdata;
    var isLoggedIn=userdata!=null? true : false;
    var tryLogout=useContext(AppContext).tryLogout;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPwd, setShowPwd] = useState(false);

    var changeShowPwd=useCallback(()=>{
        setShowPwd(!showPwd);
    });
    useEffect(()=>{
        if(userdata!=null)
        {document.getElementById("btnLogout").addEventListener("click", tryLogout);}
    })
    return (
    <div className="app-header header-shadow bg-arielle-smile header-text-light">
        <div className="app-header__logo">
            <Link to="/"><div className="logo-src" ></div></Link>
        </div>
        <div className="app-header__menu">
          <span>
              <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                  <span className="btn-icon-wrapper">
                      <i className="fa fa-ellipsis-v fa-w-6"></i>
                  </span>
              </button>
          </span>
        </div>    
        <div className="app-header__content">
            <div className="app-header-left">
                <div className="search-wrapper">
                  <div className="input-holder">
                    <input type="text" className="search-input" placeholder="Type to search"/>
                    <button className="search-icon"><span></span></button>
                  </div>
                  <button className="close"></button>
                </div>
                { userdata != null &&
                <ul className="header-megamenu nav">
                    <li className="nav-item">
                        <a href="#" data-placement="bottom" rel="popover-focus" data-offset="300" data-toggle="popover-custom" className="nav-link">
                            <i className="nav-link-icon pe-7s-gift"> </i> Mega Menu
                            <i className="fa fa-angle-down ml-2 opacity-5"></i>
                        </a>
                        <div className="rm-max-width">
                            <div className="d-none popover-custom-content">
                                <div className="dropdown-mega-menu">
                                    <div className="grid-menu grid-menu-3col">
                                        <div className="no-gutters row">
                                            <div className="col-sm-6 col-xl-4">
                                                <ul className="nav flex-column">
                                                    <li className="nav-item-header nav-item"> Overview</li>
                                                    <li className="nav-item">
                                                        <a href="#" className="nav-link">
                                                            <i className="nav-link-icon lnr-inbox"></i>
                                                            <span> Contacts</span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#" className="nav-link">
                                                            <i className="nav-link-icon lnr-book"></i>
                                                            <span> Incidents</span>
                                                            <div className="ml-auto badge badge-pill badge-danger">5</div>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#" className="nav-link">
                                                            <i className="nav-link-icon lnr-picture"></i>
                                                            <span> Companies</span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a disabled="" href="#" className="nav-link disabled">
                                                            <i className="nav-link-icon lnr-file-empty"></i>
                                                            <span> Dashboards</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6 col-xl-4">
                                                <ul className="nav flex-column">
                                                    <li className="nav-item-header nav-item"> Favourites</li>
                                                    <li className="nav-item">
                                                        <a href="#" className="nav-link"> Reports Conversions </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#" className="nav-link"> Quick Start
                                                            <div className="ml-auto badge badge-success">New</div>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#" className="nav-link">Users &amp; Groups</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#" className="nav-link">Proprieties</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6 col-xl-4">
                                                <ul className="nav flex-column">
                                                    <li className="nav-item-header nav-item">Sales &amp; Marketing</li>
                                                    <li className="nav-item">
                                                        <a href="#" className="nav-link">Queues </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#" className="nav-link">Resource Groups </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#" className="nav-link">Goal Metrics
                                                            <div className="ml-auto badge badge-warning">3</div>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#" className="nav-link">Campaigns</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="btn-group nav-item">
                        <a className="nav-link" data-toggle="dropdown" aria-expanded="false">
                            <span className="badge badge-pill badge-danger ml-0 mr-2">4</span> Settings
                            <i className="fa fa-angle-down ml-2 opacity-5"></i>
                        </a>
                        <div tabIndex="-1" role="menu" aria-hidden="true" className="rm-pointers dropdown-menu">
                            <div className="dropdown-menu-header">
                                <div className="dropdown-menu-header-inner bg-secondary">
                                    <div className="menu-header-image opacity-5" style={{backgroundImage:"url('img/dropdown-header/abstract2.jpg')"}}></div>
                                    <div className="menu-header-content">
                                        <h5 className="menu-header-title">Overview</h5>
                                        <h6 className="menu-header-subtitle">Dropdown menus for everyone</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="scroll-area-xs">
                                <div className="scrollbar-container">
                                    <h6 tabIndex="-1" className="dropdown-header">Key Figures</h6>
                                    <button type="button" tabIndex="0" className="dropdown-item">Service Calendar</button>
                                    <button type="button" tabIndex="0" className="dropdown-item">Knowledge Base</button>
                                    <button type="button" tabIndex="0" className="dropdown-item">Accounts</button>
                                    <div tabIndex="-1" className="dropdown-divider"></div>
                                    <button type="button" tabIndex="0" className="dropdown-item">Products</button>
                                    <button type="button" tabIndex="0" className="dropdown-item">Rollup Queries</button>
                                </div>
                            </div>
                            <ul className="nav flex-column">
                                <li className="nav-item-divider nav-item"></li>
                                <li className="nav-item-btn nav-item">
                                    <button className="btn-wide btn-shadow btn btn-danger btn-sm">Cancel</button>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="dropdown nav-item">
                        <a aria-haspopup="true" data-toggle="dropdown" className="nav-link" aria-expanded="false">
                            <i className="nav-link-icon pe-7s-settings"></i> Projects
                            <i className="fa fa-angle-down ml-2 opacity-5"></i>
                        </a>
                        <div tabIndex="-1" role="menu" aria-hidden="true" className="dropdown-menu-rounded dropdown-menu-lg rm-pointers dropdown-menu">
                            <div className="dropdown-menu-header">
                                <div className="dropdown-menu-header-inner bg-success">
                                    <div className="menu-header-image opacity-1" style={{backgroundImage:"url('img/dropdown-header/abstract3.jpg')"}}></div>
                                    <div className="menu-header-content text-left">
                                        <h5 className="menu-header-title">Overview</h5>
                                        <h6 className="menu-header-subtitle">Unlimited options</h6>
                                        <div className="menu-header-btn-pane">
                                            <button className="mr-2 btn btn-dark btn-sm">Settings</button>
                                            <button className="btn-icon btn-icon-only btn btn-warning btn-sm">
                                                <i className="pe-7s-config btn-icon-wrapper"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" tabIndex="0" className="dropdown-item">
                                <i className="dropdown-icon lnr-file-empty"></i>Graphic Design
                            </button>
                            <button type="button" tabIndex="0" className="dropdown-item">
                                <i className="dropdown-icon lnr-file-empty"> </i>App Development
                            </button>
                            <button type="button" tabIndex="0" className="dropdown-item">
                                <i className="dropdown-icon lnr-file-empty"> </i>Icon Design
                            </button>
                            <div tabIndex="-1" className="dropdown-divider"></div>
                            <button type="button" tabIndex="0" className="dropdown-item">
                                <i className="dropdown-icon lnr-file-empty"></i>Miscellaneous
                            </button>
                            <button type="button" tabIndex="0" className="dropdown-item">
                                <i className="dropdown-icon lnr-file-empty"></i>Frontend Dev
                            </button>
                        </div>
                    </li>
                </ul>
                }      
            </div>
            <div className="app-header-right">
                <div className="header-dots">
                    <div className="dropdown" >
                        <button type="button"  aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" className="p-0 mr-2 btn btn-link">
                            <span className="icon-wrapper icon-wrapper-alt rounded-circle">
                                <span className="icon-wrapper-bg bg-primary"></span>
                                <i className="icon text-primary ion-android-apps"></i>
                            </span>
                        </button>
                        <div tabIndex="-1" role="menu" aria-hidden="true" className="dropdown-menu-xl rm-pointers dropdown-menu dropdown-menu-right">
                            <div className="dropdown-menu-header">
                                <div className="dropdown-menu-header-inner bg-plum-plate">
                                    <div className="menu-header-image" style={{backgroundImage:"url('img/dropdown-header/abstract4.jpg')"}}></div>
                                    <div className="menu-header-content text-white">
                                        <h5 className="menu-header-title">Grid Dashboard</h5>
                                        <h6 className="menu-header-subtitle">Easy grid navigation inside dropdowns</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-menu grid-menu-xl grid-menu-3col">
                                <div className="no-gutters row">
                                    <div className="col-sm-6 col-xl-4">
                                        <button className="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                                            <i className="pe-7s-world icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"></i> Automation
                                        </button>
                                    </div>
                                    <div className="col-sm-6 col-xl-4">
                                        <button className="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                                            <i className="pe-7s-piggy icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"> </i> Reports
                                        </button>
                                    </div>
                                    <div className="col-sm-6 col-xl-4">
                                        <button className="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                                            <i className="pe-7s-config icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"> </i> Settings
                                        </button>
                                    </div>
                                    <div className="col-sm-6 col-xl-4">
                                        <button className="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                                            <i className="pe-7s-browser icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"> </i> Content
                                        </button>
                                    </div>
                                    <div className="col-sm-6 col-xl-4">
                                        <button className="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                                            <i className="pe-7s-hourglass icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"></i> Activity
                                        </button>
                                    </div>
                                    <div className="col-sm-6 col-xl-4">
                                        <button className="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                                            <i className="pe-7s-world icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"> </i> Contacts
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <ul className="nav flex-column">
                                <li className="nav-item-divider nav-item"></li>
                                <li className="nav-item-btn text-center nav-item">
                                    <button className="btn-shadow btn btn-primary btn-sm">Follow-ups</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="dropdown">
                      <button type="button" data-toggle="dropdown" className="p-0 mr-2 btn btn-link">
                          <span className="icon-wrapper icon-wrapper-alt rounded-circle">
                              <span className="icon-wrapper-bg bg-focus"></span>
                              <span className="language-icon opacity-8 flag large DE"></span>
                          </span>
                      </button>
                      <div tabIndex="-1" role="menu" aria-hidden="true" className="rm-pointers dropdown-menu dropdown-menu-right">
                          <div className="dropdown-menu-header">
                              <div className="dropdown-menu-header-inner pt-4 pb-4 bg-focus">
                                  <div className="menu-header-image opacity-05" style={{backgroundImage:"url('img/dropdown-header/city2.jpg')"}}></div>
                                  <div className="menu-header-content text-center text-white">
                                      <h6 className="menu-header-subtitle mt-0"> Choose Language</h6>
                                  </div>
                              </div>
                          </div>
                          <h6 tabIndex="-1" className="dropdown-header"> Popular Languages</h6>
                          <button type="button" tabIndex="0" className="dropdown-item">
                              <span className="mr-3 opacity-8 flag large US"></span> USA
                          </button>
                          <button type="button" tabIndex="0" className="dropdown-item">
                              <span className="mr-3 opacity-8 flag large CH"></span> Switzerland
                          </button>
                          <button type="button" tabIndex="0" className="dropdown-item">
                              <span className="mr-3 opacity-8 flag large FR"></span> France
                          </button>
                          <button type="button" tabIndex="0" className="dropdown-item">
                              <span className="mr-3 opacity-8 flag large ES"></span>Spain
                          </button>
                          <div tabIndex="-1" className="dropdown-divider"></div>
                          <h6 tabIndex="-1" className="dropdown-header">Others</h6>
                          <button type="button" tabIndex="0" className="dropdown-item active">
                              <span className="mr-3 opacity-8 flag large DE"></span> Germany
                          </button>
                          <button type="button" tabIndex="0" className="dropdown-item">
                              <span className="mr-3 opacity-8 flag large IT"></span> Italy
                          </button>
                      </div>
                    </div>
                    <div className="dropdown">
                      <button type="button" aria-haspopup="true" data-toggle="dropdown" aria-expanded="false" className="p-0 btn btn-link dd-chart-btn">
                          <span className="icon-wrapper icon-wrapper-alt rounded-circle">
                              <span className="icon-wrapper-bg bg-success"></span>
                              <i className="icon text-success ion-ios-analytics"></i>
                          </span>
                      </button>
                      <div tabIndex="-1" role="menu" aria-hidden="true" className="dropdown-menu-xl rm-pointers dropdown-menu dropdown-menu-right">
                            <div className="dropdown-menu-header">
                              <div className="dropdown-menu-header-inner bg-premium-dark">
                                  <div className="menu-header-image" style={{backgroundImage:"url('img/dropdown-header/abstract4.jpg')"}}></div>
                                  <div className="menu-header-content text-white">
                                      <h5 className="menu-header-title">Users Online</h5>
                                      <h6 className="menu-header-subtitle">Recent Account Activity Overview</h6>
                                  </div>
                              </div>
                            </div>
                            <div className="widget-chart">
                              <div className="widget-chart-content">
                                  <div className="icon-wrapper rounded-circle">
                                      <div className="icon-wrapper-bg opacity-9 bg-focus"></div>
                                      <i className="lnr-users text-white"></i>
                                  </div>
                                  <div className="widget-numbers">
                                      <span>344k</span>
                                  </div>
                                  <div className="widget-subheading pt-2">
                                      Profile views since last login
                                  </div>
                                  <div className="widget-description text-danger">
                                      <span className="pr-1"><span>176%</span></span>
                                      <i className="fa fa-arrow-left"></i>
                                  </div>
                              </div>
                              <div className="widget-chart-wrapper">
                                  <div id="dashboard-sparkline-carousel-3-pop"></div>
                              </div>
                            </div>
                            <ul className="nav flex-column">
                                <li className="nav-item-divider mt-0 nav-item"></li>
                                <li className="nav-item-btn text-center nav-item">
                                    <button className="btn-shine btn-wide btn-pill btn btn-warning btn-sm">
                                      <i className="fa fa-cog fa-spin mr-2"></i>View Details
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header-btn-lg pr-0">
                    <div className="widget-content p-0">
                    {   // isLogin
                        isLoggedIn &&
                        <div className="widget-content-wrapper" style={{cursor: 'pointer'}} data-toggle="dropdown">
                            <div className="widget-content-left">
                                <a aria-haspopup="true" aria-expanded="false" className="p-0 btn">
                                    <img width="42" className="rounded-circle" src="assets/images/avatars/1.jpg" alt=""/>
                                    <i className="fa fa-angle-down ml-2 opacity-8"></i>
                                </a>
                                <div className="rm-pointers dropdown-menu-lg dropdown-menu dropdown-menu-right">
                                    <div className="dropdown-menu-header">
                                        <div className="dropdown-menu-header-inner bg-info">
                                            <div className="menu-header-image opacity-2" style={{backgroundImage:"url('assets/images/dropdown-header/city3.jpg')"}}></div>
                                            <div className="menu-header-content text-left">
                                                <div className="widget-content p-0">
                                                    <div className="widget-content-wrapper">
                                                        <div className="widget-content-left mr-3">
                                                            <img width="62" className="rounded-circle" src="assets/images/avatars/1.jpg" alt=""/>
                                                        </div>
                                                        <div className="widget-content-left">
                                                            <div className="widget-heading"><center>{userdata.profile.firstname} {userdata.profile.lastname}</center></div>
                                                            <div className="widget-subheading opacity-8"><center>{userdata.profile.role.map((role)=>{
                                                                  return role +" ";
                                                                })}</center></div>
                                                        </div>
                                                        <div className="widget-content-right mr-2">
                                                            <div id="btnLogout"><button className="btn-pill btn-shadow btn-shine btn btn-focus">Logout</button></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="scroll-area-xs" style={{height:"150px"}}>
                                        <div className="scrollbar-container ps">
                                            <ul className="nav flex-column">
                                                <li className="nav-item-header nav-item">Activity</li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">Chat
                                                        <div className="ml-auto badge badge-pill badge-info">8</div>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">Recover Password</a>
                                                </li>
                                                <li className="nav-item-header nav-item">My Account
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">Settings
                                                        <div className="ml-auto badge badge-success">New</div>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">Messages
                                                        <div className="ml-auto badge badge-warning">512</div>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">Logs</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <ul className="nav flex-column">
                                        <li className="nav-item-divider mb-0 nav-item"></li>
                                    </ul>
                                    <div className="grid-menu grid-menu-2col">
                                        <div className="no-gutters row">
                                            <div className="col-sm-6">
                                                <button className="btn-icon-vertical btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-warning">
                                                    <i className="pe-7s-chat icon-gradient bg-amy-crisp btn-icon-wrapper mb-2"></i> Message Inbox
                                                </button>
                                            </div>
                                            <div className="col-sm-6">
                                                <button className="btn-icon-vertical btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-danger">
                                                    <i className="pe-7s-ticket icon-gradient bg-love-kiss btn-icon-wrapper mb-2"></i>
                                                    <b>Support Tickets</b>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="nav flex-column">
                                        <li className="nav-item-divider nav-item">
                                        </li>
                                        <li className="nav-item-btn text-center nav-item">
                                            <button className="btn-wide btn btn-primary btn-sm"> Open Messages </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="widget-content-left  ml-3 header-user-info">
                                <div className="widget-heading">{userdata.profile.firstname} {userdata.profile.lastname}</div>
                                <div className="widget-subheading">
                                <center>{userdata.profile.role.map((role)=>{return role +" ";})}</center></div>
                            </div>
                        </div>
                    }
                    {
                        !isLoggedIn &&
                        <div className="header-dots">
                            <div className="dropdown">
                                <button data-toggle="modal" title="Sign In" data-target="#loginModal" type="button" aria-haspopup="true" aria-expanded="false" className="p-0 btn dd-chart-btn">
                                    <span className="icon-wrapper icon-wrapper-alt rounded-circle">
                                        <span className="icon-wrapper-bg bg-success"></span>
                                        <i className="fa fa-sign-in"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    }   
                    </div>
                </div>
            
                <div className="header-btn-lg">
                  <button type="button" className="hamburger hamburger--elastic open-right-drawer">
                      <span className="hamburger-box">
                          <span className="hamburger-inner"></span>
                      </span>
                  </button>
                </div>        
            </div>
        </div>        
    </div> 
  );
}

export default Header;
