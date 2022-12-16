import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import Select from "react-select";
import "./createtype.scss";

import {service} from './createtype.service';


class Createtype extends React.Component<any, any> {

     gridApi: any;
     gridColumnApi: any;
    test = new service ("");
    constructor(props:any){
       super(props);
    this.state={ 
    types : {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
    },
    rowData :[],options:[],
 }  }

   
    handlechange = (e: any) => {
         if(e?.target){
            this.setState({ types: { ...this.state.types, [e.target.name]: e.target.value } }) 
         }

         else if(Array.isArray(e)){
           let values = e.map((key:any)=>  key.value);
             this.setState({ employee: { ...this.state.employee, [e[0].name]:values } });
         }

         else { this.setState({ types: { ...this.state.types, [e.name]: e.value } })}
      
    }
    

    componentDidMount() {
        this.state.types.created_by = sessionStorage.getItem('email')||'{}'; 
    }
    GpCreate() {
      this.test.GpCreate(this.state.types).then((data:any) => {
            
        },
        (error:any) => {
            console.log('Error', error);
        });
    }

    render(){
        return(
            <>
            <h2 className="screen-align">createtype</h2>
            <div id="template-i288" className="gjs-row">
    <div id="template-i13k" className="gjs-cell">
        <label id="template-ipsk" className="label ">
            <div id="template-igfhi" className="">Name</div>
        </label>
        <input id="template-ilti" onChange={this.handlechange} name="name" value={this.state.servicetypes.name}className="input form-control "
        />
        <button id="template-ieabd" onClick={()=>this.GpCreate()} className="button btn btn-primary ">
            <div id="template-ixdvb"
            className="">Create</div>
        </button>
    </div>
    <div id="template-ioak" className="gjs-cell">
        <label id="template-ib1o" className="label ">
            <div id="template-i6bhr" className="">Description</div>
        </label>
        <input id="template-ibjy" onChange={this.handlechange} name="description"
        value={this.state.servicetypes.description}className="input form-control "
        />
    </div>
</div>
            </>
        );
    };
};

export default Createtype;