import React,{useContext,useCallback,useEffect} from 'react';
import {Link} from "react-router-dom";

import {AppContext} from '../component/AppContext';

function NotFound(props) {
    var userdata=useContext(AppContext).userdata;
    useEffect(()=>{

    })
    return (
      <div>
        <main>
          <div className="main-section">
            <div className="container">
              <div className="main-section-data">
                <div className="row">
                  <div className="col-lg-12" >
                    <h1 className="text-center">Not Found</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main> 
      </div>
    );
}

export default NotFound;
