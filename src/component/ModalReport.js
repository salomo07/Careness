import React,{useEffect,useState,useContext,useCallback} from 'react';
import {AppContext} from '../component/AppContext';
import Functions from '../Functions';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

var {dbLocal,dbRemote,toast,urlScriptPlace}=require ("../initApp.js");

var $=window.$;
var currentLoc,ck,map,infoWindow,marker,autocomplete;
var source ={localdata: [{}],datatype: "json"};
var columns=[
  { text: '<center>Item / Service Name</center>', datafield: 'itemname', width: 'auto',cellsalign: 'center'},
  { text: '<center>Qty</center>', datafield: 'qty', width: 'auto',filtertype:'number' ,cellsalign: 'center'},
  { text: '<center>Units</center>', datafield: 'units', width: 'auto', cellsalign: 'center'},
  { text: '<center>Description</center>', datafield: 'desc', width: 'auto', cellsalign: 'center'}];


function ModalReport() {
  var userdata=useContext(AppContext).userdata;
  var setUserdata=useContext(AppContext).setUserdata;

  var [report,setReport] = useState({});
  var [reportCategories,setReportCategories] = useState([]);
  var [show,setShow] = useState(true);

  var dataAdapter = new $.jqx.dataAdapter(source);
  var setMap=useCallback(()=>{
    // var script = document.createElement('script');script.src = urlScriptPlace; script.defer = true; script.async = true; document.head.appendChild(script);
  })

  useEffect(()=>{

    $("#reportModal").on('show.bs.modal', function(){

      if(userdata.report!=undefined){report=userdata.report;setReport(userdata.report);currentLoc=userdata.report.location!=undefined?userdata.report.location:null; }
      setMap();
      $('#smartwizard').css("border-color","#6ac6f0");
      $('#smartwizard').smartWizard({transitionEffect: 'slide',theme:"arrows",autoAdjustHeight:false, 
          toolbarSettings: {toolbarPosition: 'bottom',toolbarButtonPosition: 'center'},lang:{next:'',previous:''}
      });
      $(".btn.sw-btn-next").html($('<i class="fa fa-angle-right"></i>'));
      $(".btn.sw-btn-prev").html($('<i class="fa fa-angle-left"></i>'));
      $("#smartwizard").on("leaveStep", function(e, anchorObject, currentStepIdx, nextStepIdx, stepDir) 
        {
          console.log('step',report);
          if(report._id==undefined)
          {report._id=new Date().toISOString();}
          console.log('currentLoc',currentLoc)
          if(currentStepIdx==0)
          {
              if($('#inputTitle').val()==""){toast("You must enter Title...");return false;}
              else if($('#selectCategory :selected').val()==""){toast("You must select Category...");return false;}
              else if(ck.getData()==""){toast("You must enter Description...");return false;}
              else 
              {
                report.title=$('#inputTitle').val();
                report.category=$('#selectCategory :selected').val();
                report.description=ck.getData();
                report.coll="report";
                report.createdby=userdata._id;
                report.status="created";
                new Functions().put(report,(res,err)=>{
                    if(!err)
                    report._rev=res.rev;
                    userdata.report=report;
                    setReport(report);
                    setUserdata(userdata);
                })
                return true;
              }
          }
          else if(currentStepIdx==1)
          {
              if($('#selectedPlace').val()==""){toast("You cant skip this step without tag a location");return false;}
              else
              {
                  report.location=currentLoc;
                  new Functions().put(report,(res,err)=>{
                      if(!err)
                      report._rev=res.rev;
                      userdata.report=report;
                      setReport(report);
                      setUserdata(userdata);
                  })
              }
          }
          else if(currentStepIdx==2)
          {
            console.log($('#jqxgrid').jqxGrid('getrowdata', 0));
            console.log($('#jqxgrid').jqxGrid('getrows'));

          }
          else if(currentStepIdx==3)
          {}
        });
      new Functions().querying('carenessDesign/reportcategories',(res,err)=>{
        if(err){return false;}
        setReportCategories(res.rows);
        if(userdata.report.description!=undefined){ck.setData(userdata.report.description)}
      })
    });
    
    
    ClassicEditor.create(document.querySelector('#ckEditor'),{removePlugins: [ 'Heading', 'Link','Table','ImageUpload','MediaEmbed']}).then( editor => {ck=editor;  } ).catch( error => {console.error( error );});

    $("#jqxgrid").jqxGrid({width:'100%',theme:'ui-start',editable: true,source: dataAdapter,columnsresize: true,columns :columns});

  },[userdata]);

  return (
    <div className="modal" tabIndex="-1" role="dialog" >{console.log('modal',report)}
      <div className="modal-dialog modal-dialog-centered" id="reportModal" role="document" style={{width:'90%',height:'90%'}}> 
          <div className="modal-content" style={{height :'100%',display: 'flex',flexDirection: 'column'}}>
              <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  <h4 className="modal-title">Make a report</h4>
              </div>
              <div className="modal-body" style={{maxHeight:'90%', overflow:'auto'}}>
                  <div id="smartwizard">
                    <ul className="nav">
                       <li>
                           <a className="nav-link" href="#step-1">
                              Title & Description <i className="fa fa-pencil-square-o"></i>
                           </a>
                       </li>
                       <li>
                           <a className="nav-link" href="#step-2">
                              Tag Location <i className="fa fa-map-marker"></i>
                           </a>
                       </li>
                       <li>
                           <a className="nav-link" href="#step-3">
                              Details of needs <i className="fa fa-file-text-o"></i>
                           </a>
                       </li>
                    </ul>
                   
                    <div className="tab-content" style={{height:'auto'}}>
                      <div id="step-1" className="tab-pane" role="tabpanel">
                        <p>
                          <a className="showIns" onClick={()=>{setShow(!show)}} data-toggle="collapse" data-target=".multi-collapse"><i className={show==true ? "fa fa-chevron-down" : "fa fa-chevron-up"} type="button"  ></i>  Show Instructions</a>
                        </p>
                        <div className="collapse multi-collapse">
                          <div className="card panel-body">
                          Please write the list what items or services needed.
                          </div>
                        </div>
                        <div className="space-10"></div>
                        <label>Report Title</label>
                        <input id="inputTitle" title="Set Title for your Report" placeholder="Enter title..." className="form-control" defaultValue={report.title?report.title:""}/>
                        <div className="space-30"></div>
                        <label htmlFor="selectCategory">Category</label><br/>
                        <select defaultValue={report.category?report.category:""} id="selectCategory" title="Set Category for your Report" name="selectCategory" style={{width:'100%',padding:'8px 20px',height:'auto'}} name="state">
                        <option value={report.category?report.category:""} disabled hidden>{report.category?report.category:"Choose here"}</option>
                        {
                          reportCategories.map(cat =>(
                            <optgroup label={cat.value.name} key={cat.value._id}>
                              {cat.value.subs.map(sub=>(
                                <option value={sub.name} key={sub.name}>{sub.name}</option>
                                ))}
                            </optgroup>)
                          )
                        }
                        </select>
                        <div className="space-30"></div>
                        <label>Report Description</label>
                        <textarea id="ckEditor" placeholder="Please describe as you can about problem, incident, event, that need some help" ></textarea>
                      </div>
                      <div id="step-2" className="tab-pane" role="tabpanel" style={{height:'auto'}}>
                        <p>
                          <a className="showIns" onClick={()=>{setShow(!show)}} data-toggle="collapse" data-target=".multi-collapse"><i className={show==true ? "fa fa-chevron-down" : "fa fa-chevron-up"} type="button"  ></i>  Show Instructions</a>
                        </p>
                        <div className="collapse multi-collapse">
                          <div className="card card-body">
                          Please write the list what items or services needed.
                          </div>
                        </div>
                        <label>Tag a location</label>
                        <div className="row">
                            <div className="col col-lg-6">
                                <input id="inputPlace" title="Find place or right click on map" placeholder="Search a place..." className="form-control" />
                            </div>
                            <div className="col col-lg-6">
                                <input id="selectedPlace" title="Tagged location" className="form-control" disabled/>
                            </div>
                        </div>
                        <p className="text-center">You can tag location of who needs our help by search box or right click on map</p>
                        <div id='map' style={{height:'300px',width:'auto', borderStyle: 'groove'}}></div>
                      </div>
                      <div id="step-3" className="tab-pane" role="tabpanel">
                        <p>
                          <a className="showIns" onClick={()=>{setShow(!show)}} data-toggle="collapse" data-target=".multi-collapse"><i className={show==true ? "fa fa-chevron-down" : "fa fa-chevron-up"} type="button"  ></i>  Show Instructions</a>
                        </p>
                        <div className="collapse multi-collapse">
                          <div className="card">
                            <div className="card card-body">
                              <blockquote className="blockquote text-center">Please make a list what items or services needed</blockquote>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="col-sm-6">
                              <button type="button" className="btn btn-info" title="Add row for more item or more service">Add Row</button>
                            </div>
                            <div className="col-sm-6">
                              <button type="button" className="btn btn-info" title="Delete row">Delete Row</button>
                            </div>
                          </div>
                        </div>
                        <div className="space-30"></div>
                        <div id="jqxgrid"></div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
window.initMap=()=> {
    if (navigator.geolocation) { //Set watchPosition / currentPosition
        var id =navigator.geolocation.watchPosition((position) =>{
                console.log('currentLoc',currentLoc);
                if(!currentLoc){currentLoc={lat: position.coords.latitude,lng: position.coords.longitude};}
                
                map = new window.google.maps.Map(document.getElementById("map"), {center: currentLoc,zoom: 17});
                marker = new window.google.maps.Marker({position: currentLoc, map: map,title: 'Tagged place'});
                infoWindow = new window.google.maps.InfoWindow();
                map.setCenter(currentLoc);
                $('#selectedPlace').val("("+currentLoc.lat+","+currentLoc.lng+") tagged");
                $('#inputPlace').val(""); 
                autocomplete = new window.google.maps.places.Autocomplete(document.getElementById("inputPlace"));
                autocomplete.setFields(['name','geometry']);


                window.google.maps.event.addListener(autocomplete, 'place_changed', function() {
                    infoWindow.close();
                    var place = autocomplete.getPlace();
                    console.log('name',place.name)

                    if (!place.geometry) {
                        toast.info("No details available for this place");
                    }
                    else
                    {
                        currentLoc={lat: place.geometry.location.lat(),lng: place.geometry.location.lng()};
                        $('#selectedPlace').val(place.name+" tagged");
                        $('#selectedPlace').prop('title', currentLoc.lat+","+currentLoc.lng+" tagged");

                        marker.setMap(null);marker=null;
                        marker = new window.google.maps.Marker({position: currentLoc, map: map,title: 'Tagged place'});

                        marker.setPosition(place.geometry.location);
                        map.setCenter(place.geometry.location);
                    }
                });


                window.google.maps.event.addListener(map, "rightclick", (event)=> {
                    currentLoc={lat: event.latLng.lat(),lng: event.latLng.lng()};
                    $('#selectedPlace').val("("+currentLoc.lat+","+currentLoc.lng+") tagged");
                    console.log('rightclick',1);$('#inputPlace').val("");
                    marker.setMap(null);marker=null;

                    marker = new window.google.maps.Marker({position: new window.google.maps.LatLng(event.latLng.lat(),event.latLng.lng()),map: map,title: 'Tagged place'});

                    map.setCenter(new window.google.maps.LatLng(event.latLng.lat(),event.latLng.lng()));
                });
                navigator.geolocation.clearWatch(id);
            },
            (err) =>{console.log('err',err); toast.error("Cannot get your location, check your connection");},
            {enableHighAccuracy: true,timeout:5000,maximumAge:Infinity}
        );
      } else {
        toast.error("Your browser cannot support GeoLocation :(");
    }
};
export default ModalReport;
