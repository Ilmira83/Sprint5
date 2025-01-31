import { Component, Input } from '@angular/core';
import { IStep } from '../i-step';


@Component({
  selector: 'app-scene',
  standalone: true,
  imports: [],
  templateUrl: './scene.component.html',
  styleUrl: './scene.component.css'
})
export class SceneComponent {
  @Input() frases: IStep[]  = [];
}
