import axios from 'axios';
import React from "react";
import { Web } from '../../shared/shared.service';



export class service extends React.Component { 

   GpSearch=(tickets:any) => {
        const temp:any= [];
 	 	const objectKeyPair = Object.entries(tickets);
 	 	objectKeyPair.forEach((element, index) => {
 	 	if (element[1]) {
 	 	temp.push(`${element[0]}=${element[1]}`);
 	 	}
 	 	});
 	 	let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.get(Web() + `/tickets/get/search?${temp.length > 0 ? `&${temp.join('&')}` : ''}`);
    }
   entitytypesGpGetAllValues= () => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.get(Web() + '/types' + `?jwt_token=${jwt_token}`);
    }
   entityseverityGpGetAllValues= () => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.get(Web() + '/severity' + `?jwt_token=${jwt_token}`);
    }
   GpGetAllValues= () => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.get(Web() + '/tickets' + `?jwt_token=${jwt_token}`);
    }
}