
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Editorial } from './editorial';
import { EditorialDetail } from './editorial-detail';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const editorials = 'editorials.json';

/**
* The service provider for everything related to editorials
*/
@Injectable()
export class EditorialService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
  
    getEditorials() : Observable<Editorial[]> {
        return this.http.get<Editorial[]>(API_URL + editorials);
    }

     /**
    * Returns the Observable object containing the editorial retrieved from the API
    * @returns The editorial
    */
    getEditorialDetail(editorialId): Observable<EditorialDetail> {
      console.log(editorialId+" "+API_URL + "editorial-" + editorialId+".json");
        return this.http.get<EditorialDetail>(API_URL + "editorial-" + editorialId+".json");
    }
    
}