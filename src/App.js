import React,{createContext,useState,useCallback,useEffect} from 'react';
import { Route, BrowserRouter as Router,Switch,Redirect} from "react-router-dom";

import {AppContext} from './component/AppContext';

import Dasboard from'./pages/Dasboard';
import NotFound from'./pages/NotFound';
import Functions from './Functions';
import Drawer from'./component/Drawer';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

var {PouchDB,bcrypt,dbLocal,dbRemote,ToastContainer,toast,notifConfig}=require ("./initApp.js");


// bcrypt.hash("rejoice", salt, function(err, hash) {
//  console.log(hash)
// });

// dbLocal.getIndexes(function (err, result) {
//   if (err) { return console.log(err); }
//   console.log(result)
// });
var dataSaved=JSON.parse(window.localStorage.getItem("userdata"));

var App=() => {
    var [userdata, setUserdata] = useState(dataSaved);
    var tryLogin=useCallback((username,password)=>{
        new Functions().get(username,(res,err)=>{console.log('sss',res,err)
            if(err==null)
            {
                bcrypt.compare(password, res.password, (e, r) => {
                    if(r){window.localStorage.setItem("userdata",JSON.stringify(res));setUserdata(res);}
                    else{toast('Your username or password is wrong', notifConfig);}
                });
            }
            else
            {toast.error('Can not connect to server !!!', notifConfig);}

        })
    });

    var tryLogout=useCallback(()=>{
        setUserdata(null);
        window.localStorage.removeItem("userdata");
        delete window.report;
        // window.location.reload();
    });
    
    var updateUserdata=useCallback((data)=>{
        setUserdata(data);console.log('Userdata updated',data)
    });
    return (
    	<Router basename="/">
            <AppContext.Provider value={{userdata:userdata,setUserdata:setUserdata,tryLogin:tryLogin,tryLogout:tryLogout}}>
	      	<Switch>
	        	<Route exact path="/">                    
                    <Dasboard/>
	          	</Route>
                <Route path="/signout">                    
                    <Redirect to="/" />
                </Route>
                <Route component={NotFound} />
	      	</Switch>
            
            </AppContext.Provider>
            <Drawer/>
            <div className="app-drawer-overlay d-none animated fadeIn"></div>
            <ToastContainer/>
	    </Router>
    );
}

export default App;
