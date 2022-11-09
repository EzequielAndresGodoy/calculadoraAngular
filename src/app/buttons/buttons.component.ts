import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  // @Input

  text="Este es mi boton"
  constructor() { }

  ngOnInit() {
  }
  clickEvent(){}
}
