import { Injectable, Input } from '@angular/core';
import { IStep } from './i-step';



@Injectable({
  providedIn: 'root'
})
export class StepsService {

  getSteps(): IStep[] {
    
    return [
      { index: 0,
        title: 'Dedica moltes hores', 
       description: 'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.', 
       img: 'assets/icon1.svg',
       bgcolor: 'blue'},
      { index: 1,
        title: 'Programa projectes propis',
       description: 'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.', 
       img: 'assets/icon2.svg',
       bgcolor: 'gray'},
      { index: 2,
        title: 'Procura descansar',
       description: 'Descansar bé i desconnectar són vitals. D`aquesta manera reduiràs l`estrès i l`ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.',
       img: 'assets/icon3.svg',
       bgcolor: 'orange'}
      ]
  }  
  
  constructor() { }      
}        
        
  

  

