import { Component, OnInit, inject } from '@angular/core';
import { SceneComponent } from '../scene/scene.component';
import { StepsService } from '../steps.service';
import { IStep } from '../i-step';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SceneComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
 })
export class HomeComponent implements OnInit{
  frases: IStep[] = []
  
  private steps = inject(StepsService)

  ngOnInit(): void {
    this.frases = this.steps.getSteps();
  }
  
  }



