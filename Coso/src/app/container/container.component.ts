import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
mac: String[];

  constructor() {
mac=['mac1','mac2','mac3'];
   }

  ngOnInit() {
  }

}
