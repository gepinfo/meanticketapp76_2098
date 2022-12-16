import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import Select from "react-select";
import "./createseverity.scss";

import {service} from './createseverity.service';


class Createseverity extends React.Component<any, any> {

     gridApi: any;
     gridColumnApi: any;
    test = new service ("");
    constructor(props:any){
       super(props);
    this.state={ 
    severity : {
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
            this.setState({ severity: { ...this.state.severity, [e.target.name]: e.target.value } }) 
         }

         else if(Array.isArray(e)){
           let values = e.map((key:any)=>  key.value);
             this.setState({ employee: { ...this.state.employee, [e[0].name]:values } });
         }

         else { this.setState({ severity: { ...this.state.severity, [e.name]: e.value } })}
      
    }
    

    componentDidMount() {
        this.state.severity.created_by = sessionStorage.getItem('email')||'{}'; 
    }
    GpCreate() {
      this.test.GpCreate(this.state.severity).then((data:any) => {
            
        },
        (error:any) => {
            console.log('Error', error);
        });
    }

    render(){
        return(
            <>
            <h2 className="screen-align">createseverity</h2>
            <div id="template-iakn" className="gjs-row">
    <div id="template-iza2" className="gjs-cell">
        <label id="template-iwyo" className="label ">
            <div id="template-if574" className="">Name</div>
        </label>
        <input id="template-ipef" onChange={this.handlechange} name="name" value={this.state.severity.name}className="input form-control "
        />
        <button id="template-iuhxu" onClick={()=>this.GpCreate()} className="button btn btn-primary ">
            <div id="template-i0qdv"
            className="">Create</div>
        </button>
    </div>
    <div id="template-i6rc" className="gjs-cell">
        <label id="template-itnz" className="label ">
            <div id="template-i1hg1" className="">Description</div>
        </label>
        <input id="template-iqu8" onChange={this.handlechange} name="description"
        value={this.state.severity.description}className="input form-control "
        />
    </div>
</div>
            </>
        );
    };
};

export default Createseverity;