import { Component } from '@angular/core';
import { trigger, transition, useAnimation, state, style } from '@angular/animations';
import { buttonClickAnimation } from '../animations/button-click.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('buttonClickAnimation', 
    [
      transition('initial => final', 
        useAnimation(buttonClickAnimation, {
          params: {
            firstScale: 1.0,
            secondScale: 1.3,
            time: '300ms'
          }
        })
      ),
    ])
  ]
})
export class AboutComponent {
  animationState = 'initial';

  toggleAnimation() {
    this.animationState = this.animationState === 'initial' ? 'final' : 'initial';
  }

  animationDone() {
    this.animationState = 'initial';
  }
}
