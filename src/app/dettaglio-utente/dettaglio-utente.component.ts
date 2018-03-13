import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Location, Result } from '../models/user';
import { ContextService } from '../services/context.service';
import { EtichettaLingua } from '../models/etichetteLingua';
@Component({
  selector: 'app-dettaglio-utente',
  templateUrl: './dettaglio-utente.component.html',
  styleUrls: ['./dettaglio-utente.component.scss']
})
export class DettaglioUtenteComponent implements OnInit {
  @Input() utente: Result;
  @Output() open: EventEmitter<string> = new EventEmitter();
  indirizzoCompleto = '';
  etichette: EtichettaLingua;
  constructor(private context: ContextService) { }

  ngOnInit() {
    if (this.utente && this.utente.location) {
      const x: Location = this.utente.location;
      this.indirizzoCompleto += (x.street) ? x.street + ', ' : '';
      this.indirizzoCompleto += (x.city) ? x.city + ', ' : '';
      this.indirizzoCompleto += (x.state) ? x.state + ', ' : '';
      this.indirizzoCompleto += (x.postcode) ? x.postcode : '';
    }
    this.etichette = this.context.getEtichetteLingua(this.context.getLanguage());
  }


  ritornaAllaTabella(): void {
    this.open.emit('ok');
  }

}
