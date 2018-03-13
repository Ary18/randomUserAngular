import { Component, OnInit } from '@angular/core';
import { ContextService } from '../services/context.service';
import { ElementoNav } from '../models/elementoNav';
import { SceltaLinguaService } from '../services/scelta-lingua.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  vociMenu: ElementoNav[] = [];
  constructor(private context: ContextService, private sceltaLingua: SceltaLinguaService) { }
  ngOnInit() {
    this.load();
    this.sceltaLingua.ascoltaCambioLingua().subscribe(lingua => {
      this.load();
    });
  }

  load() {
    this.context.getMenu(this.context.getLanguage()).subscribe(vociMenu => {this.vociMenu = vociMenu; });
  }
}
