import React,{useState,useCallback,useEffect} from 'react';
import {Route, BrowserRouter as Router,Switch,Redirect} from "react-router-dom";
import {AppContext} from './AppContext';

import Dasboard from'./pages/Dasboard';
import MasterUser from'./pages/MasterUser';
import NotFound from'./pages/NotFound';
import CouchDB from './CouchDB';
import Drawer from'./component/Drawer';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


var {bcrypt,ToastContainer,toast,notifConfig}=require ("./initApp.js");
// let history = useHistory();

// bcrypt.hash("rejoice", salt, function(err, hash) {
//  console.log(hash)
// });

// window.localStorage.clear();
var dataSaved=JSON.parse(window.localStorage.getItem("userdata"));

var App=() => {
    var user;
    var [userdata, setUserdata] = useState(dataSaved);

    var tryLogin=useCallback((username,password)=>{
        new CouchDB().query('userdata/user-view',username,(res,err)=>{
            if(err==null)
            {
                user=res.rows[0].value.doc;
                bcrypt.compare(password, user.password, (e, r) => {
                    if(r){
                        user.role=res.rows[0].doc;
                        new CouchDB().find({selector:{idcompany:user.idcompany,coll:"menu1",_id:{'$in':user.role.menu1}}},(res,err)=>{
                            if(!err)
                            {
                                user.menu1=res.docs;
                                new CouchDB().find({selector:{idcompany:user.idcompany,coll:"menu2",_id:{'$in':user.role.menu2}}},(res,err)=>{
                                    if(!err)
                                    {   
                                        user.menu2=res.docs;                                
                                        window.localStorage.setItem("userdata",JSON.stringify(user));
                                        setUserdata(user);
                                    }
                                })
                            }
                        })                        
                    }
                    else{toast('Your username or password is wrong', notifConfig);}
                });
            }
        });
    },[]);
    
    var tryLogout=useCallback(()=>{
        window.localStorage.clear();
        setUserdata(undefined);
    },[]);

    return (
    	<Router basename="/">
            <AppContext.Provider value={{userdata:userdata,setUserdata:setUserdata,tryLogin:tryLogin,tryLogout:tryLogout}}>
    	      	<Switch>
    	        	<Route exact path="/">               
                        <Dasboard/>
    	          	</Route>
                    <Route path="/Master/:sub">
                        <MasterUser/>
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
