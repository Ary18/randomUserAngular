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
    this.context.getMenu(this.context.getLanguage()).subscribe(vociMenu => {this.vociMenu = vociMenu; });
    console.log(this.vociMenu);
  }
}
