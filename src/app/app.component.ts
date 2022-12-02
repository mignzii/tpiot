import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActionutilisateurService } from './actionutilisateur.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webclient';
  etat:any
  constructor(private actionuser:ActionutilisateurService) { }
  ngOnInit(): void {
    this.actionuser.recupone().subscribe(data=>{
      this.etat=data
      console.log(this.etat)
    })
  }
  postallumer(){
    this.actionuser.data={
      allumer:"allumer"
    }
    this.actionuser.postaction().subscribe(data=> {
      console.log(data)
      window.location.reload();

    })
  }
  posteteindre(){
    this.actionuser.data={
      eteindre:"eteindre"
    }
    this.actionuser.postaction().subscribe(data=>window.location.reload()
    )
  }
}
