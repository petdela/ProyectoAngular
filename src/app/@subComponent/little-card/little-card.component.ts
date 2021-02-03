import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-little-card',
  templateUrl: './little-card.component.html',
  styleUrls: ['./little-card.component.css','../../../assets/css/admin.css']
})
export class LittleCardComponent implements OnInit {
  @Input() clase: string;
  @Input() nombre: string;
  @Input() valor: string;
  constructor() { }

  ngOnInit(): void {
  }

}
