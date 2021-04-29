import React,{useEffect,useState,useCallback,useContext} from 'react';
import {AppContext} from '../component/AppContext';
var $=window.$;
function Contact(props) {
    var [contacts, setContacts] = useState();
    var [detail, setDetail] = useState();
    var userdata=useContext(AppContext).userdata;
    useEffect(()=>{

        if(contacts==undefined)
        fetch("/contact").then(res => res.json()).then(
            (result) => {
                setContacts(result.data); console.log(result.data)
            },
            (error) => {
              setContacts([]);console.log('Error',error);
            }
        )
    })
    var loadContacts=useCallback(()=>{
        fetch("/contact").then(res => res.json()).then(
            (result) => {
                setContacts(result.data);console.log(result.data)
            },
            (error) => {
              setContacts([]);console.log('Error');
            }
        )
    });
    var loadDetailContact=useCallback((id)=>{
        $("#btnSaveContact").prop('disabled', true);
        fetch("https://simple-contact-crud.herokuapp.com/contact/"+id).then(res => res.json()).then(
            (result) => {
                setDetail(result.data);
                $("#detailModal").find("#txtFirstname").val(result.data.firstName);
                $("#detailModal").find("#txtLastname").val(result.data.lastName);
                $("#detailModal").find("#txtAge").val(result.data.age);
                $("#detailModal").find("#inputId").val(result.data.id);
                $("#detailModal").find("#txtPhoto").text(result.data.photo);
                
                $("#btnSaveContact").prop('disabled', false);
            },
            (error) => {
              setDetail([]);$("#btnSaveContact").prop('disabled', false);
            }
        )
    });
    var deleteContact=useCallback((id)=>{
        // var conf={method: 'DELETE'};
        var conf={method: 'DELETE',headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin':"*"}}
        fetch("/contact/"+id,conf).then(res => res.json()).then(
            (result) => {
                console.log('Deleted',result);loadContacts();
            },
            (error) => {
              setDetail([]);$("#btnSaveContact").prop('disabled', false);
            }
        )
    })
    if(userdata==null) return (<></>);
    return (
    <div className="card-shadow-primary card-border mb-3 card">
        <div className="p-3">
          <h6 className="text-muted text-uppercase font-size-md opacity-5 font-weight-normal">Contact</h6>
          <button data-toggle="modal" data-target="#addModal" href="#" className="mb-2 mr-2 btn-pill btn btn-info" onClick={()=>{

          }}>Add Contact</button>
          <ul className="list-group">
            {contacts != undefined &&
                contacts.map((val, index) =>{
                    return (
                        <li className="list-group-item widget-chart widget-chart-hover" key={val.id} onClick={()=>{
                            loadDetailContact(val.id);
                        }}>
                        
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                <a data-toggle="modal" data-target="#detailModal" href="#" >
                              <div className="widget-content-left mr-3">
                                <img width={42} height={42} onError={(e)=>{e.target.src="img/user.png"}} className="rounded-circle" src={val.photo} alt={val.firstName} />
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">{val.firstName} {val.lastName}</div>
                                <div className="widget-subheading">{val.age} years old</div>
                              </div>
                              </a>
                              <div className="widget-content-right">
                                <button className="mr-2 btn-icon btn-icon-only btn btn-outline-danger" onClick={()=>{
                                    deleteContact(val.id);
                                }}>
                                    <i className="pe-7s-trash btn-icon-wrapper"> </i>
                                </button>
                              </div>
                                </div>
                            </div>
                            
                        </li>
                    )
                })
            }
            {contacts == undefined &&
                <div className="loader-wrapper d-flex justify-content-center align-items-center">
                    <div className="loader">
                        <div className="ball-pulse">
                            <div></div>
                        </div>
                    </div>
                </div>
            }
          </ul>
        </div>
    </div>
  );
}

export default Contact;
