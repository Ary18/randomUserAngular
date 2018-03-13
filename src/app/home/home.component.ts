import { Component, OnInit } from '@angular/core';
import { UtentiService } from '../services/utenti.service';
import { RandomUserMe, Result } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mostraTabella: boolean;
  utenti: Result[];
  utenteSelezionato: Result;
  constructor(private servizioUtenti: UtentiService) {
    this.mostraTabella = true;
   }

  ngOnInit() {
    this.servizioUtenti.getRandomMeUser(20).subscribe( utenti => {
      this.utenti = utenti.results;
    });
  }

  visualizzaDettaglioUtente(utente: Result) {
    this.mostraTabella = false;
    this.utenteSelezionato = utente;
  }

  tornaAVisualizzareTabella(argomento: string): void {
    this.mostraTabella = true;
  }

}
