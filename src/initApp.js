import { ToastContainer,toast} from 'react-toastify';

var PouchDB= window.PouchDB;
// var PouchDB = require('pouchdb').default;
var bcrypt = require('bcryptjs');
// var dbLocal = new PouchDB('careness');
var dbLocal = new PouchDB('http://localhost:5984/careness',{auth:{username:"admin","password":"123"}});
var dbRemote = new PouchDB('https://df17193a-efaa-4e9c-b48d-18fe8516ecdc-bluemix.cloudantnosqldb.appdomain.cloud/careness',{auth:{username:"df17193a-efaa-4e9c-b48d-18fe8516ecdc-bluemix","password":"91e0f86ca3fa057b0ea54371bb0ae6483bd0588e9b1364df26a0da73f9e40b64"}});
var notifConfig={position: "top-right",autoClose: 3000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined};
var urlScriptMap="https://maps.googleapis.com/maps/api/js?key=AIzaSyAgNfB2Y4ToSPSHq8Pe9FSBnjOrWewhSEY&callback=updatePosition&callback=initMap&libraries=places";
var urlScriptPlace="https://maps.googleapis.com/maps/api/js?key=AIzaSyDXt7j1fo3iwvnq0NeOgqtqIUsUNPbdFHY&libraries=places&callback=initMap";
var PouchDBFind=PouchDB.plugin(require('pouchdb-find'));
export {PouchDB,bcrypt,dbLocal,dbRemote,notifConfig,toast,ToastContainer,urlScriptMap,urlScriptPlace,PouchDBFind}