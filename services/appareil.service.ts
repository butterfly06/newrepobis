import {Input} from '@angular/core';

export class AppareilService {
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;


  switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
  }

  switchOffOne(i: number) {
    this.appareils[i].status = 'éteint';
  }

  onClear() {
    console.log('hello');
  }
}
