import axios from 'axios';
import React from "react";
import { Web } from '../../shared/shared.service';



export class service extends React.Component { 

   GpUpdate=(tickets:any) => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.put(Web() + '/tickets' + `?jwt_token=${jwt_token}`, tickets);
    }
   GpGetNounById=(ticketsId:any) => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.get(Web()+ '/tickets/' + ticketsId + `?jwt_token=${jwt_token}`);
    }
   entitytypesGpGetAllValues= () => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.get(Web() + '/types' + `?jwt_token=${jwt_token}`);
    }
   entitytypesGpGetAllValues= () => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.get(Web() + '/types' + `?jwt_token=${jwt_token}`);
    }
}