import { Component, Input } from '@angular/core';
import { IStep } from '../i-step';
import { CommonModule } from '@angular/common';
import { trigger, query, group, transition, state, animate, style } from '@angular/animations';
const left = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(-100%)' }), animate('.6s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.6s ease-out', style({ transform: 'translateX(100%)' }))], {
      optional: true,
    }),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(100%)' }), animate('.6s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.6s ease-out', style({ transform: 'translateX(-100%)' }))], {
      optional: true,
    }),
  ]),
];
@Component({
  selector: 'app-scene',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scene.component.html',
  styleUrl: './scene.component.css',
  animations: [
    trigger('cardSlider', [
      transition(':increment', right),
      transition(':decrement', left),
    ])
  ]
})
export class SceneComponent {
  @Input() frases: IStep[] = [];
  currentStep: number = 0;
  

  nextCard() {
   if(this.currentStep <= this.frases.length-1) {
     this.currentStep++
    }
  }

  previuosCard() {
    if(this.currentStep >= 1) {
      this.currentStep--
    } 
  }
  changeCard(index: number) {
    this.currentStep = index
  }



  



  
 
      


}
  

