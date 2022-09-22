import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  public message = 'This is interpolation at Work';

  constructor() { }

  ngOnInit(): void {
  }

  helloMessage() {
    return "This is a helloMessage method invocation. The expression must result in a string";
  }

}
