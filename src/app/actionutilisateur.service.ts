import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionutilisateurService {

  constructor(private http:HttpClient) { }
  public data:any
  public apiurl="https://tpiotbackend2-7gpsy0fj0-mignzii.vercel.app/getetat"
  public apiurl2="https://tpiotbackend2-7gpsy0fj0-mignzii.vercel.app/commande"
  recupone():Observable<any>{
    return this.http.get(this.apiurl)
  }
  postaction():Observable<any>{
    return this.http.post(this.apiurl2,this.data)
  }

}
