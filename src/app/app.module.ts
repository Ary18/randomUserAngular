import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContextService } from './services/context.service';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorPageComponent } from './errorpage/errorpage.component';
import { ImpostazioniComponent } from './impostazioni/impostazioni.component';
import { UtentiService } from './services/utenti.service';
import { DettaglioUtenteComponent } from './dettaglio-utente/dettaglio-utente.component';
import { SceltaLinguaService } from './services/scelta-lingua.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent,
    ContactComponent,
    ErrorPageComponent,
    ImpostazioniComponent,
    DettaglioUtenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ContextService, UtentiService, SceltaLinguaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
