import { Component, Input } from '@angular/core';
import { IStep } from '../i-step';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-scene',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scene.component.html',
  styleUrl: './scene.component.css'
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
  

