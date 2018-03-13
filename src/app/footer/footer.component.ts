import { Component, OnInit } from '@angular/core';
import { ContextService } from '../services/context.service';
import { ElementoFooter } from '../models/elementoFooter';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  vociFooter: ElementoFooter[] = [];
  constructor(private context: ContextService) { }

  ngOnInit() {
    this.context.getElementiFooter().subscribe(voci => {
      this.vociFooter = voci;
    });
  }

}
