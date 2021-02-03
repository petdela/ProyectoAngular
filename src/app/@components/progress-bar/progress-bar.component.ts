import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css','../../../assets/css/admin.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() titulo1: string;
  @Input() titulo2: string;
  @Input() titulo3: string;
  constructor() { }

  ngOnInit(): void {
  }

}
