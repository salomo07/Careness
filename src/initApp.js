import { ToastContainer,toast} from 'react-toastify';
var PouchDB= window.PouchDB;

// console.log(process.env);
var bcrypt = require('bcryptjs');
var dbLocal = new PouchDB('careness', { skip_setup: true });
// var dbRemote = new PouchDB('http://localhost:5984/careness',{auth:{username:"admin","password":"123"}});
var dbRemote = new PouchDB(process.env.REACT_APP_dbserver,{auth:{username:process.env.REACT_APP_dbusername,"password":process.env.REACT_APP_dbpassword}});
var notifConfig={position: "top-right",autoClose: 3000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined};
var urlScriptMap="https://maps.googleapis.com/maps/api/js?key="+process.env.REACT_APP_google_api_key1+"&callback=updatePosition&callback=initMap&libraries=places";
var urlScriptPlace="https://maps.googleapis.com/maps/api/js?key="+process.env.REACT_APP_google_api_key2+"&libraries=places&callback=initMap";
var PouchDBFind=PouchDB.plugin(require('pouchdb-find'));
export {PouchDB,bcrypt,dbLocal,dbRemote,notifConfig,toast,ToastContainer,urlScriptMap,urlScriptPlace}