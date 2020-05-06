import { Component, OnInit } from '@angular/core';

class User {
  firstname: string;
  lastname: string;
  subject:string;
  message: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  user = new User();
contact: string = "Contact:Résidence les écrins d\'azur 701 chemin des quatres chemins 06600 Antibes Tel:0618350674";

  constructor() { }

  ngOnInit() {
  }

  envoyer(user) {
    console.log(this.user);
    }

}
