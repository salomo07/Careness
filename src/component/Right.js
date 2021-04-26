import React,{useContext} from 'react';
import {Link} from "react-router-dom";
import {AppContext} from '../component/AppContext';
/*Tags*/

function Right() {
  var userdata=useContext(AppContext).userdata;
  if(userdata==null) return (<></>);
  return (    
    <div className="mb-6 card">
        <div className="card-header-tab card-header">
            <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                <i className="header-icon lnr-cloud-download icon-gradient bg-happy-itmeo"></i>
                Technical Support
            </div>
            <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                <div className="btn-group dropdown">
                    <button type="button" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false" className="btn-icon btn-icon-only btn btn-link">
                        <i className="pe-7s-menu btn-icon-wrapper"></i>
                    </button>
                    <div tabIndex="-1" role="menu" aria-hidden="true"
                        className="dropdown-menu-right rm-pointers dropdown-menu-shadow dropdown-menu-hover-link dropdown-menu">
                        <h6 tabIndex="-1" className="dropdown-header">Header</h6>
                        <button type="button" tabIndex="0" className="dropdown-item">
                            <i className="dropdown-icon lnr-inbox"> </i><span>Menus</span>
                        </button>
                        <button type="button" tabIndex="0" className="dropdown-item">
                            <i className="dropdown-icon lnr-file-empty"> </i><span>Settings</span>
                        </button>
                        <button type="button" tabIndex="0" className="dropdown-item">
                            <i className="dropdown-icon lnr-book"> </i><span>Actions</span>
                        </button>
                        <div tabIndex="-1" className="dropdown-divider"></div>
                        <div className="p-3 text-right">
                            <button className="mr-2 btn-shadow btn-sm btn btn-link">View Details</button>
                            <button className="mr-2 btn-shadow btn-sm btn btn-primary">Action</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-0 card-body">
            <div className="p-1 slick-slider-sm mx-auto">
                <div className="slick-slider">
                    <div>
                        <div className="widget-chart widget-chart2 text-left p-0">
                            <div className="widget-chat-wrapper-outer">
                                <div className="widget-chart-content widget-chart-content-lg pb-0">
                                    <div className="widget-chart-flex">
                                        <div className="widget-title opacity-5 text-muted text-uppercase"> New Accounts since 2018</div>
                                    </div>
                                    <div className="widget-numbers">
                                        <div className="widget-chart-flex">
                                            <div>
                                                <span className="opacity-10 text-success pr-2">
                                                    <i className="fa fa-angle-up"></i>
                                                </span>
                                                <span>78</span>
                                                <small className="opacity-5 pl-1">%</small>
                                            </div>
                                            <div
                                                className="widget-title ml-2 font-size-lg font-weight-normal text-muted">
                                                <span className="text-success pl-2">+14</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-chart-wrapper he-auto opacity-10 m-0">
                                    <div id="dashboard-sparkline-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="widget-chart widget-chart2 text-left p-0">
                            <div className="widget-chat-wrapper-outer">
                                <div className="widget-chart-content widget-chart-content-lg pb-0">
                                    <div className="widget-chart-flex">
                                        <div className="widget-title opacity-5 text-muted text-uppercase"> Last Year Total Sales</div>
                                    </div>
                                    <div className="widget-numbers">
                                        <div className="widget-chart-flex">
                                            <div>
                                                <small className="opacity-3 pr-1">$</small>
                                                <span>629</span>
                                                <span className="text-primary pl-3">
                                                    <i className="fa fa-angle-down"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-chart-wrapper he-auto opacity-10 m-0">
                                    <div id="dashboard-sparkline-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="widget-chart widget-chart2 text-left p-0">
                            <div className="widget-chat-wrapper-outer">
                                <div className="widget-chart-content widget-chart-content-lg pb-0">
                                    <div className="widget-chart-flex">
                                        <div className="widget-title opacity-5 text-muted text-uppercase"> Helpdesk Tickets</div>
                                    </div>
                                    <div className="widget-numbers">
                                        <div className="widget-chart-flex">
                                            <div>
                                                <span className="text-warning">34</span>
                                            </div>
                                            <div
                                                className="widget-title ml-2 font-size-lg font-weight-normal text-dark">
                                                <span className="opacity-5 text-muted pl-2 pr-1">5%</span>
                                                increase
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-chart-wrapper he-auto opacity-10 m-0">
                                    <div id="dashboard-sparkline-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h6
                className="text-muted text-uppercase font-size-md opacity-5 pl-3 pr-3 pb-1 font-weight-normal">
                Sales Progress</h6>
            <ul className="list-group list-group-flush">
                <li className="p-3 bg-transparent list-group-item">
                    <div className="widget-content p-0">
                        <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                                <div className="widget-content-left">
                                    <div className="widget-heading">Total Orders</div>
                                    <div className="widget-subheading">Last year expenses</div>
                                </div>
                                <div className="widget-content-right">
                                    <div className="widget-numbers text-success">
                                        <small>$</small>
                                        1896
                                    </div>
                                </div>
                            </div>
                            <div className="widget-progress-wrapper">
                                <div className="progress-bar-sm progress-bar-animated-alt progress">
                                    <div className="progress-bar bg-primary" role="progressbar"
                                        aria-valuenow="43" aria-valuemin="0" aria-valuemax="100"
                                        style={{width:"43%"}}>
                                    </div>
                                </div>
                                <div className="progress-sub-label">
                                    <div className="sub-label-left">YoY Growth</div>
                                    <div className="sub-label-right">100%</div>
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

export default Right;
