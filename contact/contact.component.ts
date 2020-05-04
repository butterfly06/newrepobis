import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

contact: string = "Contact:Résidence les écrins d\'azur 701 chemin des quatres chemins 06600 Antibes Tel:0618350674";

  constructor() { }

  ngOnInit() {
  }

}
