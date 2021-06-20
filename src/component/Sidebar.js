import React,{useEffect,useState,useCallback,useContext} from 'react';
import {Link} from "react-router-dom";
import {AppContext} from '../AppContext';
function Menu(props) { 
  var userdata=useContext(AppContext).userdata;
  useEffect(()=>{
    window.$('#metismenu').metisMenu('dispose');
    window.$('#metismenu').metisMenu();
  })
  return (
  <ul className="vertical-nav-menu" id="metismenu">
    <li className="app-sidebar__heading">Menu</li>
    {userdata.menu1==undefined?"":userdata.menu1.map((val)=>{
      var submenu=[];var html="";
      var html=userdata.menu2.map((val2)=>{
        if(val2.idmenu1==val._id){
          submenu.push(val2);
          return (<li key={val2._id}>
            <Link to={"/"+val2.url}>
              <i className={"metismenu-icon "+val2.class}/>{val2.label}
            </Link>
          </li>)
        }
      });
      return <li key={val._id}>
      <Link to={val.url}>
        <i className={"metismenu-icon "+val.class} />{val.label}
        {submenu.length>0 && <i className="metismenu-state-icon pe-7s-angle-down caret-left"/>}
      </Link>
      <ul>{html}</ul>
      </li>
    })}
    </ul>
    )
}

function Sidebar(props) {
  var userdata=useContext(AppContext).userdata;
  return (
    <>
    {userdata !=undefined && 
    <div className="app-sidebar" style={{"display":props.showSidebar==false?"none":true}} >
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
          <Menu/>
        </div>
      </div>
    </div>
    }
    </>
  );
}

export default Sidebar;
