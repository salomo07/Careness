import React,{useEffect,useState,useCallback,useContext} from 'react';
import {Link} from "react-router-dom";
import BlockUI from '../component/BlockUI'
var $ =window.$;
function Contact(props) {
    var [pokemons, setPokemons] = useState();
    var [detail, setDetail] = useState();
    useEffect(()=>{
        if(pokemons==undefined)
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=1").then(res => res.json()).then(
            (result) => {
                console.log(result.results);setPokemons(result.results);
            },
            (error) => {
              setPokemons([]);
            }
        )
    })
    if(pokemons==null) return (<div className="main-card mb-3 card"><BlockUI/></div>);
    return (
    <div className="main-card mb-3 card">
      <div className="card-body" style={{height:'300px'}}>
        <h6 className="text-muted text-uppercase font-size-md opacity-7 mb-3 font-weight-normal">
          Pokémon List</h6>
        <div className="border-light card-border scroll-area-sm card">
          <div className="scrollbar-container">
            <ul className="list-group list-group-flush">
              { pokemons != undefined &&
                pokemons.map((val,i)=>{
                    return (<Link to={"/detailpoke/"+val.name} key={val.name}><li className="list-group-item"  onClick={()=>{}}>
                      <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left">
                            <div className="widget-heading"><center>{val.name[0].toUpperCase() + val.name.substring(1)}</center></div>
                          </div>
                        </div>
                      </div>
                    </li></Link>)
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
