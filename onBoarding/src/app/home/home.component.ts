import { Component, OnInit } from '@angular/core';
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

  constructor(private stepsService: StepsService) {} //injection of service StepsService

  ngOnInit(): void {
    this.frases = this.stepsService.getSteps();
  }
}
