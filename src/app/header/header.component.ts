import { Component, OnInit } from '@angular/core';
import { ContextService } from '../services/context.service';
import { ElementoNav } from '../models/elementoNav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  vociMenu: ElementoNav[] = [];
  constructor(private context: ContextService) { }
  ngOnInit() {
    this.vociMenu = this.context.getMenu().sort((a, b) => {
      return a.ordine - b.ordine;
    });
    console.log(this.vociMenu);
  }
}
