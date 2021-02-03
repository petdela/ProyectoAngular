import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css','../../../assets/css/admin.css']
})
export class StepComponent implements OnInit {
  @Input() titulo: string;
  @Input() numero: string;
  constructor() { }

  ngOnInit(): void {
  }

}
