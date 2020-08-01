import React from 'react';
import {Link} from "react-router-dom";
import StatusList from'../component/StatusList';
/*Add and others Report*/

function Mid() {
  return (
    <div className="col-sm-12 col-lg-6 mid-side">
      <div className="mb-3 card" style={{borderRadius:'10px'}}>
        <div className="card-body">
          <div className="col-sm">
            <textarea name="text" id="exampleText" placeholder="Create a report about someone who need help ..." className="form-control autosize-input"></textarea>
          </div>
            <ul className="tabs-animated-shadow tabs-animated nav nav-justified tabs-rounded-lg">
              <li className="nav-item">
                  <a role="tab" className="nav-link active show" href="#" aria-selected="true">
                      <span>Sales</span>
                  </a>
              </li>
              <li className="nav-item">
                  <a role="tab" className="nav-link" href="#" aria-selected="false">
                      <span>Profile</span>
                  </a>
              </li>
              <li className="nav-item">
                  <a role="tab" className="nav-link" href="#" aria-selected="false">
                      <span>Accounts</span>
                  </a>
              </li>
          </ul>
        </div>
      </div>
      <StatusList/>
    </div>
  );
}

export default Mid;
