import React,{useEffect,useState,useCallback,useContext} from 'react';
var $ =window.$;
function BlockUI(props) { 
    useEffect(()=>{
      console.log(window);
      // if($('.loader.mx-auto').length>0)
      // {$.blockUI();}
    })
    return (
    <div className="loader mx-auto">
        <div className="ball-grid-pulse">
            <div className="bg-white" />
            <div className="bg-white" />
            <div className="bg-white" />
            <div className="bg-white" />
            <div className="bg-white" />
            <div className="bg-white" />
            <div className="bg-white" />
            <div className="bg-white" />
            <div className="bg-white" />
        </div>
    </div>
  );
}

export default BlockUI;
