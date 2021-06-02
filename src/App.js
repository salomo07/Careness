import React,{useState,useCallback,useEffect} from 'react';
import { Route, BrowserRouter as Router,Switch,Redirect} from "react-router-dom";
import {AppContext} from './AppContext';

import Dasboard from'./pages/Dasboard';
import NotFound from'./pages/NotFound';
import CouchDB from './CouchDB';
import Drawer from'./component/Drawer';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


var {bcrypt,ToastContainer,toast,notifConfig}=require ("./initApp.js");


// bcrypt.hash("rejoice", salt, function(err, hash) {
//  console.log(hash)
// });

// window.localStorage.clear();
var dataSaved=JSON.parse(window.localStorage.getItem("userdata"));

var App=() => {
    var [userdata, setUserdata] = useState(dataSaved);
    var tryLogin=useCallback((username,password)=>{
        // new CouchDB().find({selector:{"coll":"user",username:{$eq: username}}},(res,err)=>{
        //     if(err==null)
        //     {
        //         bcrypt.compare(password, res.docs[0].password, (e, r) => {
        //             if(r){window.localStorage.setItem("userdata",JSON.stringify(res.docs[0]));setUserdata(res.docs[0]);}
        //             else{toast('Your username or password is wrong', notifConfig);}
        //         });
        //     }
        //     else
        //     {toast.error('Can not connect to server !!!', notifConfig);}
        // });
        new CouchDB().query('userdata/user-view',username,(res,err)=>{
            if(err==null)
            {
                var user=res.rows[0].value.doc;
                user.role=res.rows[0].doc;
                bcrypt.compare(password, user.password, (e, r) => {
                    if(r){window.localStorage.setItem("userdata",JSON.stringify(user));setUserdata(user)}
                    else{toast('Your username or password is wrong', notifConfig);}
                });
            }
        });
    },[]);
    var tryLogout=useCallback(()=>{
        setUserdata(null);
        window.localStorage.clear();
    },[]);

    return (
    	<Router basename="/">
            <AppContext.Provider value={{userdata:userdata,setUserdata:setUserdata,tryLogin:tryLogin,tryLogout:tryLogout}}>
    	      	<Switch>
    	        	<Route exact path="/">                    
                        <Dasboard/>
    	          	</Route>
                    <Route path="/detailpoke/:id">
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
