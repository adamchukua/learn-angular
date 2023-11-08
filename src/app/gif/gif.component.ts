import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent {
  @Input() gifSrc = '';
}
