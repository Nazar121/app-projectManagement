import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent implements OnInit {

  @Input() sprint;

  constructor() { }

  ngOnInit() {
    console.log('sprint ', this.sprint);
  }

}
