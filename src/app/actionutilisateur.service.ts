import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionutilisateurService {

  constructor(private http:HttpClient) { }
  public data:any
  public apiurl="http://localhost:6001/getetat"
  public apiurl2="http://localhost:6001/commande"
  recupone():Observable<any>{
    return this.http.get(this.apiurl)
  }
  postaction():Observable<any>{
    return this.http.post(this.apiurl2,this.data)
  }

}
