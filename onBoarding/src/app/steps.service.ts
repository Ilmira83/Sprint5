import { Injectable, Input } from '@angular/core';
import { IStep } from './i-step';



@Injectable({
  providedIn: 'root'
})
export class StepsService {

  getSteps(): IStep[] {
    return [
      {title: 'Hello', description: 'string', img: 'string', bgcolor: 'string'},
      {title: 'Hello2', description: 'string2', img: 'string2', bgcolor: 'string2'}
      ]
  }  
  constructor() { }      
}        
        
  

  

