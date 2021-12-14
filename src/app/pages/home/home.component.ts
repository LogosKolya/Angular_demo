import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public showing: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  show(): void {
    this.showing = false;
  }

}
