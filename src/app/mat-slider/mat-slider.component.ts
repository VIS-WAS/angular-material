import { Component } from '@angular/core';

@Component({
  selector: 'app-mat-slider',
  templateUrl: './mat-slider.component.html',
  styleUrls: ['./mat-slider.component.css'],
})
export class MatSliderComponent {
  selectedvalue = 0;
  startValue = 0.0;
  endValue = 24;
}
