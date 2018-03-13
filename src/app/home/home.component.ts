import { Component, OnInit } from '@angular/core';
import { UtentiService } from '../services/utenti.service';
import { RandomUserMe, Result } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  utenti: Result[];
  constructor(private servizioUtenti: UtentiService) { }

  ngOnInit() {
    this.servizioUtenti.getRandomMeUser(20).subscribe( utenti => {
      this.utenti = utenti.results;
    });
  }

}
