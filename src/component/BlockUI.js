import React,{useEffect,useState,useCallback,useContext} from 'react';
var $ =window.$;
function BlockUI(props) { 
    useEffect(()=>{
      // if($('.loader.mx-auto').length>0)
      // {$.blockUI();}
    })
    return (
    <div className="loader">
        <div className="ball-grid-pulse">
          <div style={{backgroundColor: 'rgb(120, 195, 251)'}} />
          <div style={{backgroundColor: 'rgb(120, 195, 251)'}} />
          <div style={{backgroundColor: 'rgb(120, 195, 251)'}} />
          <div style={{backgroundColor: 'rgb(120, 195, 251)'}} />
          <div style={{backgroundColor: 'rgb(120, 195, 251)'}} />
          <div style={{backgroundColor: 'rgb(120, 195, 251)'}} />
          <div style={{backgroundColor: 'rgb(120, 195, 251)'}} />
          <div style={{backgroundColor: 'rgb(120, 195, 251)'}} />
          <div style={{backgroundColor: 'rgb(120, 195, 251)'}} />
        </div>
    </div>
  );
}

export default BlockUI;
