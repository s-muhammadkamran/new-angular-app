import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `
    <p class="myFont" id="myColor">This component is rendered from Inline Tempalate and it works!</p>
  `,
  styles: [`
      p {
        background:black;
      }

      .myFont {
        font-size:35px;
        font-family:comic sans ms;
      }

      #myColor {
        color:white;
      }
  `]
})
export class InlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
