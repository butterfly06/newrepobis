import {Component, Input, NgModule, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


class User {
  username: string;
  password: string;
  message: string;
}

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})

// @NgModule({
//   imports: [
//     FormsModule,
//   ReactiveFormsModule
//   ],
// })
export class AppareilComponent implements OnInit {

  user = new User();
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
text: string = '  Nelson Rolihlahla Mandela (/mænˈdɛlə/;[1] Xhosa: [xolíɬaɬa mandɛ̂ːla]; 18 July 1918 – 5 December 2013) was a South Afr' +
  'anti-apartheid revolutionary, political leader, and philanthropist who served as President of South Africa from 1994 to 1999. He was ' +
  'the country\'s first black head of state and the first elected in a fully representative democratic election. His government focused ' +
  'on dismantling the legacy of apartheid by tackling institutionalised racism and fostering racial reconciliation. Ideologically ' +
  'an African nationalist and socialist, he served as the president of the African National Congress (ANC) party from 1991 to 1997.\n'

  constructor(private appareilService: AppareilService) {
  }

  ngOnInit() {

  }
  onSwitch() {
    if (this.appareilStatus === 'allumé') {
      this.appareilService.switchOffOne(this.index);
    } else if (this.appareilStatus === 'éteint') {
      this.appareilService.switchOnOne(this.index);
    }
  }
  submit(user) {
  console.log(this.user);
  }
}

