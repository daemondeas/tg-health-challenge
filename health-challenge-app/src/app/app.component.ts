import { Component, OnInit } from '@angular/core';
import { Excercise } from './excercise';
// import { Excercise } from './excercise';
import { EXCERCISES } from './excercises';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Health challenge calculator';
  excercises = EXCERCISES;
  selectedExcercise: Excercise = EXCERCISES[0];
  excerciseLength: number = 0;
  numberOfSteps: number = 0;
  distance: number = 0;

  manualSteps: number = 0;
  manualDistance: number = 0;

  onExcerciseChange(): void{
    this.numberOfSteps = (this.excerciseLength / 30) * this.selectedExcercise.stepsPerHalfHour;
    this.distance = this.numberOfSteps / 1400;
  }

  onStepsChange(): void{
    this.manualDistance = this.manualSteps / 1400;
  }
}
