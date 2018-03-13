import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SceltaLinguaService {
  private subject = new Subject<any>();

  spedisciCambioLingua(message: string) {
      this.subject.next({ text: message });
  }

  pulisciMessaggio() {
      this.subject.next();
  }

  ascoltaCambioLingua(): Observable<any> {
      return this.subject.asObservable();
  }
  constructor() { }


}
