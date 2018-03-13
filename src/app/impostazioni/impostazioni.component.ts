import { Component, OnInit } from '@angular/core';
import { ContextService } from '../services/context.service';
import { SceltaLinguaService } from '../services/scelta-lingua.service';
import { EtichettaLingua } from '../models/etichetteLingua';

@Component({
  selector: 'app-impostazioni',
  templateUrl: './impostazioni.component.html',
  styleUrls: ['./impostazioni.component.scss']
})
export class ImpostazioniComponent implements OnInit {
  lingua = '';
  etichette: EtichettaLingua;
  constructor(private context: ContextService, private scegliLingua: SceltaLinguaService) { }

  ngOnInit() {
    this.load();
    this.scegliLingua.ascoltaCambioLingua().subscribe(lingua => {this.load(); });
  }

  selezionaLingua(): void {
    if (this.lingua.length > 0) {
      this.context.setLanguage(this.lingua);
      this.scegliLingua.spedisciCambioLingua(this.lingua);
    }
  }

  load() {
    this.etichette = this.context.getEtichetteLingua(this.context.getLanguage());
  }
}
