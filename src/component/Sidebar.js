import React,{useEffect,useState,useCallback,useContext} from 'react';
import {Link} from "react-router-dom";
import {AppContext} from '../AppContext';
import CouchDB from '../CouchDB';
import BlockUI from '../component/BlockUI';

function Sidebar(props) {
    var userdata=useContext(AppContext).userdata;
    useEffect(()=>{
      
    });
    useCallback(()=>{
      console.log('Call');
    })
    return (
    <div className="app-sidebar" style={{display:"none"}}>
      <div className="app-header__logo">
        <div className="logo-src" />
        <div className="header__pane ml-auto">
          <div>
            <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="app-header__mobile-menu">
        <div>
          <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
      </div>
      <div className="app-header__menu">
        <span>
          <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
            <span className="btn-icon-wrapper">
              <i className="fa fa-ellipsis-v fa-w-6" />
            </span>
          </button>
        </span>
      </div>    
      <div className="scrollbar-sidebar">
        <div className="app-sidebar__inner">
          <ul className="vertical-nav-menu">
            <li className="app-sidebar__heading">Menu</li>
            <li>
              <a href="#">
                <i className="metismenu-icon pe-7s-rocket" />Dashboards
                <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
              </a>
              <ul>
                <li>
                  <a href="index.html">
                    <i className="metismenu-icon" />Analytics
                  </a>
                </li>
                <li>
                  <a href="dashboards-commerce.html">
                    <i className="metismenu-icon" />Commerce
                  </a>
                </li>
                <li>
                  <a href="dashboards-sales.html">
                    <i className="metismenu-icon">
                    </i>Sales
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="metismenu-icon" /> Minimal
                    <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                  </a>
                  <ul>
                    <li>
                      <a href="dashboards-minimal-1.html">
                        <i className="metismenu-icon" />Variation 1
                      </a>
                    </li>
                    <li>
                      <a href="dashboards-minimal-2.html">
                        <i className="metismenu-icon" />Variation 2
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="dashboards-crm.html">
                    <i className="metismenu-icon" /> CRM
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
