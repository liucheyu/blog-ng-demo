import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lside',
  templateUrl: './lside.component.html',
  styleUrls: ['./lside.component.css']
})
export class LsideComponent implements OnInit {

  constructor() { }

  subjects = [
    "markdown","angular","java"
  ]

  ngOnInit(): void {
  }

}
