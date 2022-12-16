import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import Select from "react-select";
import "./getallticket.scss";

import {service} from './getallticket.service';


class Getallticket extends React.Component<any, any> {
    columnDefs: any = [{ headerName: 'Name', field: 'name'  },{ headerName: 'Description', field: 'description'  },{ headerName: 'callername', field: 'callername'  },{ headerName: 'types', field: 'types'  },{ headerName: 'severity', field: 'severity'  },];

     gridApi: any;
     gridColumnApi: any;
    test = new service ("");
    constructor(props:any){
       super(props);
     this.onRowSelected = this.onRowSelected.bind(this)
    this.state={ 
    tickets : {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
        callername: '',
        types: '',
        severity: '',
    },
    rowData :[],options:[],
 }  }
    

   
    handlechange = (e: any) => {
         if(e?.target){
            this.setState({ tickets: { ...this.state.tickets, [e.target.name]: e.target.value } }) 
         }

         else if(Array.isArray(e)){
           let values = e.map((key:any)=>  key.value);
             this.setState({ employee: { ...this.state.employee, [e[0].name]:values } });
         }

         else { this.setState({ tickets: { ...this.state.tickets, [e.name]: e.value } })}
      
    }
    

    componentDidMount() {
        this.state.tickets.created_by = sessionStorage.getItem('email')||'{}'; 
        this.GpGetAllValues();
    }
    GpGetAllValues() {
      this.test.GpGetAllValues().then((data:any) => {
            this.setState({rowData:data.data})
        },
        (error:any) => {
            console.log('Error', error);
        });
    }
    onRowSelected(event:any) {
        this.props.history.push({pathname:"/updatetickets",state:{id : event.data}})
    }
    onGridReady(params :any) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }

    render(){
        return(
            <>
            <h2 className="screen-align">getallticket</h2>
            <div id="template-ijaf" onClick={()=>this.GpGetAllValues()}className="ag-theme-material" style={{height: '500px',
    width: '100%'}} >
    <AgGridReact columnDefs={this.columnDefs} pagination={true}
    onGridReady={this.onGridReady}defaultColDef={{sortable: true, filter: true
    }} rowData={this.state.rowData} rowSelection={ "single"} onRowSelected={this.onRowSelected
    }></AgGridReact>
</div>
            </>
        );
    };
};

export default Getallticket;